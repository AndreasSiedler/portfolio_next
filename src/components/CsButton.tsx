import clsx from "clsx";
import { ReactNode } from "react";

export enum CsButtonType {
  Primary,
  Secondary,
}

type CsButtonProps = {
  type?: CsButtonType;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function CsButton({
  type = CsButtonType.Primary,
  iconRight,
  children,
  className,
  onClick,
}: CsButtonProps) {
  return (
    <button
      className={clsx(
        "text-base font-anton-regular px-5 py-2.5 flex justify-center items-center",
        type === CsButtonType.Primary &&
          "text-white bg-black hover:bg-neutral-800",
        type === CsButtonType.Secondary &&
          "text-black border-black border-0.75 hover:bg-black hover:text-white ",
        className
      )}
      onClick={onClick}
    >
      {children}
      {iconRight}
    </button>
  );
}
