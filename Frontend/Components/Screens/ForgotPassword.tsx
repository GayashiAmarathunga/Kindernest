import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../images/ForPW.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.textheading}>Forgot password</Text>
      <Text style={styles.text}>Email or Mobile</Text>
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate('Verification')} style={styles.button}><Text style={{fontSize:20, padding:10, textAlign:'center', fontWeight:'bold'}}>confirm</Text></TouchableOpacity>
      </ImageBackground>
      </View>
  )
}
