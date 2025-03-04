import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/Home";
import QuizScreen from "../screens/QuizScreen";
import ResultScreen from "../screens/ResultScreen";
import { RootStackParamList } from "../types/navigation";


const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={HomeScreen} ></Stack.Screen>
            <Stack.Screen name="Quiz" component={QuizScreen} ></Stack.Screen>
            <Stack.Screen name="Result" component={ResultScreen} ></Stack.Screen>
        </Stack.Navigator>
    )
}