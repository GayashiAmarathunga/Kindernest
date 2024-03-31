import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import { Session } from '@supabase/supabase-js';
  import { supabase } from '../../lib/supabase';
  
  const OnlineClassTeacher = () => {

    const [classSession, setClassSession] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [classSubject, setClassSubject] = useState('');
    const [teacherName, setTeacherName] = useState('');
  
    const [session, setSession] = useState<Session | null>(null)
  
    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
  
  
    }, [])

    const handleSubmit = async () => {

        let { data: classes, error } = await supabase
          .from('classes')
          .select('name')
          .eq('teacher', session?.user.id)
    
        if (error) {
          console.error('Error fetching classes:', error.message);
          Alert.alert(error.message);
          return;
        }
        if (classes && classes.length > 0) {
          console.log(classes[0].name)
          console.log(session?.user.user_metadata.teacher_name)

          // Define the request body
    const requestBody = {
        session: classSession,
        date: date,
        time: time,
        class: classes[0].name,
        teacher: session?.user.user_metadata.teacher_name
      };
  
      // Send POST request using Axios
      axios.post(`${process.env.API_URL}/classes`, requestBody)
        .then(response => {
          // Handle successful response
          console.log('Request sent successfully:', response.data);
          Alert.alert('Class Added Successfully');
          // You can do something after successfully sending the request, like showing a confirmation message
        })
        .catch(error => {
          // Handle error
          console.error('Error sending request:', error);
          // You can display an error message to the user or handle the error in another way
        });
      }
    };

  return(
    <SafeAreaView style={{}}>
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#AF9FB2'
      }}>
        online class
      </Text>

      <Image
        style={{ width: 209, height: 229, alignSelf: 'center', marginTop: 13 }}
        source={require('../images/OCteacher.png')}
      />