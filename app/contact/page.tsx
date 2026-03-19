import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with AIUPSKILLED for enterprise or team learning inquiries.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact AIUPSKILLED",
    description: "Connect with AIUPSKILLED for enterprise or team learning inquiries.",
    url: `${siteConfig.url}/contact`
  },
  twitter: {
    title: "Contact AIUPSKILLED",
    description: "Connect with AIUPSKILLED for enterprise or team learning inquiries."
  }
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <h1 className="mb-8 text-4xl font-black tracking-tight md:text-6xl">Contact</h1>
      <ContactForm />
    </section>
  );
}
