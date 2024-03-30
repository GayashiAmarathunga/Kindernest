import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const taskData: {[key: string]: string[]} = {
  '2024-03-04': [
    'Giving orders to prepare the necessary clothes for the event on the 19th',
    "Updating children's progress reports",
    'All reports to be submitted',
  ],
  '2024-03-13': ["Updating children's progress reports"],
  '2024-03-20': ["Updating children's progress reports"],
};

const renderTask = (dateString: string): string[] => {
  const taskEntry = Object.entries(taskData).find(
    ([taskDate, _]) => taskDate === dateString, // returns an array of date and its task
  );

  return taskEntry ? taskEntry[1] : []; // return the task if found, otherwise an empty string
};

const TasksSchedule: React.FC<{
  day: {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
  };
}> = ({day}) => {
  const tasks = renderTask(day.dateString);

  return (
    <ScrollView style={styles.tasksScrollView}>
      <View style={styles.tasks}>
        {/* each task */}
        {tasks.map((task, index) => {
          return (
            <View style={styles.task} key={index}>
              {/* Header - Task + TaskNo */}
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 12,
                  color: '#000000',
                  marginTop: 10,
                  marginLeft: 18,
                }}>
                Task
              </Text>
              {/* The task */}

              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                  color: '#000000',
                  width: 250,
                  alignSelf: 'center',
                }}>
                {task}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default TasksSchedule;

const styles = StyleSheet.create({
  tasksScrollView: {
    maxHeight: 200,
  },
  tasks: {
    // borderColor: 'blue',
    // borderStyle: 'solid',
    // borderWidth: 1,
  },
  task: {
    minWidth: '98%',
    height: 80,
    // marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#daaede',
    borderRadius: 5,
    // justifyContent: 'center',
  },
});
