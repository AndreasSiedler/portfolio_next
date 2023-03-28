import clsx from "clsx";
import { ReactNode } from "react";

type CsSectionProps = {
  className?: string;
  children: ReactNode;
};

export default function CsSection({ className, children }: CsSectionProps) {
  return (
    <div
      className={clsx(
        "mx-auto px-5 pb-10 pt-10 md:px-20 md:flex md:pt-20 md:pb-20 md:items-center",
        className
      )}
    >
      {children}
    </div>
  );
}
