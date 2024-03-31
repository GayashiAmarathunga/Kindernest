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

const handleSend = () => {
// Create the payload to send to the backend
const payload = {
  month: month,
  student: student,
  subjects: subjects.filter(sub => sub.name && sub.grade),
  remark: remark
};

console.log("payload",payload)
  // Send the payload to the backend using Axios
  axios.post(`${process.env.API_URL}/progress`, payload)
    .then(response => {
      // Handle success
      console.log('Progress data sent successfully:', response.data);
      Alert.alert('Progress data sent successfully');
      setStudent('');
    })
    .catch(error => {
      // Handle error
      console.error('Error sending progress data:', error);
      Alert.alert('Error sending progress data');
    });
};

return (
  <SafeAreaView style={styles.container}>
    <View>
      <Image
        style={{width: 393, height: 80}}
        source={require('../images/prog.png')}
      />

      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          marginTop: 0,
          fontWeight: '500',
        }}>
        Progress
      </Text>

      <View>
        <Text style={{textAlign: 'center', marginTop: 3, fontSize: 20}}>
          Add Student
        </Text>
        <TextInput style={styles.input} value={student}
        onChangeText={setStudent} />
        <Text style={{textAlign: 'center', marginTop: 3, fontSize: 20}}>
          Add month
        </Text>
        <TextInput style={styles.input} 
        value={month}
        onChangeText={setMonth}  
        />

      </View>
