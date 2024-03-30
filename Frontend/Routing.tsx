import React from 'react';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Loading from './Components/Screens/Loading';
import Login from './Components/Screens/Login';
import ParentSignup from './Components/Screens/ParentSignup';
import TeacherSignUp from './Components/Screens/TeacherSignUp';
import ForgotPassword from './Components/Screens/ForgotPassword';
import NewPassword from './Components/Screens/NewPassword';
import Verification from './Components/Screens/Verification';
import PaymentMethod from './Components/Screens/PaymentMethod';
import Home from './Components/Screens/Home';
import Homeparent from './Components/Screens/Homeparent';
import { Drawer } from 'react-native-paper';
import StoryScreen from './Components/Screens/StoryScreen';

const StackNav = () => {
  const stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <stack.Screen
        name='Loading'
        component={Loading}
        options={{ headerShown: false }} />
      <stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }} />
      <stack.Screen
        name='Pregister'
        component={ParentSignup} />
      <stack.Screen
        name='Tregister'
        component={TeacherSignUp} />
      <stack.Screen
        name='THome'
        component={Home} />
      <stack.Screen
        name='PHome'
        component={Homeparent}
        options={{
          headerLeft: () => {
            return (
              <Icon
                name="menu"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                size={30}
                color="#000"
              />
            );
          },
        }} />
      <stack.Screen
        name='FPassword'
        component={ForgotPassword} />
      <stack.Screen
        name='NPassword'
        component={NewPassword} />
      <stack.Screen
        name='Payment'
        component={PaymentMethod} />
      <stack.Screen
        name='Verification'
        component={Verification} />
      <stack.Screen
        name='Storyteller'
        component={StoryScreen} />
    </stack.Navigator>
  );
}

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen name="Home" component={StackNav} />
      <Drawer.Screen name="Storyteller" component={StoryScreen} options={{ headerShown: true, headerTitleAlign: 'center' }} />
    </Drawer.Navigator>
  )
}

const Routing = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

export default Routing;