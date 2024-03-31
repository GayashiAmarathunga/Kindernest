import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const ParentSignup = ({navigation}) => {
    return (
    <View style={styles.container}>   
    <ImageBackground source={require('../images/SUPPA.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.textheading}>Sign Up</Text>
      <Text style={styles.text}>Parent Name</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}>Child Name</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}>Kindergarten Level </Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}>Class</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}>Date of birth</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}>Email or Mobile</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}>Confirm Password</Text> 
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}><Text style={{fontSize:20, padding:10, textAlign:'center', fontWeight:'bold'}}>Signup</Text></TouchableOpacity>
      </ImageBackground> 
    </View >
  )
}

export default ParentSignup

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        flex:1
    },
    textheading: {
        fontSize:26,
        marginLeft:30,
        color:'black',
        marginTop:100,
        marginBottom:20
    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 40,
        marginBottom: -2,
        
    },
    input: {
        borderColor: 'rgba(145, 0, 235, 1)',
        borderWidth: 1,
        width: 300,
        marginLeft: 30,
        borderRadius: 30,
        backgroundColor: 'white',
        color: 'black',
        paddingLeft: 20,
        marginBottom: 10,
        height:40
    },
    button: {
        backgroundColor:'rgba(145, 0, 235, 1)',
        borderRadius:50,
        width:'auto',
        alignSelf:'center',
    },
})