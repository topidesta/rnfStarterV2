import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'src/Screens/Login/LoginScreen';
import LandingScreen from 'src/Screens/Landing/LandingScreen';
import RegisterScreen from 'src/Screens/Register/RegisterScreen';
import Header from 'src/Components/Header/Header';

const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator headerMode={'screen'}>
      <RootStack.Screen
        name="Landing"
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: Header, headerTitle: 'Login'}}
      />
      <RootStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{header: Header, headerTitle: 'Register'}}
      />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
