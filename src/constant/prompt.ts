  // SO here mcq prompt template

function Prompt(subject: string = "Java Script", mcqNumber: number = 10){
  
return `You are an MCQ generator.

Generate ${mcqNumber} multiple-choice questions based on the subject: ${subject}.

Rules:
- Each question must have 4 options
- Only one option should be correct
- Use double quotes on all keys
- No trailing commas
- No markdown
- No explanation
- Follow this schema:
- Output must be ONLY a JavaScript array in this structure:

[
  {
    "question": "string",
    "options": ["string","string","string","string"],
    "ans": "string"
  }
]

IMPORTANT:
- Do NOT include "const MCQ"
- Do NOT include type definitions
- Do NOT include explanations or extra text
- Return only the array starting with [ and ending with ]

`
}

export {Prompt}
