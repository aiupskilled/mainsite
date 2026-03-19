import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AIUPSKILLED website, courses, and newsletter.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | AIUPSKILLED",
    description: "Privacy policy for AIUPSKILLED website, courses, and newsletter.",
    url: `${siteConfig.url}/privacy-policy`
  }
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-14 md:px-8">
      <h1 className="text-3xl font-black tracking-tight md:text-5xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-black/60">Last updated: March 19, 2026</p>

      <div className="prose-content mt-8 space-y-6">
        <section>
          <h2>1. Data We Collect</h2>
          <p>
            We collect limited data needed to operate the platform, including contact details (such as email),
            course-related activity, and communication preferences.
          </p>
        </section>

        <section>
          <h2>2. How We Use Data</h2>
          <p>
            We use this data to deliver course access, send requested updates, improve user experience, and provide
            support.
          </p>
        </section>

        <section>
          <h2>3. Payments and Third Parties</h2>
          <p>
            Payments are processed through Razorpay and associated banking/payment networks. We do not store complete
            card details on our servers.
          </p>
          <p>
            Reference: <a href="https://razorpay.com/privacy-policy/" target="_blank" rel="noreferrer">Razorpay Privacy Policy</a>
          </p>
        </section>

        <section>
          <h2>4. Cookies</h2>
          <p>
            We use essential cookies for core functionality and optional cookies for improving site performance and
            experience. You can manage consent through our cookie banner.
          </p>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>
            We retain data only as long as necessary for business, legal, and compliance obligations, then securely
            delete or anonymize it where feasible.
          </p>
        </section>

        <section>
          <h2>6. Contact</h2>
          <p>
            For privacy requests or questions, contact us through <a href="/contact">/contact</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
