import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Teacher = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cover}>
                <Text style={styles.covertext}>Hello!</Text>
                <Text style={styles.covertext}>John Doe</Text>
                <Image style={styles.profile} source={require("../images/MaleFemale.png")}></Image>
            </View>
            <View>
                <Text style={{textAlign:'center',color:'black',fontSize:20}}>Quick Actions</Text>
            </View>
        </View>
    )
}

export default Teacher

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(168, 159, 178, 1)"
    },
    cover :{
        backgroundColor:'white',
        width:360,
        height:150,
        padding:10,
        borderRadius:20,
        right:-20,
        alignSelf:'flex-end',
        marginTop:50,
        justifyContent:'center',
    },
    covertext: {
        color:'black',
        fontSize:26,
        marginLeft:30
    },
    profile: {
        width:80,
        height:60,
        position:'absolute',
        right:60
    },
})