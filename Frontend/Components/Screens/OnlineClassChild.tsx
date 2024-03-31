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
