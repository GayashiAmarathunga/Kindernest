import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, BackHandler } from 'react-native'
import { supabase } from '../../lib/supabase';

const Login = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert('', 'Are you sure want to quit ?', [
          {
            text: 'Cancel',
            onPress: () => null,
          },
          {
            text: 'Yes',
            onPress: () => BackHandler.exitApp(),
          }
        ]);
        return true;
      };
       // Add event listner to hardware back press
       BackHandler.addEventListener('hardwareBackPress', onBackPress);
       return () => {
         // once the screen gets blur remove event listner
         BackHandler.removeEventListener('hardwareBackPress', onBackPress);
       };
     }
       , []),
   );