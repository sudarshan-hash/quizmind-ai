# QuizMind 🚀

**QuizMind** is an AI-powered Multiple Choice Question (MCQ) Generator built with **React**, **TypeScript**, and **Groq SDK**. It streamlines the creation of high-quality practice questions for any subject using advanced AI models.

## Live Demo
https://quizmindai.netlify.app/

## 📖 Introduction

**QuizMind** simplifies the process of finding and generating quality MCQs. By leveraging the **Groq API**, it allows users to instantly generate structured, subject-specific quizzes with instant feedback, creating a seamless and interactive learning experience.

## ✨ Features

* **AI-Driven Question Generation:** Leverage Groq's high-speed inference models to create unique MCQs on demand.
* **Subject-Specific MCQs:** Users can specify the subject and the number of questions to generate.
* **Real-Time Result Analysis:** Instant feedback on selected answers with results and performance metrics.
* **Modern UI/UX:** Built with Tailwind CSS 4 and Radix UI (Shadcn/UI) for a sleek, responsive, and accessible interface.
* **Efficient Data Fetching:** Powered by TanStack Query (React Query) for optimized API calls and caching.

## 🛠️ Tech Stack

* **Framework:** [React 19](https://react.dev/) (Vite)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **API Integration:** [Groq SDK](https://console.groq.com/docs/quickstart)
* **State Management:** [TanStack Query v5](https://tanstack.com/query/latest)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)
* **Icons:** [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
* **Routing:** [React Router v7](https://reactrouter.com/)

## 📂 Project Structure

```text
src/
├── assets/             # Static assets (SVG, Images)
├── components/         # Reusable UI components
│   ├── ui/             # Shadcn/UI primitive components
│   └── ...             # Feature-specific components (QuestionSection, Sidebar, etc.)
├── constant/           # Constants, Prompts, and TypeScript Types
├── hooks/              # Custom React Hooks (e.g., use-fetch-AI for Groq integration)
├── lib/                # Utility functions (clsx, tailwind-merge)
├── pages/              # Main view components (HeroSection, McqSection)
└── style/              # Global and component-specific CSS
```


## 🧠 How it Works

1. **Define:** Select subject and question count.
2. **Generate:** **QuizMind** leverages Groq AI with specialized prompts to craft unique questions.
3. **Process:** Raw AI responses are instantly parsed into a structured MCQ format.
4. **Solve:** An interactive interface tracks progress and delivers real-time results.

---

*Created by Tambe Sudarshan*

