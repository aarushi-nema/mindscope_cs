import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/Login/Login';
import Home from './app/Home/Home';
import Signup from './app/Signup/Signup'
import SplashScreen from './app/SplashScreen/SplashScreen'
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "CrimsonPro": require('./assets/fonts/CrimsonPro-Regular.ttf'),
    "Oxygen": require('./assets/fonts/Oxygen-Regular.ttf'),
    "Oxygen-Bold": require('./assets/fonts/Oxygen-Bold.ttf')
  });

  if(!fontsLoaded){
    return undefined;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false} }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
