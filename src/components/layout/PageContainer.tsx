import React, { forwardRef } from "react";
import { Header } from "./Header";
import { HeadMetaData } from "./HeadMetaData";
import { cn } from "~/lib/utils";

type PagecontainerProps = {
  withHeader?: boolean;
  withFooter?: boolean;
};

export const Pagecontainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & PagecontainerProps
>(
  (
    { className, children, withHeader = true, withFooter = true, ...props },
    ref,
  ) => {
    return (
      <div className="h-full w-full">
        <HeadMetaData />
        {withHeader && <Header />}
        <main ref={ref} className={cn("flex flex-col", className)} {...props}>
          {children}
        </main>
        {withFooter && (
          <footer className="flex min-h-16 border-t-2 p-4">
            <p className="w-full text-center text-muted-foreground">
              &copy; All rights reserved 2025
            </p>
          </footer>
        )}
      </div>
    );
  },
);

Pagecontainer.displayName = "PageContainer";
