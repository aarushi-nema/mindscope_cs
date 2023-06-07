import { StyleSheet, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React , {Component} from 'react'; 
//import Drawer from 'react-native-drawer';

//Screens
import Login from './app/Login/Login';
import Home from './app/Home/Home';
import Signup from './app/Signup/Signup'
import SplashScreen from './app/SplashScreen/SplashScreen'
import ToolKitsExplore from './app/ToolKitsExplore/ToolKitsExplore';
import SideDrawer from './app/SideDrawer/SideDrawer';
import UserProfile from './app/UserProfile/UserProfile';
import JournalCollection from './app/JournalCollection/JournalCollection';
import Journal from './app/Journal/Journal';
import QuizPage from './app/QuizPage/QuizPage';
import ArticlePage from './app/ArticlePage/ArticlePage';
import EditProfile from './app/EditProfile/EditProfile';
import ToolKitStrategy from './app/ToolKitStrategy/ToolKitStrategy';
import ArticlesExplore from './app/ArticlesExplore/ArticlesExplore';
import LearningCollection from './app/LearningCollection/LearningCollection';

//Icons
import menu from './assets/icons/menus.png';
import homeIcon from './assets/icons/home.png';


//Images
import user_image from './assets/images/user_image.jpg'

import { COLORS } from './constants/theme';

//Components
import HeaderButton from './components/HeaderButton';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer component
const DrawerComponent = () => {
  return (
      <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: COLORS.green,
              width: 250
            },
            drawerActiveTintColor: COLORS.light_green,
            drawerLabelStyle: {
              color: COLORS.black
            },
            headerLeft: () => (
              <HeaderButton iconUrl={menu} dimension='60%' />
            ),
            headerRight: () => (
              <HeaderButton iconUrl={user_image} dimension='100%' style={styles.header} handlePress={() => props.navigation.navigate("UserProfile")}/>
            ),
            headerStyle: {
              backgroundColor: COLORS.white,
              padding: 10
            },
            headerShadowVisible: true,
            headerTitle: "",
          }}
        >
        {/* Home Screen */}
        <Drawer.Screen
          name="Home"
          component={Home}
          navigationOptions={{
            drawerIcon: (
              <Image
                style={{ width: 24, height: 24 }}
                source={homeIcon}
              />
            ),
          }}
        />

        {/* ToolKits Explore  */}
        <Drawer.Screen
          name="ToolKitExplore"
          component={ToolKitsExplore}
          navigationOptions={{
            drawerIcon: (
              <Image
                style={{ width: 24, height: 24 }}
                source={homeIcon}
              />
            ),
          }}
        />

        {/* User Profile */}
        <Drawer.Screen
          name="UserProfile"
          component={UserProfile}
          navigationOptions={{
            drawerIcon: (
              <Image
                style={{ width: 24, height: 24 }}
                source={homeIcon}
              />
            ),
          }}
        />

        {/* Journal Collection */}
        <Drawer.Screen
          name="JournalCollection"
          component={JournalCollection}
          navigationOptions={{
            drawerIcon: (
              <Image
                style={{ width: 24, height: 24 }}
                source={homeIcon}
              />
            ),
          }}
        />

        {/* Journal */}
        <Drawer.Screen
          name="Journal"
          component={Journal}
          navigationOptions={{
            drawerIcon: (
              <Image
                style={{ width: 24, height: 24 }}
                source={homeIcon}
              />
            ),
          }}
        />

        {/* Quiz */}
        <Drawer.Screen
          name="Quiz"
          component={QuizPage}
          navigationOptions={{
            drawerIcon: (
              <Image
                style={{ width: 24, height: 24 }}
                source={homeIcon}
              />
            ),
          }}
        />

        {/* Article Page */}
        <Drawer.Screen
          name="Article Page"
          component={ArticlePage}
          navigationOptions={{
            drawerIcon: (
              <Image
                style={{ width: 24, height: 24 }}
                source={homeIcon}
              />
            ),
          }}
        />

        {/* Edit Profile */}
        <Drawer.Screen
          name="Edit Profile"
          component={EditProfile}
          navigationOptions={{
            drawerIcon: (
              <Image
                style={{ width: 24, height: 24 }}
                source={homeIcon}
              />
            ),
          }}
        />

        {/* ToolKit Strategy */}
        <Drawer.Screen
          name="ToolKit Strategy"
          component={ToolKitStrategy}
          navigationOptions={{
            drawerIcon: (
              <Image
                style={{ width: 24, height: 24 }}
                source={homeIcon}
              />
            ),
          }}
        />

        {/* Article Explore */}
        <Drawer.Screen
          name="Article Explore"
          component={ArticlesExplore}
          navigationOptions={{
            drawerIcon: (
              <Image
                style={{ width: 24, height: 24 }}
                source={homeIcon}
              />
            ),
          }}
        />

        {/* Learning Collection */}
        <Drawer.Screen
          name="Learning Collection"
          component={LearningCollection}
          navigationOptions={{
            drawerIcon: (
              <Image
                style={{ width: 24, height: 24 }}
                source={homeIcon}
              />
            ),
          }}
        />
        
      </Drawer.Navigator> 
    
  );
}


export default function App({props}) {
  // const navigation = useNavigation();
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
        {/* Screens */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

        {/* Drawer */}
        <Stack.Screen name="Drawer" component={DrawerComponent} options={{ headerShown: false }} />
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
  header: {
    margin: 10
  }

});
