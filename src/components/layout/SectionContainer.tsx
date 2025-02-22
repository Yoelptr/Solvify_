import React, { forwardRef } from "react";
import { cn } from "~/lib/utils";

type SectionContainerProps = {
  padded?: boolean;

  containerClassName?: string;
};

export const SectionContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & SectionContainerProps
>(({ className, children, padded, containerClassName, ...props }, ref) => {
  return (
    <div className={cn("realative h-full", containerClassName)}>
      <section
        ref={ref}
        className={cn(
          "container flex flex-col lg:max-w-screen-md",
          className,
          padded ? "p-4" : "",
        )}
        {...props}
      >
        {children}
      </section>
    </div>
  );
});

SectionContainer.displayName = "SectionContainer";
