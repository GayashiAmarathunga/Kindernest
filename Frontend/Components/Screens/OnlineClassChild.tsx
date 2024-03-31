import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    StyleSheet,
    Alert,
  }
  from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { supabase } from '../../lib/supabase';
import { Session } from '@supabase/supabase-js';

const OnlineClassChild = () => {

    const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })


  }, [])

  const [classes, setClasses] = useState<any[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(process.env.API_URL +'/classes/'+session?.user.user_metadata.class);
        setClasses(response.data.data); 
      } catch (error) {
        console.error('Error fetching classes:', error);
        Alert.alert('Error fetching classes');
      }
    };

    fetchClasses();
  }, [session]);