import { TTheme } from "../App";
import ToggleTheme from "./ToggleTheme";

function Header({
  theme,
  setTheme,
}: {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
}) {
  return (
    <section className="mb-6 flex w-full items-end justify-between">
      <h1 className="text-header text-center text-3xl">calc</h1>
      <ToggleTheme theme={theme} setTheme={setTheme} />
    </section>
  );
}

export default Header;
