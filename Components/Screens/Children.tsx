import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const Children = () => {
  return (
    <View  style={styles.container}>
        <ImageBackground source={require('../images/onlineclass.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.textheading}>Online Class</Text>
    </View>
  )
}

export default Children

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
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
})