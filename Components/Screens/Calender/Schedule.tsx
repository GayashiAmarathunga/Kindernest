import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';

const handlePress = (schedule: {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}) => {
  const date = schedule;
  console.log(date);
};

const Schedule: React.FC<{
  schedule: {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
  };
}> = ({schedule}) => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.scheduleText, {fontSize: 14}]}>Schedule</Text>
          <Text style={[styles.scheduleText, {fontSize: 8}]}>10 Mar</Text>
        </View>
        <Pressable style={styles.addBtn}>
          <View style={[styles.addBtnIcon, {height: 12, width: 2}]} />
          <View
            style={[
              styles.addBtnIcon,
              {width: 12, height: 2, position: 'absolute'},
            ]}
          />
        </Pressable>
      </View>

      {/* conditional rendering based on day's schedule */}
      <View>
        <Button
          onPress={() => handlePress(schedule)}
          title="consolelog"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    width: '75%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scheduleText: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  addBtn: {
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9100EB',
  },
  addBtnIcon: {
    borderRadius: 2,
    backgroundColor: '#FFF',
  },
});
