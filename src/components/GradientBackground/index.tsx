
import { LinearGradient } from "expo-linear-gradient";
import { ViewProps } from "react-native";
import { styles } from "./styles";

export default function GradientBackground({ children, style }: ViewProps) {
  return (
    <LinearGradient
      colors={["#1A0D3D", "#0D0D1A"]} 
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
}
