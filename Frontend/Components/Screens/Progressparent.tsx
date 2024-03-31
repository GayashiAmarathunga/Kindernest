import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { supabase } from '../../lib/supabase';
import { Session } from '@supabase/supabase-js';
  
// Define an interface for the progress data
interface ProgressData {
  _id: string;
  student: string;
  subjects: { name: string; grade: string; }[];
  remark: string;
  month: string;
  created: string;
  __v: number;
}

const ProgressParent = () => {

    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })
    
        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        })
    
     
      }, [])

      const [progress, setProgress] = useState<ProgressData | null>(null);

    useEffect(() => {
      const fetchProgress = async () => {
        try {
          const response = await axios.get(`${process.env.API_URL}/progress/${session?.user.email}`);
          console.log('Progress data:', response.data);
          setProgress(response.data);
        } catch (error) {
          console.error('Error fetching progress:', error);
        }
      };
  
      fetchProgress();
    }, []);

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

          