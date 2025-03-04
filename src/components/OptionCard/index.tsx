import { TouchableOpacity, Text } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { styles } from "./styles";

interface OptionCardProps {
    option: string;
    onSelect: (option: string) => void;
    isSelected: boolean,
    isCorrect?: boolean
}

export default function OptionCard({
    option,
    onSelect,
    isSelected,
    isCorrect
}: OptionCardProps) {
    return (
        <Animated.View entering={FadeIn} exiting={FadeOut} >
            <TouchableOpacity
            style={[ styles.card, isSelected && isCorrect && styles.correct,
                isSelected && !isCorrect && styles.incorrect
             ]}
             onPress={() => onSelect(option)}
            >
                <Text style={styles.optionText} >{  option }</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}