
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = false,
  className,
  titleClassName,
  subtitleClassName,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg text-gray-600 max-w-3xl", centered && "mx-auto", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
