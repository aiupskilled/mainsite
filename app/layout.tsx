import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEnhancements } from "@/components/SiteEnhancements";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: "AIUPSKILLED",
  title: {
    default: "AIUPSKILLED | Upskill to AI Dominance",
    template: "%s | AIUPSKILLED"
  },
  description: siteConfig.description,
  keywords: [
    "AI courses",
    "AI course for executives",
    "AI course for engineers",
    "AI upskilling",
    "applied AI training",
    "AI automation course"
  ],
  alternates: {
    canonical: "/"
  },
  category: "education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TGBQHX1E86" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TGBQHX1E86');
          `}
        </Script>
        <Header />
        <main className="pb-20 md:pb-24">{children}</main>
        <SiteEnhancements />
        <Footer />
      </body>
    </html>
  );
}
