import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import TaskList from './components/TaskList.js';

export default function App() {
  const [task, setTask] = useState('');
  const [taskNum, setTaskNum] = useState(0);
  let [taskList, setTaskList] = useState([]);

  const addNewTaskInList = () => {
    // const newTakList = [...taskList, { taskNum: taskNum + 1, task }];
    // // taskList = [...taskList, { taskNum: taskNum + 1, task: task }];
    // setTaskList(newTakList)
    // setTaskNum(taskNum + 1);
    // setTask('');
    setTaskList([...taskList, task]);
    setTask('');
  }

  const deleteTask = (taskNum, index) => {
    // const taskNumArr = taskList.map((task, idx) => idx);
    // taskList.splice(taskNumArr.indexOf(taskNum), 1);
    const newTaskList = taskList.filter((task, idx) => idx !== index);
    setTaskList(newTaskList);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a todo..."
        onChangeText={task => setTask(task)}
        value={task}></TextInput>
      <TouchableOpacity
        style={styles.taskBotton}
        onPress={addNewTaskInList}
      >
        <Text style={{ color: "#fff", fontWeight: '700' }}>Add New Task</Text>
      </TouchableOpacity>
      <TaskList
        taskList={taskList}
        deleteTask={deleteTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    margin: 25,
    color: "#3d3b71",
    fontSize: 50,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 300,
    margin: 10,
    padding: 10,
    borderColor: "#3d3b71",
    borderWidth: 1,

  },
  taskBotton: {
    backgroundColor: "#3d3b71",
    margin: 10,
    padding: 15,
    borderRadius: 5,
  },
});
