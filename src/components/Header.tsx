import ToggleTheme from "./ToggleTheme";

function Header() {
  return (
    <section className="mb-6 flex w-full items-end justify-between">
      <h1 className="text-center text-3xl text-white">calc</h1>
      <ToggleTheme />
    </section>
  );
}

export default Header;
