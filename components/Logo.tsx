import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-soft">
        <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M32 8L52 20V44L32 56L12 44V20L32 8Z" stroke="#ff6b6b" strokeWidth="4" />
          <path d="M32 18V46M18 25L46 39M46 25L18 39" stroke="#111" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-sm font-bold tracking-[0.18em] md:text-base">AIUPSKILLED</span>
    </Link>
  );
}
