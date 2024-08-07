import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Key from "./components/Key";

export default function App() {
  const [value, setValue] = useState<string>("0");

  const setV = (v: string) => {
    if (v === "." && value.includes(".")) return;
    if (value !== "0") setValue((old) => old + v);
    else setValue(v);
  };

  const deleteValue = () => {
    if (value.length === 1) setValue("0");
    else setValue(value.slice(0, -1));
  };

  const addOperator = (v: string) => {
    // if last character is operator or ., replace it
    const ops = ["+", "-", "*", "/"];
    if (
      ops.includes(value[value.length - 1]) ||
      value[value.length - 1] === "."
    ) {
      setValue(value.slice(0, -1) + v);
    } else {
      setValue(value + v);
    }
  };

  const calculate = () => {
    try {
      setValue(eval(value).toFixed(2).toString());
    } catch {
      setValue("ERROR");
    }
  };

  const keys = [
    {
      value: "7",
      onClick: () => setV("7"),
    },
    {
      value: "8",
      onClick: () => setV("8"),
    },
    {
      value: "9",
      onClick: () => setV("9"),
    },
    {
      value: "DEL",
      bgColor:
        "bg-primaryKeyBackground hover:bg-[var(--primary-key-background-hover)]",
      shadowColor: "shadow-primaryKeyShadow",
      onClick: () => deleteValue(),
    },
    {
      value: "4",
      onClick: () => setV("4"),
    },
    {
      value: "5",
      onClick: () => setV("5"),
    },
    {
      value: "6",
      onClick: () => setV("6"),
    },
    {
      value: "+",
      onClick: () => addOperator("+"),
    },
    {
      value: "1",
      onClick: () => setV("1"),
    },
    {
      value: "2",
      onClick: () => setV("2"),
    },
    {
      value: "3",
      onClick: () => setV("3"),
    },
    {
      value: "-",
      onClick: () => addOperator("-"),
    },
    {
      value: ".",
      onClick: () => setV("."),
    },
    {
      value: "0",
      onClick: () => setV("0"),
    },
    {
      value: "/",
      onClick: () => addOperator("/"),
    },
    {
      value: "x",
      onClick: () => addOperator("*"),
    },
    {
      value: "RESET",
      bgColor:
        "bg-primaryKeyBackground hover:bg-[var(--primary-key-background-hover)]",
      shadowColor: "shadow-primaryKeyShadow",
      colSpan: "col-span-2",
      onClick: () => setValue("0"),
    },
    {
      value: "=",
      bgColor:
        "bg-secondaryKeyBackground hover:bg-[var(--secondary-key-background-hover)]",
      shadowColor: "shadow-secondaryKeyShadow",
      colSpan: "col-span-2",
      onClick: () => calculate(),
    },
  ];

  return (
    <div className="theme1 bg-mainBackground flex min-h-screen w-full items-center justify-center px-4">
      <main className="flex flex-col">
        <Header />
        <Input value={value} />
        <section className="bg-toggleBackgroundKeypadBackground mt-4 grid grid-cols-4 gap-4 rounded-md p-4">
          {keys.map((key, index) => (
            <Key key={index} {...key} />
          ))}
        </section>
      </main>
    </div>
  );
}
