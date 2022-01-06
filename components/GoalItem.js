import React from 'react';

import { View,Text, StyleSheet, TouchableOpacity} from 'react-native'


const GoalItem = props => {
    return (
        <TouchableOpacity  onPress={props.onDelete}>
        <View style={styles.listItem} >
        <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
    );  
};

const styles = StyleSheet.create({
    listItem : {
        padding: 11,
        marginVertical: 11,
        backgroundColor: '#fccc80',
        borderColor: '#000000',
        borderWidth: 2
      }
});

export default GoalItem
