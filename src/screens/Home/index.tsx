// src/screens/HomeScreen.tsx
import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import CustomButton from "../../components/CustomButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";
import GradientBackground from "../../components/Gradient";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <GradientBackground>
      <View style={globalStyles.container}>
        <Animated.View entering={FadeInDown.duration(800)}>
          <Text style={globalStyles.title}>QuizMaster</Text>
          <Text style={globalStyles.text}>
            Desafie seu cérebro com perguntas incríveis!
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.duration(800).delay(200)}>
          <CustomButton
            title="Começar Agora"
            onPress={() => navigation.navigate("Quiz")}
          />
        </Animated.View>
      </View>
    </GradientBackground>
  );
}