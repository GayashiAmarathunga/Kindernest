import React, { Children } from 'react';

import Loading from './Components/Screens/Loading';
import Login from './Components/Screens/Login';
import ParentSignup from './Components/Screens/ParentSignup';
import TeacherSignUp from './Components/Screens/TeacherSignUp';
import ForgotPassword from './Components/Screens/ForgotPassword';
import NewPassword from './Components/Screens/NewPassword';
import Verification from './Components/Screens/Verification';
import PaymentMethod from './Components/Screens/PaymentMethod';
import Routing from './Routing';
import Profile from './Components/Screens/Profile';
import Home from './Components/Screens/Home';
import Homeparent from './Components/Screens/Homeparent';
import Calendar from './Components/Screens/Calender/Calender';

const App = () => {
  return(
    <Verification/>
  );
}

export default App;