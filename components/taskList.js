import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

export const TaskList = (props) => {
  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          props.deleteTodo(index);
        }}
      >
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    props.fetchTodos();
  }, props);

  return (
    <FlatList
      data={props.taskList}
      renderItem={renderItem}
      keyExtractor={(item, index) => index}
      extraData={props}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    padding: 10,
    margin: 5,
    width: 300,
    backgroundColor: "#ececec",
  },
  deleteButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#3d3b71",
  },
  delete: {
    color: "#fff",
    textAlign: "center",
  },
});
