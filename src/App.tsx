import Header from "./components/Header";
import Input from "./components/Input";
import Key from "./components/Key";

export default function App() {
  const keys = [
    {
      value: "7",
      onClick: () => console.log("7"),
    },
    {
      value: "8",
      onClick: () => console.log("8"),
    },
    {
      value: "9",
      onClick: () => console.log("9"),
    },
    {
      value: "DEL",
      bgColor:
        "bg-primaryKeyBackground hover:bg-[var(--primary-key-background-hover)]",
      shadowColor: "shadow-primaryKeyShadow",
      onClick: () => console.log("DEL"),
    },
    {
      value: "4",
      onClick: () => console.log("4"),
    },
    {
      value: "5",
      onClick: () => console.log("5"),
    },
    {
      value: "6",
      onClick: () => console.log("6"),
    },
    {
      value: "+",
      onClick: () => console.log("+"),
    },
    {
      value: "1",
      onClick: () => console.log("1"),
    },
    {
      value: "2",
      onClick: () => console.log("2"),
    },
    {
      value: "3",
      onClick: () => console.log("3"),
    },
    {
      value: "-",
      onClick: () => console.log("-"),
    },
    {
      value: ".",
      onClick: () => console.log("."),
    },
    {
      value: "0",
      onClick: () => console.log("0"),
    },
    {
      value: "/",
      onClick: () => console.log("/"),
    },
    {
      value: "x",
      onClick: () => console.log("x"),
    },
    {
      value: "RESET",
      bgColor:
        "bg-primaryKeyBackground hover:bg-[var(--primary-key-background-hover)]",
      shadowColor: "shadow-primaryKeyShadow",
      colSpan: "col-span-2",
      onClick: () => console.log("="),
    },
    {
      value: "=",
      bgColor:
        "bg-secondaryKeyBackground hover:bg-[var(--secondary-key-background-hover)]",
      shadowColor: "shadow-secondaryKeyShadow",
      colSpan: "col-span-2",
      onClick: () => console.log("="),
    },
  ];

  return (
    <div className="theme1 bg-mainBackground flex min-h-screen w-full items-center justify-center px-4">
      <main className="flex flex-col">
        <Header />
        <Input value={"399,981"} />
        <section className="bg-toggleBackgroundKeypadBackground mt-4 grid grid-cols-4 gap-4 rounded-md p-4">
          {keys.map((key, index) => (
            <Key key={index} {...key} />
          ))}
        </section>
      </main>
    </div>
  );
}
