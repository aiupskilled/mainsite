"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "aiu_cookie_consent";
const NEWSLETTER_SUBSCRIBED_KEY = "aiu_newsletter_subscribed";
const NEWSLETTER_DISMISS_UNTIL_KEY = "aiu_newsletter_dismiss_until";
const DISMISS_DURATION_MS = 1000 * 60 * 60 * 24 * 3;

function setCookie(name: string, value: string, maxAgeSeconds: number) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
}

export function SiteEnhancements() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) setShowCookieBanner(true);
  }, []);

  useEffect(() => {
    const subscribed = localStorage.getItem(NEWSLETTER_SUBSCRIBED_KEY) === "1";
    if (subscribed) return;

    const dismissedUntil = Number(localStorage.getItem(NEWSLETTER_DISMISS_UNTIL_KEY) ?? "0");
    if (dismissedUntil > Date.now()) return;

    let shown = false;
    const onScroll = () => {
      if (shown) return;
      const scrollPoint = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const threshold = Math.max(700, docHeight * 0.35);
      if (scrollPoint >= threshold) {
        shown = true;
        setShowNewsletterPopup(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!showNewsletterPopup) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismissNewsletterPopup();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showNewsletterPopup]);

  function dismissNewsletterPopup() {
    localStorage.setItem(NEWSLETTER_DISMISS_UNTIL_KEY, String(Date.now() + DISMISS_DURATION_MS));
    setShowNewsletterPopup(false);
    setError(null);
  }

  function acceptCookies(mode: "all" | "essential") {
    localStorage.setItem(COOKIE_CONSENT_KEY, mode);
    setCookie(COOKIE_CONSENT_KEY, mode, 60 * 60 * 24 * 180);
    setShowCookieBanner(false);
  }

  async function onNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (response.ok || response.status === 409) {
        localStorage.setItem(NEWSLETTER_SUBSCRIBED_KEY, "1");
        setShowNewsletterPopup(false);
        setEmail("");
        return;
      }

      const data = (await response.json()) as { error?: string };
      setError(data.error ?? "Unable to subscribe right now.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {showNewsletterPopup ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/45 p-4">
          <div className="w-full max-w-md rounded-2xl border border-black/10 bg-white p-6 shadow-[0_30px_100px_rgba(17,17,17,0.28)]">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-black tracking-tight">Subscribe to Newsletter</h2>
              <button
                type="button"
                aria-label="Close newsletter popup"
                onClick={dismissNewsletterPopup}
                className="rounded-full border border-black/10 px-2.5 py-1 text-sm text-black/60 transition hover:border-black/20 hover:text-black"
              >
                x
              </button>
            </div>
            <p className="mt-2 text-sm text-black/68">
              Get weekly AI strategy and automation workflows for faster execution.
            </p>
            <form className="mt-5 space-y-3" onSubmit={onNewsletterSubmit}>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your business email"
                className="h-12 w-full rounded-full border border-black/10 bg-bg px-5 text-sm outline-none transition focus:border-accent"
              />
              <button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
          </div>
        </div>
      ) : null}

      {showCookieBanner ? (
        <div className="fixed inset-x-4 bottom-20 z-[65] mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-4 shadow-[0_20px_70px_rgba(17,17,17,0.18)] md:inset-x-8 md:bottom-24 md:p-5">
          <p className="text-sm text-black/75">
            We use cookies to improve site performance and user experience. You can accept all cookies or keep essential cookies only.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => acceptCookies("all")}
              className="h-10 rounded-full bg-black px-5 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={() => acceptCookies("essential")}
              className="h-10 rounded-full border border-black/15 bg-white px-5 text-sm font-semibold text-black transition hover:border-accent hover:text-accent"
            >
              Essential Only
            </button>
          </div>
        </div>
      ) : null}

      <Link
        href="/contact"
        className={`fixed right-4 z-[60] inline-flex h-12 items-center rounded-full bg-black px-5 text-sm font-semibold text-white shadow-lg transition hover:bg-accent md:right-8 ${
          showCookieBanner ? "bottom-40 md:bottom-44" : "bottom-20 md:bottom-24"
        }`}
      >
        Contact Us
      </Link>

      <div className="fixed inset-x-0 bottom-0 z-[58] border-t border-black/10 bg-[linear-gradient(90deg,#ffffff_0%,#fff5f5_40%,#ffffff_100%)] shadow-[0_-12px_35px_rgba(255,107,107,0.18)] backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:h-[68px] md:px-8">
          <p className="line-clamp-1 text-xs font-semibold uppercase tracking-[0.14em] text-black/80 md:text-sm">
            <span className="new-offer-badge rounded-full px-2.5 py-1 text-white">NEW</span>{" "}
            <span className="font-black text-black">AI FOUNDATION COURSE</span>{" "}
            <span className="rounded-md bg-black px-2 py-0.5 font-black text-white">Rs 159</span>{" "}
            <span className="rounded-md bg-accent px-2 py-0.5 font-black text-white">95% OFF</span>
          </p>
          <Link
            href="https://courses.aiupskilled.com/learn/ai-foundation-course-for-beginners"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-accent px-5 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(255,107,107,0.35)] transition hover:scale-[1.03] hover:brightness-105 md:h-11 md:px-6"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
}
