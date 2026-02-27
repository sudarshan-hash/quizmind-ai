# QuizMind

QuizMind is an AI-powered MCQ platform built with React + TypeScript. It helps students generate, solve, and review topic-wise multiple-choice questions in one place.

## Live Demo
https://quizmindai.netlify.app/

## Why This Project
- Students often jump between tools for question generation, practice, and evaluation.
- QuizMind combines all three into a single workflow:
  1. Select a subject.
  2. Generate AI MCQs.
  3. Solve and get instant score + right/wrong breakdown.

## Core Focus
- GROQ API based AI MCQ generation.
- Type-safe frontend architecture with TypeScript.
- Fast server-state handling with TanStack Query.
- Clean reusable UI with shadcn/ui components.

## Tech Stack
- React 19 + Vite
- TypeScript
- GROQ SDK (`groq-sdk`)
- TanStack Query
- TanStack Hotkeys
- Tailwind CSS 
- shadcn/ui + Radix primitives
- React Router 

## Fresh MCQ behavior:
- New subject => new API call => new set.
- App reload => fresh set.
- Same subject, same session => cached set from TanStack Query.
- To force new set on every click for same subject, query invalidation/refetch can be added.

## Prompt Engineering Used
Prompt is defined in `src/constant/prompt.ts`.

This prompt design makes AI output consistent and easier to parse safely in TypeScript.


## TypeScript Value in This Project
- Subject and result data structures are typed in `src/constant/type.ts`.
- Component props and state are strongly typed.
- Reduces runtime mistakes while integrating AI JSON responses.

## shadcn/ui Usage
UI is built with reusable shadcn components:
- `Card`, `Button`, `Badge`, `Sidebar`, `RadioGroup`, `Label`

## TanStack Query Usage
TanStack Query is used for API orchestration:
- `useQuery` for fetch lifecycle
- built-in loading/error states
- response selection and transformation
- caching to avoid unnecessary refetches

Query provider setup is in `src/main.tsx`.

## Project Structure
```text
src/
|-- assets/                # Static assets
|-- components/
|   |-- ui/                # shadcn/ui primitives
|   |-- QuestionSection.tsx
|   |-- Result.tsx
|   `-- SidebarPage.tsx
|-- constant/
|   |-- prompt.ts          # GROQ prompt template
|   |-- subject.tsx
|   `-- type.ts            # TypeScript types
|-- hooks/
|   `-- use-fetch-AI.ts    # GROQ + TanStack Query hook
|-- pages/
|   |-- HeroSection.tsx
|   `-- McqSection.tsx
|-- style/
|   `-- globale css/global.css
|-- App.tsx
`-- main.tsx
```


Created by Sudarshan Tambe
