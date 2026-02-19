import { useState, type JSX } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

function Theme(): JSX.Element {
  const [theme, setTheme] = useState<boolean>(true);

  if (theme) {
    document.documentElement.classList.add("dark");
  } else document.documentElement.classList.remove("dark");
  return (
      <div className=" absolute top-5 right-10 ">
        <Button
          variant={"outline"}
          className= {
            
            !theme
              ? " group bg-black hover:bg-black "
              : "group dark:bg-white hover:dark:bg-white  "
          }
          onClick={() => {
            setTheme((pre) => !pre);
          }}
        >
          {!theme ? (
            <MoonIcon className=" text-white group-hover:scale-[1.20] group-hover:animate-caret-blink " />
          ) : (
            <SunIcon className="text-black group-hover:scale-[1.20] group-hover:animate-spin " />
          )}
        </Button>
    </div>
  );
}

export default Theme;
