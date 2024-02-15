import React from 'react';

import Loading from './Components/Screens/Loading';
import Login from './Components/Screens/Login';
import ParentSignup from './Components/Screens/ParentSignup';
import TeacherSignUp from './Components/Screens/TeacherSignUp';
import ForgotPassword from './Components/Screens/ForgotPassword';
import NewPassword from './Components/Screens/NewPassword';
import Verification from './Components/Screens/Verification';
import PaymentMethod from './Components/Screens/PaymentMethod';
import OnlineClass from './Components/Screens/OnlineClass';
import Progress from './Components/Screens/Progress';
import Routing from './Routing';
import Profile from './Components/Screens/Profile';
import Teacher from './Components/Screens/Teacher';


const App = () => {
  return(
    <Routing/>
  );
}

export default App;