import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import React, { useState } from 'react'
import { supabase } from '../../lib/supabase';

const TeacherSignUp = ({ navigation }) => {
  const [teacherName, setTeacherName] = useState('');
  const [kindergartenLevel, setKindergartenLevel] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match")
      return;
  }
  
  const { data, error } = await supabase.auth.signUp(
    {
        email: email,
        password:  password,
        options: {
            data: {
                role: 'teacher',
                teacher_name: teacherName,
                kindergarten_level: kindergartenLevel,
                gender: gender
            }
        }
    }
)

if (error) {
    Alert.alert(error.message)
}
if (!error) {
    navigation.navigate('PHome')
}
};
