import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loading from './Components/Screens/Loading';
import Login from './Components/Screens/Login';
import ParentSignup from './Components/Screens/ParentSignup';
import TeacherSignUp from './Components/Screens/TeacherSignUp';
import ForgotPassword from './Components/Screens/ForgotPassword';
import NewPassword from './Components/Screens/NewPassword';
import Verification from './Components/Screens/Verification';
import PaymentMethod from './Components/Screens/PaymentMethod';
import OnlineClass from './Components/Screens/OnlineClass';
import Process from './Components/Screens/Process';

const stack = createNativeStackNavigator();

const Routing = () => {
  return(
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen
        name='Loading'
        component={Loading}/>
        <stack.Screen
        name='Login'
        component={Login}/>
        <stack.Screen
        name='Pregister'
        component={ParentSignup}/>
        <stack.Screen
        name='Home'
        component={OnlineClass}/>
        <stack.Screen 
        name='Process'
        component={Process}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;