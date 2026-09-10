interface SkillCardProps {
  name: string;
  description: string;
}

export default function SkillCard({
  name,
  description,
}: SkillCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-bold text-slate-900">{name}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </article>
  );
}