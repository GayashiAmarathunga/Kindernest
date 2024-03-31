import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';

const ContactTeacher = () => {
    const [teacherEmail, setTeacherEmail] = useState('');
    const [session, setSession] = useState<Session | null>(null);
    const [text, setText] = useState('');
  
    useEffect(() => {
      // Function to fetch the teacher's email
      const fetchTeacherEmail = async (className:String) => {
        const { data, error } = await supabase
          .from('view_teacher_emails')
          .select('teacher_email')
          .eq('class_name', className)
          .single(); // Using .single() assuming class names are unique
  
        if (error) {
          console.error('Error fetching teacher email:', error);
        } else if (data) {
          setTeacherEmail(data.teacher_email);
        }
      };
  
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        if (session?.user?.user_metadata?.class) {
          fetchTeacherEmail(session.user.user_metadata.class);
        }
      });
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        if (session?.user?.user_metadata?.class) {
          fetchTeacherEmail(session.user.user_metadata.class);
        }
      });
    }, []);
