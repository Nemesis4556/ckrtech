import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-label-md text-label-md text-primary font-semibold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[28px] leading-[36px] tracking-[-0.02em] md:text-headline-xl text-on-surface font-bold text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
