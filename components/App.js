import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import TaskList from './TaskList.js';
import AddButton from './AddButton.js'

export default function App() {
  const [task, setTask] = useState('');
  let [taskList, setTaskList] = useState([]);

  const addNewTaskInList = () => {
    setTaskList([...taskList, task]);
    setTask('');
  }

  const deleteTask = (index) => {
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
      <AddButton onPress={addNewTaskInList} />
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
});
