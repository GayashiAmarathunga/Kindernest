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