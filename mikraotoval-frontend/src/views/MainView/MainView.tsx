import React from "react";
import QuizCard from "./QuizCard/QuizCard";

const MainView = () => {
  return (
    <div>
      <QuizCard quizTitle="פרקים 1-3" />
      <QuizCard quizTitle="פרקים 4-5" />
      <QuizCard quizTitle="פרקים 6-7" />
      <QuizCard quizTitle="מפה" />
      <QuizCard quizTitle="נשק" />
    </div>
  );
};

export default MainView;
