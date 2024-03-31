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

  return