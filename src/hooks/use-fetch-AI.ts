// Here used the API Calling for Groq Agent
import { getMCQ } from "@/API/getMcq";
import { useQuery } from "@tanstack/react-query";


export const useAgentAPI = (subjectName: string) => {
  const response = useQuery({
    queryKey: [`MCQ${subjectName}`],
    queryFn: () => getMCQ(subjectName),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: (data) => {
     try{
       const content = data.data.Mcqs;
       if (!content) {
         throw new Error("Content is null or empty");
       }
       return JSON.parse(content);
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