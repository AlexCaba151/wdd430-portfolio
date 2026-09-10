export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Yerlin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}