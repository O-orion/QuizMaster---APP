import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined;
    Quiz: undefined;
    Result: { score: number; total: number }
}
