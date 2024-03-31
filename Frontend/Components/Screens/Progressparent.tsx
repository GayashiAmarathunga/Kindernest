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