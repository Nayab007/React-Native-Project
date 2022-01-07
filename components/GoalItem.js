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
        backgroundColor: '#ffcc70',
        borderColor: '#000000',
        borderWidth: 1
      }
});

export default GoalItem
