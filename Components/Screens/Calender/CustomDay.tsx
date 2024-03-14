import {StyleSheet, Text, View} from 'react-native';
import {CalendarProps} from 'react-native-calendars';

interface CustomDayProps {
  date?: {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
  };
  schedules: string[];
}

const CustomDay: React.FC<CustomDayProps> = ({date, schedules}) => {
  // Handle case where date is undefined
  if (!date) {
    return null;
  }

  // Determine the color of the line based on the schedule
  const getColorForSchedule = (schedule: string): string => {
    switch (schedule) {
      case 'class':
        return 'green';
      case 'task':
        return 'blue';
      default:
        return 'black';
    }
  };

  const renderLinesForSchedules = () => {
    return schedules.map((schedule, index) => (
      <View
        key={index}
        style={[styles.line, {backgroundColor: getColorForSchedule(schedule)}]}
      />
    ));
  };
  return (
    // Custom Day
    <View style={styles.container}>
      <Text style={styles.day}>{date.day}</Text>

      {/* Render colored lines marking schedules */}
      {renderLinesForSchedules()}
    </View>
  );
};

export default CustomDay;

const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  line: {
    width: '60%',
    height: 2,
    borderRadius: 1,
  },
  day: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
});
