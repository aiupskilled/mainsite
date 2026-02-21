import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex gap-6 text-sm text-black/70">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Refund Policy</Link>
        </div>
        <div className="flex items-center gap-4 text-sm text-black/70">
          <Link href={siteConfig.social.instagram}>Instagram</Link>
          <Link href={siteConfig.social.linkedin}>LinkedIn</Link>
          <Link href={siteConfig.social.twitter}>Twitter</Link>
          <Link href={siteConfig.social.youtube}>YouTube</Link>
        </div>
      </div>
    </footer>
  );
}
