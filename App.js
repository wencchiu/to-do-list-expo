import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, FlatList, Button } from 'react-native';

export default function App() {
  const [task, setTask] = useState("");
  const arr = [
    {taskNum: 1, task: "task1"}, 
    {taskNum: 2, task: "task2"}, 
    {taskNum: 3, task: "task3"}, 
  ];

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text>{item.task}</Text>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
    
  )
 
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
       
        >
        <Text style={{color: "#fff", fontWeight: 700}}>Add New Task</Text>
      </TouchableOpacity>
      <FlatList
        data={arr}
        renderItem={renderItem}
        keyExtractor={item => item.taskNum}
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
    fontWeight: "700",
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
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40, 
    padding: 10,
    margin: 5,
    width: 300,
    backgroundColor:"#ececec",
  },
  deleteButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#3d3b71",
  },
  delete: {
    color: "#fff",
    textAlign: "center"
  }
});
