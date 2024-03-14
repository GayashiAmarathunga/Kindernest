import {StyleSheet, Text, View} from 'react-native';

// interface DayProps {
//   date: Date;
//   item?: {title: string};
// }

const numbers = Array.from({length: 30}, (_, index) => index + 1);

const Day = () => {
  return (
    <View style={styles.container}>
      {numbers.map(number => (
        <Text style={styles.date} key={number}>
          {number}
        </Text>
      ))}
    </View>
  );
};

export default Day;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 14,
  },
});
