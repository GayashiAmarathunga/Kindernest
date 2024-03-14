import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Day from './Day';

const Calender = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calenderContainer}>
        <Calendar
          theme={{
            backgroundColor: '#E7CBF0',
            calendarBackground: '#E7CBF0',
            textSectionTitleColor: '#000000',
            selectedDayBackgroundColor: 'blue',
            selectedDayTextColor: 'white',
            todayTextColor: 'blue',
            dayTextColor: '#000000',
            textDisabledColor: '#838383',
            dotColor: 'blue',
            selectedDotColor: 'white',
            arrowColor: 'blue',
            monthTextColor: '#9100EB',
            textDayFontFamily: 'Poppins-Medium',
            textMonthFontFamily: 'Poppins-Medium',
            textDayHeaderFontFamily: 'Poppins-Medium',
          }}
          hideArrows={true}
        />
      </View>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <Text style={styles.dates}>MAR</Text>
    // </View>
  );
};

export default Calender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7CBF0',
    alignItems: 'center',
  },
  calenderContainer: {
    width: 350,
    paddingTop: 20,
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
  dates: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#9100EB',
  },
});
