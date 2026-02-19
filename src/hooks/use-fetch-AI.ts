// Here used the API Calling for Groq Agent

import { Prompt } from "@/constant/prompt";
import { useQuery } from "@tanstack/react-query";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const getMCQ = async (subjectName: string, mcqNumber: number = 10) => {
  const response = await groq.chat.completions.create({
    model: "openai/gpt-oss-safeguard-20b",
    messages: [
      {
        role: "user",
        content: `${Prompt(subjectName, mcqNumber)}`,
      },
    ],
  });

  return response;
};

export const useAgentAPI = (subjectName: string, mcqNumber: number = 10) => {
  const response = useQuery({
    queryKey: [`MCQ${subjectName}`],
    queryFn: () => getMCQ(subjectName, mcqNumber),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: (data) => {
     try{
       return JSON.parse(data.choices[0].message.content)
     }
     catch{
      console.log("Json Is not valide")
      throw new Error("Json Is not valide please Comtact to the Developer")
     }
    }, // SO here we directly converted in JSON form
    retry: 0,
    retryOnMount: true,
    gcTime: 0,
  });
  return response;
};
