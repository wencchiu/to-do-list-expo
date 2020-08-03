import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import TaskList from './components/taskList.js';

export default function App() {
  const [task, setTask] = useState("");
  const [taskNum, setTaskNum] = useState(0);
  let [taskList, setTaskList] = useState([]);

  const addNewTaskInList = () => {
    taskList = [...taskList, {taskNum: taskNum+1, task: task}];
    setTaskList( taskList )
    setTaskNum( taskNum+1 );
    setTask("");
  }

  const deleteTask = (taskNum) => {
    const taskNumArr = taskList.map(e => e.taskNum);
    taskList.splice(taskNumArr.indexOf(taskNum), 1);
    setTaskList( taskList.slice() );
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
        <Text style={{color: "#fff", fontWeight: 700}}>Add New Task</Text>
      </TouchableOpacity>
      <TaskList taskList={taskList} deleteTask={deleteTask} />
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
