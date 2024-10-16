import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import LandingScreen from './LandingScreen'; // Assuming Landing.js exists in your project

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
    <Stack.Screen name="Signin" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
