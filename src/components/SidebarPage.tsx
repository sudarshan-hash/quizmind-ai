import { BookOpenCheck } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { subjects } from "@/constant";
import  { useState } from "react";
import { Button } from "./ui/button";
import QuestionSection from "./QuestionSection";
import CurrentTime from "./CurrentTime";
import { Badge } from "./ui/badge";

const SidebarPage = () => {
  const [subjectName, setSubjectName] = useState<string>("Java Script");
  const [isStart, setIsStart] = useState<boolean>(false);
  return (
    <div className="flex min-h-dvh w-full">
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className=" bg-chart-3 hover:bg-chart-2 "
                      asChild
                    >
                      <SidebarGroupContent className=" flex  ">
                        <BookOpenCheck className="text-white" />
                        <span className="text-white dark:text-foreground" >Subjects</span>
                      </SidebarGroupContent>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Select Subject</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {subjects.map((subject) => {
                    return (
                      <SidebarMenuItem
                        onClick={(event) => {
                          setSubjectName(event.currentTarget.textContent);
                          setIsStart(false);
                        }}
                        key={subject.id}
                      >
                        <SidebarMenuButton
                          className="  hover:bg-chart-2/80  "
                          asChild
                        >
                          <a href={subject.link}>
                            <Badge variant={"outline"} className="border-none  ">
                              {subject.subIcon}
                            </Badge>

                            <span className="font-medium" >{subject.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div className="flex flex-1 flex-col justify-around ">
          <header className="bg-card sticky top-0 z-50 flex h-13.75 items-center justify-between gap-6 border-b px-4 py-2 sm:px-6">
            <SidebarTrigger className="[&_svg]:size-5! cursor-pointer " />
            <h1 className="  text-chart-3 text-2xl  inline font-bold  ">
              {subjectName.toUpperCase()}{" "}
            </h1>
            <span className="  sm:block ">
              <CurrentTime />
            </span>
          </header>
          <main className=" size-full flex-1 px-4 py-6 sm:px-6">
            {!isStart ? (
              //  Before Question
              <Card className=" max-w-xl mx-auto px-6 ">
                <CardContent>
                  <CardTitle className="  sm:text-3xl text-center ">
                    {" "}
                    MCQ Question on the{" "}
                    <span className="  text-chart-3 ">
                      {subjectName.toUpperCase()}
                    </span>{" "}
                  </CardTitle>
                  <CardFooter className="flex justify-center items-center mt-5">
                    <Button
                      onClick={() => {
                        setIsStart((pre) => !pre);
                      }}
                      variant={"outline"}
                    >
                      {" "}
                      Click To Start{" "}
                    </Button>
                  </CardFooter>
                </CardContent>
              </Card>
            ) : (
              // After Question
              <QuestionSection
                subjectName={subjectName}
                setIsStart={setIsStart}
              />
            )}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default SidebarPage;
