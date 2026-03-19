import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for AIUPSKILLED courses, content, and services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms | AIUPSKILLED",
    description: "Terms of use for AIUPSKILLED courses, content, and services.",
    url: `${siteConfig.url}/terms`
  }
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-14 md:px-8">
      <h1 className="text-3xl font-black tracking-tight md:text-5xl">Terms of Use</h1>
      <p className="mt-3 text-sm text-black/60">Last updated: March 19, 2026</p>

      <div className="prose-content mt-8 space-y-6">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By using AIUPSKILLED, you agree to these terms and any policies referenced on this website.
            If you do not agree, please do not use the platform.
          </p>
        </section>

        <section>
          <h2>2. Services</h2>
          <p>
            AIUPSKILLED provides educational courses, tools, and learning resources focused on practical AI skills
            for professionals and teams.
          </p>
        </section>

        <section>
          <h2>3. Account and Access</h2>
          <p>
            You are responsible for your account credentials and for all activity under your account.
            We may suspend access for abuse, fraud, or policy violations.
          </p>
        </section>

        <section>
          <h2>4. Payments</h2>
          <p>
            Payments are processed through Razorpay and/or authorized payment partners. By paying, you authorize
            charges to your selected payment method according to the selected course plan.
          </p>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>
            All course material, branding, and content are owned by AIUPSKILLED unless otherwise stated.
            You may not reproduce, distribute, or resell course content without written permission.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            AIUPSKILLED is provided on an &quot;as is&quot; basis. To the maximum extent permitted by law, we are not
            liable for indirect, incidental, or consequential losses.
          </p>
        </section>

        <section>
          <h2>7. Contact</h2>
          <p>
            For legal or policy questions, contact us via the contact form at <a href="/contact">/contact</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
