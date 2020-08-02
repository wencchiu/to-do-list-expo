import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';

export default function TaskList (props){
    const renderItem = ({ item }) => (
        <View style={styles.item}>
          <Text>{item.task}</Text>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.delete}>X</Text>
          </TouchableOpacity>
        </View>  
      )

    return (
        <FlatList
            data={props.taskList}
            renderItem={renderItem}
            keyExtractor={item => item.taskNum}
            extraData={props}
      />

    )

}

const styles = StyleSheet.create({
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

})