import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { feedbackFormSchema, type feedbackFormType } from "@/types/feedbackFormType"
import { BookText, SendHorizonal } from "lucide-react"
import { useState } from "react"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"
import { useFeedbackFormPost } from "@/hooks/use-post-feedback"
import { Spinner } from "./ui/spinner"

export default function FeedBackForm({ className }: { className?: string }) {
    // Form state
    const [feedbackFormData, setFeedbackFormData] = useState<feedbackFormType>({
        name: "",
        email: "",
        feedback: ""
    })

    const [isOpen, setIsOpen] = useState(false)

    // API calling by hook 
    const { isPending, mutate } = useFeedbackFormPost(setIsOpen)

    function handleOnChage(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) {
        const { name, value } = e.target
        setFeedbackFormData((pre) => {
            return { ...pre, [name]: value }
        })
    }

    function submitFeedback(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const isValid = feedbackFormSchema.safeParse(feedbackFormData)
        if (isValid.success) {
            // sending form to backend
            mutate(isValid.data)
        }
        else {
            console.log(isValid.error.message)
            toast.error(`please check your ${isValid.error}`, {
                style: {
                    '--normal-bg': 'var(--background)',
                    '--normal-text': 'var(--destructive)',
                    '--normal-border': 'var(--destructive)'
                } as React.CSSProperties
            })
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen} >
            <DialogTrigger asChild>
                <Button variant={"outline"} className={className} > <BookText /> FeedBack</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <form onSubmit={submitFeedback} >
                    <DialogHeader>
                        <DialogTitle> Feedback </DialogTitle>
                        <DialogDescription>

                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup className="mt-5" >
                        <Field>
                            <Label htmlFor="name">Name</Label>
                            <Input onChange={handleOnChage} type="text" id="name" name="name" placeholder="Tony..." value={feedbackFormData.name} />
                            {/* <FieldError>  </FieldError> */}
                        </Field>
                        <Field>
                            <Label htmlFor="email">Email</Label>
                            <Input onChange={handleOnChage} type="email" id="email" name="email" placeholder="example@gmail.com..." value={feedbackFormData.email} />
                        </Field>
                        <Field>
                            <Label htmlFor="feedback">Feedback Message</Label>
                            <Textarea onChange={handleOnChage} id="feedback" rows={4} name="feedback" value={feedbackFormData.feedback} placeholder="Your feedback helps us improve..." />
                        </Field>
                    </FieldGroup>
                    <DialogFooter className="mt-5" >
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        {
                            isPending ?
                                <Button disabled >  sending <Spinner /> </Button> :
                                <Button type="submit" > Send <SendHorizonal /> </Button>
                        }
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
