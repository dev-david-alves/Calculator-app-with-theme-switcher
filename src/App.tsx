import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Key from "./components/Key";
import { cn } from "./utils/cn";

export type TTheme = "dark" | "light" | "purplet";

export default function App() {
  const [value, setValue] = useState<string>("0");
  const [theme, setTheme] = useState<TTheme>("dark");

  // Add a value to the input
  const setV = (v: string) => {
    if (value === "Error") {
      setValue(v);
      return;
    }

    // Check if the value already has a dot on the last number
    let lastNumber = value.split(/[\+\-\*\/]/).pop();
    if (lastNumber && lastNumber.includes(".") && v === ".") return;

    // If the value is 0, replace it with the new value, else append the new value
    if (value !== "0") setValue((old) => old + v);
    else setValue(v);
  };

  const deleteValue = () => {
    if (value === "Error") {
      setValue("0");
      return;
    }

    // If the value.length is 1, replace it with 0, else remove the last character
    if (value.length === 1) setValue("0");
    else setValue(value.slice(0, -1));
  };

  const addOperator = (v: string) => {
    if (value === "Error") {
      setValue("0");
      return;
    }

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
      let result = eval(value).toFixed(2).toString();
      if (result === "Infinity" || result === "NaN") {
        setValue("Error");
        return;
      }

      if (result.split(".")[1] === "00") {
        result = result.split(".")[0];
      }
      setValue(result);
    } catch (error: any) {
      setValue("Error");
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
    <div
      className={cn(
        "flex min-h-screen w-full items-center justify-center bg-mainBackground px-4",
        theme,
      )}
    >
      <main className="flex w-full max-w-96 flex-col">
        <Header theme={theme} setTheme={setTheme} />
        <Input value={value} />
        <section className="mt-4 grid w-full grid-cols-4 gap-4 rounded-md bg-toggleBackgroundKeypadBackground p-4">
          {keys.map((key, index) => (
            <Key key={index} {...key} />
          ))}
        </section>
      </main>
    </div>
  );
}
