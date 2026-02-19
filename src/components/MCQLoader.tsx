import { type JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { mcqQuestionsOnJS } from "@/constant/sampleMCQ";
import { Label } from "./ui/label";

function MCQLoader(): JSX.Element {
  return (
    <>
      <div className=" max-w-4xl mx-auto   " >
        {mcqQuestionsOnJS.map((mcq, index) => {
          return (
            <Card key={index} className=" animate-pulse mb-5 relative overflow-auto bg-gray-300/7 hover:dark:bg-gray-300/3  ">
              <CardContent>
                <CardContent className=" grid grid-cols-1 gap-2  mt-5 ">
                  <RadioGroup className=" animate-none" >
                    {mcq.options.map((option, index) => {
                      return (
                        <span key={index}>
                          <Label>
                            <RadioGroupItem value={option} /> 
                          </Label>
                        </span>
                      );
                    })}
                  </RadioGroup>
                </CardContent>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default MCQLoader;
