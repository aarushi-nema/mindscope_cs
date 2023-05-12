import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";

//Screens
import Login from './app/Login/Login';
import Home from './app/Home/Home';
import Signup from './app/Signup/Signup'
import SplashScreen from './app/SplashScreen/SplashScreen'

//Icons
import menu from './assets/icons/menus.png';

//Images
import user_image from './assets/images/user_image.jpg'

import { COLORS } from './constants/theme';

//Components
import HeaderButton from './components/HeaderButton';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "CrimsonPro": require('./assets/fonts/CrimsonPro-Regular.ttf'),
    "Oxygen": require('./assets/fonts/Oxygen-Regular.ttf'),
    "Oxygen-Bold": require('./assets/fonts/Oxygen-Bold.ttf'),
    "CrimsonPro-Bold": require('./assets/fonts/CrimsonPro-Bold.ttf'),
    "CrimsonPro-SemiBold": require('./assets/fonts/CrimsonPro-SemiBold.ttf')
  });

  if(!fontsLoaded){
    return undefined;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/> */}

        {/* Home Screen */}
        <Stack.Screen name="Home" component={Home}  options={{
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: false,
          headerLeft: () => (
            <HeaderButton iconUrl={menu} dimension='60%' />
          ),
          headerRight: () => (
            <HeaderButton iconUrl={user_image} dimension='100%' />
          ),
          headerTitle: "",
        }} />



        {/* <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false} }/> */}
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

  // Home Screen Styles
  header: {
    
  }

});
