import * as z from "zod";

// Zod schema for validation
export const feedbackFormSchema = z.object({
    name: z.string().min(3),
    email: z.email(),
    feedback: z.string().max(500)
})

// type for feedback form from zod infer  
export type feedbackFormType = z.infer<typeof feedbackFormSchema >
