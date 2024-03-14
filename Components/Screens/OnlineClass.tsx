import { StyleSheet, Text, View, ImageBackground, TextInput, Alert, BackHandler } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';

const OnlineClass = () => {
    useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
            Alert.alert('', 'Are you sure want to quit ?', [
              {
                text: 'Cancel',
                onPress: () => null,
              },
              {
                text: 'Yes',
                onPress: () => BackHandler.exitApp(),
              }
            ]);
            return true;
          };
          // Add event listner to hardware back press
          BackHandler.addEventListener('hardwareBackPress', onBackPress);
          return () => {
            // once the screen gets blur remove event listner
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
          };
        }
          , []),
      );
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../images/onlineclass.png')} resizeMode="cover" style={styles.image}>
     <Text style={styles.textheading}>Online Class</Text>
     <View style={styles.wrapper}>
     <Text style={styles.text}>Date</Text>
     <TextInput style={styles.input}placeholderTextColor={'black'} placeholder='xx / xx / xxxx'></TextInput>
     <Text style={styles.text}>Time</Text>
     <TextInput style={styles.input}placeholderTextColor={'black'} placeholder='XX : XX'></TextInput>
     <Text style={styles.text}>Put the required link for online class here</Text>
     <TextInput style={styles.input}placeholderTextColor={'black'} placeholder='https://meet.google.com/mnd-tpqm-gbb'></TextInput>
     </View>
     </ImageBackground>
    </View>
  )
}

export default OnlineClass

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    textheading: {
        fontSize: 26,  
        color: 'black',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    wrapper: {
        alignSelf:'center',
        width: 360,
        borderRadius: 5,
        backgroundColor: '#944CC0',
        height:300,
        marginBottom:40,
        marginTop: 325,
        justifyContent:'center'
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign:'center'
        },
    input: {
        borderWidth: 1,
        borderColor:'#ff00ff',
        width: 'auto',
        borderRadius: 5,
        backgroundColor: '#F0D9F5',
        color: 'black',
        minWidth:250,
        marginBottom: 10,
        height:40,
        marginTop: 10,
        textAlign: 'center',
        alignSelf:'center',
    },
})