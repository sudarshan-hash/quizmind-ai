import { sendFeedbackForm } from "@/API/postFeedbackForm";
import type { feedbackFormType } from "@/types/feedbackFormType";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useFeedbackFormPost(
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
) {
  return useMutation({
    mutationFn: (formdata: feedbackFormType) => {
      return sendFeedbackForm(formdata);
    },
    onSuccess: () => {
      setIsOpen(false);
      toast.success("Thank you for Feedback 🙏", {
        style: {
          "--normal-bg": "var(--background)",
          "--normal-text":
            "light-dark(var(--color-green-600), var(--color-green-400))",
          "--normal-border":
            "light-dark(var(--color-green-600), var(--color-green-400))",
        } as React.CSSProperties,
      });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error('Sorry , there was an error processing your request. Try Leater', {
          style: {
            '--normal-bg': 'var(--background)',
            '--normal-text': 'var(--destructive)',
            '--normal-border': 'var(--destructive)'
          } as React.CSSProperties
        })
    },
  });
}
