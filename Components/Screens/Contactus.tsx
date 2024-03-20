import { StyleSheet, Text, View, TextInput, ImageBackground, } from 'react-native'
import React from 'react'

const Contactus = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../images/Aboutus.png')} resizeMode="cover" style={styles.image}>
       <Text style={styles.textheading}>Contact Us</Text>
       <TextInput style={styles.input}placeholderTextColor={'black'} placeholder='Feel free to contact us anything.
We will get back to you as soon as we can!'></TextInput>
       <View style={styles.wrapper}></View>
       <Text style={styles.text}>New Password
       </Text>
      <TextInput style={styles.input1}>
      </TextInput>
       </ImageBackground>
    </View>
  )
}

export default Contactus

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    textheading: {
        fontSize: 30,  
        color: 'black',
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor:'#D9D9D9',
        width: 'auto',
        borderRadius: 5,
        backgroundColor: '#F0D9F5',
        color: 'black',
        minWidth:250,
        marginBottom: 10,
        height:60,
        marginTop: 10,
        textAlign: 'center',
        alignSelf:'center',
        width: 360,
    },
    wrapper: {
        alignSelf:'center',
        width: 360,
        borderRadius: 5,
        backgroundColor: '#F0D9F5',
        height:300,
        marginBottom:40,
        marginTop: 30,
        justifyContent:'center'
    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 30,
    },
    input1: {
        borderColor: '#F0D9F5',
        borderWidth: 1,
        width: 300,
        marginLeft: 30,
        borderRadius: 30,
        backgroundColor: 'white',
        color: 'black',
        paddingLeft: 20,
        height:40,
        marginBottom:40,
        marginTop:-325,
    },
    

})