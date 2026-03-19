import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund policy for AIUPSKILLED course purchases and payment reversals.",
  alternates: { canonical: "/refund-policy" },
  openGraph: {
    title: "Refund Policy | AIUPSKILLED",
    description: "Refund policy for AIUPSKILLED course purchases and payment reversals.",
    url: `${siteConfig.url}/refund-policy`
  }
};

export default function RefundPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-14 md:px-8">
      <h1 className="text-3xl font-black tracking-tight md:text-5xl">Refund Policy</h1>
      <p className="mt-3 text-sm text-black/60">Last updated: March 19, 2026</p>

      <div className="prose-content mt-8 space-y-6">
        <section>
          <h2>1. Eligibility</h2>
          <p>
            Refund requests are reviewed based on purchase date, access/usage status, and the selected plan terms.
            Approved refunds are initiated to the original payment method.
          </p>
        </section>

        <section>
          <h2>2. Refund Timeline</h2>
          <p>
            Once approved and initiated, standard refunds generally complete in 5 to 10 business days depending on
            bank/payment network timelines.
          </p>
        </section>

        <section>
          <h2>3. Full and Partial Refunds</h2>
          <p>
            We may process either full refunds or partial refunds depending on the request context and applicable plan
            terms.
          </p>
        </section>

        <section>
          <h2>4. Processing Partner</h2>
          <p>
            Refund processing is executed through Razorpay and associated payment rails.
          </p>
          <p>
            Reference: <a href="https://razorpay.com/terms/" target="_blank" rel="noreferrer">Razorpay Terms</a>
          </p>
        </section>

        <section>
          <h2>5. Duplicate Protection</h2>
          <p>
            Refund operations are processed with safeguards to prevent accidental duplicate processing during retry
            scenarios.
          </p>
        </section>

        <section>
          <h2>6. Contact for Refunds</h2>
          <p>
            Submit refund requests through <a href="/contact">/contact</a> with your payment email and transaction
            details.
          </p>
        </section>
      </div>
    </article>
  );
}
