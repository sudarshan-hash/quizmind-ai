
export type MCQ = {
    question: string
    options: string[]
    ans: string
}


const mcqQuestionsOnJS: MCQ[] = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "jdnodsfoe coisdhvoiewhfoiewf evewofoiejfoirejf ewjfoirejfoirejf virejf"],
    ans: "var"
  },
  {
    question: "Which method converts JSON string to JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
    ans: "JSON.parse()"
  },
  {
    question: "What does === check in JavaScript?",
    options: ["Value only", "Type only", "Value and type", "Reference"],
    ans: "Value and type"
  },
  {
    question: "Which command initializes a new npm project?",
    options: ["npm start", "npm init", "npm install", "npm create"],
    ans: "npm init"
  },
  {
    question: "Which array method adds an element at the end?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    ans: "push()"
  },
  {
    question: "What is the output type of typeof null?",
    options: ["null", "object", "undefined", "number"],
    ans: "object"
  },
  {
    question: "Which hook is used for side effects in React?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    ans: "useEffect"
  },
  {
    question: "Which symbol is used for optional chaining?",
    options: ["??", "&&", "?.", "::"],
    ans: "?."
  },
  {
    question: "Which keyword prevents variable reassignment?",
    options: ["let", "var", "const", "static"],
    ans: "const"
  },
  {
    question: "Which HTTP method is used to fetch data?",
    options: ["POST", "PUT", "GET", "DELETE"],
    ans: "GET"
  }
];


export {mcqQuestionsOnJS}