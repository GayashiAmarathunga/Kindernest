import { StyleSheet, Text, View, ImageBackground, Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Emergencyalert = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.Emergencyalert} source={require("../images/Emergancyalart.png")}></Image>
            </View>
            <View>
                <Text style={styles.text}>Emergency alert</Text>
            </View>
            <View>
                <Image style={{ position: 'absolute', left: 100, width: 73, height: 78, marginTop: 30, }} source={require("../images/Maleuser.png")}></Image>
            </View>
            <View>
                <Text style={styles.text1}>Bob Charles</Text>
            </View>
            <View>
                <Text style={styles.text2}>Class 4A</Text>
            </View>
            <View>
                <Text style={styles.text3}>Emergency Number</Text>
            </View>
            <View>
                <Text style={styles.text4}>+94 77 659 3256</Text>
            </View>
            <View>
                <Text style={styles.text5}>Description (optional)</Text>
                <TextInput multiline
                    numberOfLines={6} style={{ width:"80%", alignSelf:'center', borderRadius:30, backgroundColor:'#E7CBF0', color:'black', marginTop: 30,}}></TextInput>
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('Pregister')} style={styles.button}><Text style={{ fontSize: 20, padding: 10, textAlign: 'center', fontWeight: 'bold', color: 'black', }}>Send</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Emergencyalert

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(168, 159, 178, 1)"
    },
    image: {
        flex: 1,
    },
    wrapper: {
        alignSelf: 'center',
        width: 1200,
        borderRadius: 5,
        backgroundColor: '#D9AAE1',
        height: 181,
        justifyContent: 'center',
        marginRight: 60
    },
    text: {
        color: 'black',
        fontSize: 25,
        marginTop: -110,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text1: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 100,
        marginTop: 40,
    },
    text2: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 72,
    },
    text3: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 110,
        marginTop: 60,
    },
    text4: {
        color: '#8B2CF5',
        fontSize: 15,
        textAlign: 'center',
        marginRight: 135,
        marginTop: 10,
        fontWeight: 'bold'
    },
    text5: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        marginRight: 135,
        marginTop: 60,
    },
    TextArea: {
        height: 100,
        width: 300,
        borderColor: 'white',
    },
    button: {
        backgroundColor: '#D9AAE1',
        borderRadius: 50,
        width: 'auto',
        alignSelf: 'center',
        marginTop: 60,
    },

})