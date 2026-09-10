import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          Yerlin.dev
        </Link>

        <ul className="flex gap-6 text-sm font-medium text-slate-600">
          <li>
            <Link href="/" className="transition hover:text-slate-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition hover:text-slate-900">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}