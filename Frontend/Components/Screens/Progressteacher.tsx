import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React, { useState } from 'react';
import axios from 'axios';
import { set } from 'react-native-reanimated';
  
  const ProgressTeacher = () => {
    const [student, setStudent] = useState('');
const [month, setMonth] = useState('');
const [subjects, setSubjects] = useState([
    { name: '', grade: 'A' }, // Initialize grade with a default value, such as 'A'
    { name: '', grade: 'A' },
    { name: '', grade: 'A' },
    { name: '', grade: 'A' },
    { name: '', grade: 'A' }
]);
const [remark, setRemark] = useState('');