import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Community Support Platform",
    description:
      "A web application designed to help communities report and track local issues and requests.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/your-username/community-support",
  },
  {
    title: "Data Dashboard",
    description:
      "An interactive dashboard for visualizing data and presenting important information through clear metrics.",
    technologies: ["JavaScript", "React", "CSS"],
    link: "https://github.com/your-username/data-dashboard",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Software Engineer
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Building practical solutions with modern web technology.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I&apos;m Yerlin, a software engineer focused on creating useful,
            responsive, and user-friendly web applications.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700"
            >
              View Projects
            </a>

            <a
              href="/about"
              className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              About Me
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-16 md:py-20"
      >
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Portfolio
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white-900">
            Featured Projects
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            A selection of projects that demonstrate my experience with
            software development and modern web technologies.
          </p>
        </div>

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}