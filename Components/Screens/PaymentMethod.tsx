import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const PaymentMethod = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../images/Payments.png')} resizeMode="cover" style={styles.image}>
     <Text style={styles.textheading}>Payment Method</Text>
     <Text style={styles.text}>Pay with Paypal</Text>
     <Text style={styles.text1}>Pay with credit or debit card</Text>
     <TextInput style={styles.input}placeholderTextColor={'black'} placeholder='Card Number*'></TextInput>
     <TextInput style={styles.input1}placeholderTextColor={'black'} placeholder='MM*'></TextInput>
     <TextInput style={styles.input2}placeholderTextColor={'black'} placeholder='YY*'></TextInput>
     <TextInput style={styles.input3}placeholderTextColor={'black'} placeholder='CVV / CVC*'></TextInput>
     <TextInput style={styles.input4}placeholderTextColor={'black'} placeholder='First Name*'></TextInput>
     <TextInput style={styles.input5}placeholderTextColor={'black'} placeholder='Last Name*'></TextInput>
     </ImageBackground>
     

    </View>
  )
}

export default PaymentMethod

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1
    },
    textheading: {
        fontSize: 26,  
        color: 'black',
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 80,

    },
    text1: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        marginRight: 50,
        marginTop: 70,
    },
    input: {
        borderWidth: 1,
        width: 340,
        marginLeft: 22,
        borderRadius: 5,
        backgroundColor: '#B7ADAD',
        color: 'black',
        paddingLeft: 20,
        marginBottom: 40,
        height:40,
        marginTop: 80,
    },
    input1: {
        borderWidth: 1,
        width: 80,
        marginLeft: 22,
        borderRadius: 5,
        backgroundColor: '#B7ADAD',
        color: 'black',
        paddingLeft: 20,
        marginBottom: 40,
        height:40,
        
        marginTop: -10,
    },
    input2: {
        borderWidth: 1,
        width: 80,
        marginLeft: 120,
        borderRadius: 5,
        backgroundColor: '#B7ADAD',
        color: 'black',
        paddingLeft: 20,
        marginBottom: 40,
        height:40,
      
        marginTop: -80,
        
    },
    input3: {
        borderWidth: 1,
        width: 140,
        marginLeft: 225,
        borderRadius: 5,
        backgroundColor: '#B7ADAD',
        color: 'black',
        paddingLeft: 20,
        marginBottom: 30,
        height:40,
        marginTop: -80,
    },
    input4: {
        borderWidth: 1,
        width: 340,
        marginLeft: 22,
        borderRadius: 5,
        backgroundColor: '#B7ADAD',
        color: 'black',
        paddingLeft: 20,
        marginBottom: 30,
        height:40,
        
    },
    input5: {
        borderWidth: 1,
        width: 340,
        marginLeft: 22,
        borderRadius: 5,
        backgroundColor: '#B7ADAD',
        color: 'black',
        paddingLeft: 20,
        marginBottom: 40,
        height:40,
       
    },
 })
    