interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          GitHub
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}