import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import Text from './src/components/text/text';
import { colors } from './src/themes/colors';
import { spacing } from './src/themes/spacing';
import { typography } from './src/themes/typography';

import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Details from './src/screens/details';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Antoni-midium' : require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'Spartan-regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });
  if(!loaded){
    return (
      <Text>The Fonts is Loading</Text>
    )
  }
  return (
    <>
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light' />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
