import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-20 text-center md:px-8">
      <h1 className="mb-4 text-4xl font-black">Page Not Found</h1>
      <p className="mb-8 text-black/70">The page you requested does not exist.</p>
      <Link href="/" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-accent">
        Back Home
      </Link>
    </section>
  );
}
