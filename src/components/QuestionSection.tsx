import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
// import { mcqQuestionsOnJS } from "@/constant/sampleMCQ";
import type { RightAnswer, WrongAnswer } from "@/constant/type";
import type { MCQ } from "@/constant/sampleMCQ";
import React, {  useState, type JSX } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
// import { Result } from "./Result";
import { Button } from "./ui/button";
import { Result } from "./Result";
import { Check, X } from "lucide-react";
import { useAgentAPI } from "@/hooks/use-fetch-AI";
import MCQLoader from "./MCQLoader";
import Error from "./Error";  
import {  formatForDisplay, useHotkey } from "@tanstack/react-hotkeys";

// MCQ component Props interface
interface Props {
  mcq: MCQ;
  index: number;
  rightAns: RightAnswer[];
  setRightAns: React.Dispatch<React.SetStateAction<RightAnswer[]>>;
  setWrongAns: React.Dispatch<React.SetStateAction<WrongAnswer[]>>;
  resultStyle: boolean;
}
  
// Component for the MCQ map
const MCQ = ({
  mcq,
  index,
  rightAns,
  setRightAns,
  setWrongAns,
  resultStyle,
}: Props): JSX.Element => {
  // function for handaling the on chage event
  function answerArray(
    value: string,
    mcq: MCQ,
    index: number,
    setRightAns: React.Dispatch<React.SetStateAction<RightAnswer[]>>,
    setWrongAns: React.Dispatch<React.SetStateAction<WrongAnswer[]>>,
  ) {
    if (value === mcq.ans) {
      setRightAns((pre) => {
        if (
          pre.some((obj) => {
            return obj.questionNumber === index + 1;
          })
        ) {
          return [...pre];
        }
        // It removes index=1 question object from Wrong Array
        setWrongAns((pre) => {
          return pre.filter((obj) => {
            return obj.questionNumber !== index + 1;
          });
        });
        return [
          ...pre,
          {
            questionNumber: index + 1,
            question: mcq.question,
            answer: mcq.ans,
          },
        ];
      });
    }
    // if answer wrong
    else {
      setWrongAns((pre) => {
        if (
          pre.some((obj) => {
            return obj.questionNumber === index + 1;
          })
        ) {
          return [...pre];
        }
        // It removes index=1 question object from Right Answer
        setRightAns((pre) => {
          return pre.filter((obj) => {
            return obj.questionNumber !== index + 1;
          });
        });
        return [
          ...pre,
          {
            questionNumber: index + 1,
            question: mcq.question,
            answer: mcq.ans,
          },
        ];
      });
    }
  }
  // Style Object if classname
  const style: { rightAns: string; wrongAns: string } = {
    rightAns:
      " relative border-green-400 bg-background overflow-auto hover:dark:bg-gray-500/3  ",
    wrongAns:
      " relative border-red-400 bg-background  overflow-auto hover:dark:bg-gray-500/3  ",
  };

  return (
    <Card
      key={index}
      className={
        !resultStyle
          ? " relative overflow-auto bg-background hover:dark:bg-gray-300/3 hover:border-chart-3 "
          : rightAns.some((right) => mcq.question === right.question)
            ? style.rightAns
            : style.wrongAns
      }
    >
      {/* This button for right or wrong badge after submit */}
      {resultStyle && (
        <Button
          variant={"outline"}
          className="absolute top-2 right-2 rounded-full "
        >
          {rightAns.some((right) => mcq.question === right.question) ? (
            <Check className="bg-green-700 rounded-[5px] " />
          ) : (
            <X className="bg-red-700 rounded-[5px] " />
          )}
        </Button>
      )}
      <CardContent>
        <CardTitle className=" font-bold ">
          {" "}
          Q{index + 1}. {mcq.question}
        </CardTitle>
        <CardContent className=" grid grid-cols-1 gap-2  mt-5 ">
          <RadioGroup
            onValueChange={(value) => {
              // this function handaling
              answerArray(value, mcq, index, setRightAns, setWrongAns);
            }}
            // this attribute for disable after one option is selected
          >
            {mcq.options.map((option, index) => {
              return (
                <span key={index}>
                  <Label>
                    <RadioGroupItem value={option} /> {option}
                  </Label>
                </span>
              );
            })}
          </RadioGroup>
        </CardContent>
        {/* This section visible when answer is wrong means it shows right answer after result check */}
        {resultStyle &&
          !rightAns.some((right) => right.question == mcq.question) && (
            <CardFooter className=" border-2 mt-5 text-start font-bold font-mono rounded-2xl  ">
              <CardContent>
                Right Answer:{" "}
                <span className="font-bold text-chart-2 font-serif">
                  {" "}
                  {!rightAns.some((right) => right.question == mcq.question) &&
                    mcq.ans}
                </span>
              </CardContent>
            </CardFooter>
          )}
      </CardContent>
      
    </Card>
  );
};

// Main Component
function QuestionSection({
  subjectName,
  setIsStart,
}: {
  subjectName: string;
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {

  const [rightAns, setRightAns] = useState<RightAnswer[]>([
    { questionNumber: 0, question: "", answer: "" },
  ]);
  const [wrongAns, setWrongAns] = useState<WrongAnswer[]>([
    { questionNumber: 0, question: "", answer: "" },
  ]);
  const [resultStyle, setResultStyle] = useState<boolean>(false);

  // Add keyShortcut for submit result
  // ctrl+Enter --> submit result
  useHotkey("Mod+Enter", ()=>{ setResultStyle(true) }, {enabled: rightAns.length + wrongAns.length - 2 === 10 } )

  // ------------------------------------------------
  // API calling
  const {isLoading, data: MCQs , isError, error} = useAgentAPI(subjectName, 10)
  // ------------------------------------------------

  if (isError) {
    console.log("Error...")
    console.log(error.message);
    return <Error /> 
  }
  
  if (isLoading) {
    return <MCQLoader />
  }
  
  return (
    <Card className=" shadow-none max-w-4xl mx-auto px-2 sm:px-6 bg-transparent border-none ">
      <Card className=" shadow-none bg-background px-2 sm:px-6 border-none ">
        {MCQs.map((mcq: MCQ, index: number) => {
          return (
            <MCQ
              key={index}
              mcq={mcq}
              index={index}
              rightAns={rightAns}
              setRightAns={setRightAns}
              setWrongAns={setWrongAns}
              resultStyle={resultStyle}
            />
          );
        })}
        <div>
          <Button
            onClick={() => {
              setResultStyle(true);
            }}
            disabled={
              rightAns.length + wrongAns.length - 2 !== MCQs.length
            }
          >
            <a href="#result">Check Result</a>
            <p className=" hidden sm:block text-muted-foreground " > <kbd>{formatForDisplay("Mod+")}</kbd>Enter  </p>
          </Button>
        </div>
      </Card>
      {resultStyle && (
        <Result
          RightAnswer={rightAns}
          WrongAnswer={wrongAns}
          setIsStart={setIsStart}
        />
      )}
    </Card>
  );
}

export default QuestionSection;
