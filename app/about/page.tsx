import SkillCard from "@/components/SkillCard";

const skills = [
  {
    name: "Next.js",
    description:
      "Building modern web applications using the App Router and React.",
  },
  {
    name: "TypeScript",
    description:
      "Creating reliable and maintainable applications with strong typing.",
  },
  {
    name: "JavaScript",
    description:
      "Developing interactive and dynamic web experiences.",
  },
  {
    name: "Data Analysis",
    description:
      "Working with data to generate useful insights and support better decisions.",
  },
];

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          About Me
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white-900 md:text-5xl">
          Software Engineer focused on practical solutions.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          I&apos;m a software engineer interested in building useful
          applications, working with data, and solving problems through
          technology.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white-900">
          Technical Skills
        </h2>

        <p className="mt-3 max-w-2xl text-slate-600">
          Technologies and areas that I use to create modern and practical
          solutions.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              description={skill.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}