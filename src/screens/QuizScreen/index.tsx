import { useState } from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { quizData } from "../../data/quizData";
import OptionCard from "../../components/OptionCard";
import CustomButton from "../../components/CustomButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";
import GradientBackground from "../../components/Gradient";
import Animated, { FadeIn } from "react-native-reanimated";
import { styles } from "./styles";

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const question = quizData[currentQuestion];

  const handleAnswer = (option: string) => {
    setSelectedOption(option);
    if (option === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      navigation.navigate("Result", { score, total: quizData.length });
    }
  };

  return (
    <GradientBackground>
      <View style={globalStyles.container}>
        <Animated.View entering={FadeIn.duration(500)}>
          <Text style={styles.questionNumber}>
            {currentQuestion + 1}/{quizData.length}
          </Text>
          <Text style={globalStyles.title}>{question.question}</Text>
        </Animated.View>
        <View style={styles.optionsContainer}>
          {question.options.map((option) => (
            <OptionCard
              key={option}
              option={option}
              onSelect={handleAnswer}
              isSelected={selectedOption === option}
              isCorrect={
                selectedOption ? option === question.correctAnswer : undefined
              }
            />
          ))}
        </View>
        {selectedOption && (
          <CustomButton title="Próxima" onPress={nextQuestion} />
        )}
      </View>
    </GradientBackground>
  );
}