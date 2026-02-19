import { Button } from "@/components/ui/button";
import type { RightAnswer, WrongAnswer } from "@/constant/type";
import { useNavigate } from "react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
// import type { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

export function Result({
  RightAnswer,
  WrongAnswer,
  setIsStart,
  // refetch
}: {
  RightAnswer: RightAnswer[];
  WrongAnswer: WrongAnswer[];
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
  // refetch:(options?: RefetchOptions | undefined) => Promise<QueryObserverResult<MCQ[], Error>>
}) {
  const navigate = useNavigate();
  const totalSolve: number = RightAnswer.length + WrongAnswer.length - 2;
  const greet = (RightAnswer: RightAnswer[]): string => {
    if (RightAnswer.length - 1 >= Math.floor(10 / 2)) {
      return (  "  CONGRATS ☺️☺️") ;
    } else {
      return "Better Luck Next Time😞😞";
    }
  };

  const result = greet(RightAnswer);

  return (
    <Card id="result" className=" max-w-3xl mx-auto px-3 ">
        <CardHeader>
          <CardTitle className="text-2xl text-center ">{result}</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-5 text-center" >
          <CardContent>
            <span className="  font-medium font-sans ">
              You Solved: {totalSolve}/{10}
            </span>
          </CardContent>
          <CardContent>
            <span className="  text-green-600 font-bold  font-sans ">
              Right Answers: {RightAnswer.length - 1}
            </span>
          </CardContent>
          <CardContent>
            <span className=" text-red-600   font-bold font-sans ">
              Wrong Answers: {WrongAnswer.length - 1}
            </span>
          </CardContent>
        </CardContent>
        <CardFooter className=" flex justify-around items-center gap-5 ">
          <Button size={"sm"}
            onClick={() => {
              setIsStart((pre) => !pre);
              // refetch()
            }}
            variant="outline"
          >
            Solve Again
          </Button>
          <Button
            size={"sm"}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
        </CardFooter>
    </Card>
  );
}
