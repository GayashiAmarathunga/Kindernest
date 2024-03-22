import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ParentSignup from './Components/Screens/ParentSignup';
import OnlineClass from './Components/Screens/OnlineClass';
import PaymentMethod from './Components/Screens/PaymentMethod';
import Login from './Components/Screens/Login';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={ParentSignup} />
        <Tab.Screen name="Notifications" component={OnlineClass} />
        <Tab.Screen name="Activities" component={Login} />
        <Tab.Screen name="Account" component={PaymentMethod} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
