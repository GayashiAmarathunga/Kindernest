import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Calendar, LocaleConfig, CalendarProps} from 'react-native-calendars';
import CustomDay from './CustomDay';

const scheduleData: {[key: string]: string[]} = {
  '2024-03-01': ['class'],
  '2024-03-04': ['task'],
  '2024-03-05': ['class'],
  '2024-03-13': ['task'],
  '2024-03-20': ['task'],
  '2024-03-29': ['class'],
};

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
            textDayFontSize: styles.day.fontSize,
            textMonthFontFamily: 'Poppins-Medium',
            textDayHeaderFontFamily: 'Poppins-Medium',
            textDayHeaderFontSize: styles.dayHeader.fontSize,
          }}
          hideArrows={true}
          dayComponent={({date}) => (
            <CustomDay
              date={date}
              schedules={scheduleData[date?.dateString || ''] || []}
            />
          )}
        />
      </View>

      {/* Separator (a line) */}
      <View
        style={{
          width: '80%',
          borderBottomWidth: 1,
          borderBottomColor: '#838383',
          marginTop: 30,
        }}
      />
    </SafeAreaView>
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
  },
  dayHeader: {
    fontSize: 12,
  },
  day: {
    fontSize: 16,
  },
});
