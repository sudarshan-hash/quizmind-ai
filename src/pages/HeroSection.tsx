import { Theme } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type JSX } from "react";
import { useNavigate } from "react-router";
import { formatForDisplay, useHotkey } from '@tanstack/react-hotkeys'

const HeroSection = (): JSX.Element => {
  // useHotKey hook by tanstack hotkey
  const navigate = useNavigate();
  useHotkey( "Mod+Enter", ()=>{ navigate("/mcq") } )
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100dvh-4rem)] flex-1 flex-col justify-center gap-12 overflow-x-hidden pt-12 sm:gap-16 sm:pt-16 lg:gap-24 lg:pt-24"
    >
      <Theme />
      <div className="mx-auto flex max-w-7xl flex-col  items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        <div className="bg-muted flex items-center gap-2.5 rounded-full border px-3 py-2">
          <Badge>AI-Powered</Badge>
          <span className="text-muted-foreground">By Sudarshan Tambe</span>
        </div>

        <h1 className="text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl">
          Consitancy is the Key of
          <br />
          <span className="relative">
            SUCCESS...
            <svg
              width="223"
              height="12"
              viewBox="0 0 223 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden"
            >
              <path
                d="M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551"
                stroke="url(#paint0_linear_10365_68643)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10365_68643"
                  x1="18.8541"
                  y1="3.72033"
                  x2="42.6487"
                  y2="66.6308"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--primary)" />
                  <stop offset="1" stopColor="var(--primary-foreground)" />
                </linearGradient>
              </defs>
            </svg>
          </span>{" "}
        </h1>

        <p className="text-muted-foreground max-w-4xl mx-auto px-2 ">
          <span className="text-chart-3 font-bold text-2xl" >QuizMind</span> transforms prompts into powerful practice. Using AI, it
          generates high-quality multiple-choice questions instantly helping
          you to  improve, and master your knowledge
          effortlessly.
        </p>

        <Button
          size="lg"
          onClick={() => {
            navigate("/mcq");
          }}
        >
          Solve it Now
        <p className=" hidden sm:block text-muted-foreground " > <kbd>{formatForDisplay("Mod+")}</kbd>Enter   </p>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
