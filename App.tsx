import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator'

export default function App() {

  const [ fontsLoaded ] = useFonts({
    regular: Inter_400Regular,
    bold: Inter_700Bold
  })

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <RootNavigator />
    </NavigationContainer>
  );
}

