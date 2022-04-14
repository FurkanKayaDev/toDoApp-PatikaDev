import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#7DA453',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,


    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    itemText: {
        maxWidth: '100%',
        color:'white'
    },
    delete: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
})

export default Task;