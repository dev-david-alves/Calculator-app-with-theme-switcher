import { TTheme } from "../App";
import { cn } from "../utils/cn";

function ToggleTheme({
  theme,
  setTheme,
}: {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
}) {
  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("purplet");
    else setTheme("dark");
  };

  return (
    <div className="flex items-end gap-4">
      <span className="text-header pb-1 text-[10px] uppercase">Theme</span>
      <div className="flex flex-col items-center justify-center">
        <div className="text-header flex w-full items-center justify-between px-2 text-[9px] text-sm">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>

        {/* distances 15% 49% 85%  */}
        <div
          className="relative flex h-6 min-w-20 items-center rounded-full bg-toggleBackgroundKeypadBackground"
          onClick={toggleTheme}
        >
          <div
            className={cn(
              "absolute left-[15%] h-[14px] min-h-[14px] w-[14px] min-w-[14px] -translate-x-[50%] cursor-pointer rounded-full bg-secondaryKeyBackground transition-all duration-300 ease-in-out hover:bg-[var(--secondary-key-background-hover)]",
              theme == "dark" && "left-[15%]",
              theme == "light" && "left-[49%]",
              theme == "purplet" && "left-[85%]",
            )}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ToggleTheme;
