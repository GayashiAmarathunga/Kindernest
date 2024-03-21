import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../images/Home.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.wrapper}>
        <Text style={styles.text}>Howdy,</Text>    
        <Text style={styles.text1}>John Doe</Text>
        <Text style={styles.text2}>Active</Text>
        <Image style={styles.profile} source={require("../images/MaleFemale.png")}></Image>
        </View>
        <View>
        <Text style={styles.text3}>Quick Actions</Text>   
        </View>
     </ImageBackground>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    wrapper: {
        alignSelf: 'center',
        width: 280,
        borderRadius: 20,
        backgroundColor: '#FFFEFE',
        height: 120,
        marginBottom: 40,
        marginTop: 50,
        justifyContent: 'center',
        marginLeft:125,
    },
    text: {
        color: 'black',
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 40,
    },
    text1: {
        color: 'black',
        fontSize: 25,
        textAlign: 'left',
        marginLeft: 40,
    },
    text2: {
        color: 'black',
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 40,
    },
    profile: {
        width:80,
        height:60,
        position:'absolute',
        right:40
    },
    text3: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 40,
        marginTop:-23,
    },
    
})