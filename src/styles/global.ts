// src/styles/global.ts
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0D0D1A", // Tom escuro mais profundo e elegante
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: "InterBold",
    fontSize: 25,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  text: {
    fontFamily: "InterRegular",
    fontSize: 18,
    color: "#B0B0B0",
    textAlign: "center",
  },
});