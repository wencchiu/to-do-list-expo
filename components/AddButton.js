import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AddButton () {
    return(
        <TouchableOpacity style={styles.taskBotton}>
          <Text style={{ color: "#fff", fontWeight: '700' }}>Add New Task</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    taskBotton: {
        backgroundColor: "#3d3b71",
        margin: 10,
        padding: 15,
        borderRadius: 5,
    },
})

