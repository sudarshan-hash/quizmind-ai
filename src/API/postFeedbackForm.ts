import type { feedbackFormType } from "@/types/feedbackFormType";
import axios from "axios";

export async function  sendFeedbackForm(formData: feedbackFormType){
    return await axios.post("https://mcqgeneratorbackend.fastapicloud.dev/feedback", formData)
}