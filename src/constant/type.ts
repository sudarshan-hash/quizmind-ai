import type { JSX } from "react";

type Subject = {
  id: number;
  link: string;
  title: string;
  idTitle: string;
  subIcon : JSX.Element
};

// 

type RightAnswer = {
  questionNumber: number
  question: string
  answer: string
}
type WrongAnswer = {
  questionNumber: number
  question: string
  answer: string
}

export type {Subject, RightAnswer, WrongAnswer}