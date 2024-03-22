import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Process = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Parent Name</Text>
    </View>
  );
};

export default Process;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 26,
    lineHeight: 50,
    textAlign: 'center',
  },
});
