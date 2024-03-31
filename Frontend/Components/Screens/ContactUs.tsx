import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Contactus = () => {
  return(
    <SafeAreaView style={{backgroundColor: '#AF9FB2'}}>
      <Text
        style={{
          fontSize: 20,
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
        }}>
        Contact Us
      </Text>

      <View
        style={{
          marginTop: 0,
          marginHorizontal: 16,
          width: 328,
        }}>
        <Text
          style={{
            marginHorizontal: 0,
            marginTop: 0,
            fontWeight: '300',
            textAlign: 'center',
            fontSize: 16,
            color: 'black',
            borderRadius: 5,
          }}>
          Feel free to contact us anything.{'\n'}
          We will get back to you as soon as we can!
        </Text>
      </View>
