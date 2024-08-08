import { cn } from "../utils/cn";

type KeyProps = {
  value: string;
  bgColor?: string;
  shadowColor?: string;
  colSpan?: string;
  onClick: () => void;
};

function Key({ value, bgColor, shadowColor, colSpan, onClick }: KeyProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full rounded-md py-2 text-center text-xl text-main shadow-[0px_3px_0px_rgba(221,_221,_221,_1)] transition-colors",
        colSpan ? `${colSpan}` : "col-span-1",
        bgColor
          ? `${bgColor} text-white`
          : "bg-tertiaryKeyBackground hover:bg-[var(--tertiary-key-background-hover)]",
        shadowColor ? `${shadowColor}` : "shadow-tertiaryKeyShadow",
      )}
    >
      {value}
    </button>
  );
}

export default Key;
