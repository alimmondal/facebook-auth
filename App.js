import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome, Entypo, AntDesign, Ionicons } from '@expo/vector-icons';


import HomeScreen from './src/screens/HomeScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { AuthContext, AuthProvider } from './src/Providers/AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeTab = createMaterialBottomTabNavigator();

// const HomeStackScreen = () => {
//   return (
//     <HomeStack.Navigator initialRouteName="Home">
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//     </HomeStack.Navigator>
//   );
// };

const HomeTabScreen = () => {
  return(
    <HomeTab.Navigator initialRouteName="Home">
    <HomeTab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => 
        focused ?(
          <Entypo name="home" color="white" size={26} />
        ) : (
          <AntDesign name="home" color="white" size={22} />
        ),
      }}
    />
    <HomeTab.Screen name="Notification" component={NotificationScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => 
        focused ?(
          <Ionicons name="ios-notifications" size={26} color="white" />
        ) : (
          <Ionicons name="ios-notifications-outline"size={22} color="white" />
        ),
      }}
    />
  </HomeTab.Navigator>
  )
}

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth)=>(<NavigationContainer>
          {auth.IsLoggedIn ? <HomeTabScreen /> :<AuthStackScreen />}
        </NavigationContainer>)}
      </AuthContext.Consumer>
    </AuthProvider>
    </SafeAreaProvider>
  )
}

export default App;
