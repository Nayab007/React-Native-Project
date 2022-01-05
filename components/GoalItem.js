import React from 'react';

import { View,Text, StyleSheet, Touchable} from 'react-native'

const GoalItem = props => {
    return (
        <Touchable>
        <View style={styles.listItem} >
        <Text>{props.title}</Text>
    </View>
    </Touchable>
    );  
};

const styles = StyleSheet.create({
    listItem : {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
        borderColor: 'black',
        borderWidth: 1
      }
});

export default GoalItem
