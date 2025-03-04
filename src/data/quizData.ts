export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
  }
  
  export const quizData: QuizQuestion[] = [
    {
      id: 1,
      question: "Qual é a capital do Brasil?",
      options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
      correctAnswer: "Brasília",
    },
    {
      id: 2,
      question: "Qual é a cor do céu em um dia claro?",
      options: ["Verde", "Azul", "Vermelho", "Amarelo"],
      correctAnswer: "Azul",
    },
  ];