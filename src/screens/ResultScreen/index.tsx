// src/screens/ResultScreen.tsx
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";
import CustomButton from "../../components/CustomButton";
import { useNavigation, useRoute, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";
import GradientBackground from "../../components/Gradient";
import Animated, { BounceIn } from "react-native-reanimated";
import { styles } from "./style";

export default function ResultScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<any>();
  const { score, total } = route.params as { score: number; total: number };
  const percentage = (score / total) * 100;

  return (
    <GradientBackground>
      <View style={globalStyles.container}>
        <Animated.View entering={BounceIn.duration(600)}>
          <Text style={globalStyles.title}>
            {percentage >= 70 ? "Parabéns!" : "Quase lá!"}
          </Text>
          <Text style={styles.score}>
            {score}/{total}
          </Text>
          <Text style={globalStyles.text}>
            Você acertou {percentage.toFixed(0)}% das perguntas!
          </Text>
        </Animated.View>
        <CustomButton
          title="Jogar Novamente"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </GradientBackground>
  );
}