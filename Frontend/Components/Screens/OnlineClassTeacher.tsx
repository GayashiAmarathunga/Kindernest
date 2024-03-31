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

  return