import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          Yerlin.dev
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-slate-600 transition hover:text-slate-900"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}