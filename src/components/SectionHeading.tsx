import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: Props) => (
  <div className={cn("mb-12 sm:mb-16", centered && "text-center")}>
    <h2 className={cn(
      "text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4",
      light ? "text-secondary-foreground" : "text-foreground"
    )}>
      {title}
    </h2>
    {subtitle && (
      <p className={cn(
        "text-base sm:text-lg max-w-2xl leading-relaxed",
        centered && "mx-auto",
        light ? "text-secondary-foreground/60" : "text-muted-foreground"
      )}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
