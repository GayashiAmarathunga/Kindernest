import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
  import React from 'react';

  const ClassList = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#AF9FB2',}}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              marginTop: 10,
            }}>
            Class List
          </Text>

          <TouchableOpacity
          style={styles.buttons}>
          <Text style={{textAlign: 'center', fontSize: 16, marginTop: 8}}>
            Class 01
          </Text>
        </TouchableOpacity>