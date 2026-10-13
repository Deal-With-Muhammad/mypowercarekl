export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="mb-2 text-sm font-semibold tracking-[0.14em] text-brand uppercase">{eyebrow}</p>}
      <Tag className="text-3xl leading-tight font-bold sm:text-4xl">{title}</Tag>
      {description && <p className="mt-3 text-[1.0625rem] leading-relaxed text-slate-text">{description}</p>}
    </div>
  );
}
