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

          <View>
            <Text style={styles.text1} >
              {progress && progress.month}
            </Text>
          </View>
  
          {/* UpGrading  */}
  
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* Subjects */}
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    marginLeft: 35,
                    backgroundColor: '#C19DC9',
                    borderRadius: 5,
                    width: 100,
                    height: 30,
                    borderWidth: 1,
                    borderColor: 'black',
                    marginTop: 15,
                  }}>
                  Learning
                </Text>
  
                {progress &&
                progress.subjects.map((subject, index) => (
                  <Text key={index} style={styles.inputSub} >
                    {subject.name}
                  </Text>
                ))}
              </View>
            </View>