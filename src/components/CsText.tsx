import clsx from "clsx";
import { ReactNode } from "react";

type CsTextProps = {
  className?: string;
  children: ReactNode;
};

export default function CsText({ className, children }: CsTextProps) {
  return (
    <p className={clsx("text-base font-lato-light mt-4", className)}>
      {children}
    </p>
  );
}
