import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TaskList } from './TaskList.js';
import AddButton from './AddButton.js';

export default function App({ 
  task, 
  taskList, 
  updateTask, 
  addTodo, 
  deleteTodo 
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a todo..."
        onChangeText={text => updateTask(text)}
        value={task} />
      <AddButton task={task} addTodo={addTodo} />
      <TaskList
        taskList={taskList}
        deleteTodo={deleteTodo}
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
