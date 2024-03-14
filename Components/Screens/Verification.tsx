import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { OtpInput } from "react-native-otp-entry";

const Verification = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../images/Verification.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.textheading}>Verification</Text>
                <Text style={styles.text}>Enter the Verification code</Text>
                <OtpInput
                    numberOfDigits={4}
                    focusStickBlinkingDuration={500}
                    onTextChange={(text) => console.log(text)}
                    onFilled={(text) => console.log(`OTP is ${text}`)}
                    focusColor="rgba(145, 0, 235, 1)"
                    theme={{
                        containerStyle: styles.pin,
                        pinCodeTextStyle: styles.pinCodeText,
                       }}/>
                <TouchableOpacity style={styles.button}><Text style={{ fontSize: 20, padding: 10, textAlign: 'center', fontWeight: 'bold' }}>confirm</Text></TouchableOpacity>

            </ImageBackground>

        </View>
    )
}

export default Verification

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1
    },
    textheading: {
        fontSize: 26,
        marginLeft: 30,
        color: 'black',
        marginTop: 140,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 40
    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 30,
        marginBottom: 20
    },
    button: {
        backgroundColor: 'rgba(145, 0, 235, 1)',
        borderRadius: 50,
        width: 'auto',
        alignSelf: 'center',
    },
    pin:{
        width:300,
        alignSelf:'center',
        marginBottom:40,
        marginTop:20
    },
    pinCodeText:{
        color:'rgba(145, 0, 235, 1)'
    }
})