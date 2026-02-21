import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AIUPSKILLED | Upskill to AI Dominance",
    template: "%s | AIUPSKILLED"
  },
  description: siteConfig.description,
  openGraph: {
    title: "AIUPSKILLED",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "AIUPSKILLED",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/og-cover.svg", width: 1200, height: 630, alt: "AIUPSKILLED" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AIUPSKILLED",
    description: siteConfig.description,
    images: ["/images/og-cover.svg"]
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
