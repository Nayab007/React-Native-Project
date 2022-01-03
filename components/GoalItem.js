import React from 'react';
import { View } from 'react-native-web';
import { View,Text, StyleSheet} from 'react-native-web'

const GoalItem = props => {
    return (
        <View style={styles.listItem} >
        <Text>{props.title}</Text>
    </View>
    );  
};

const styles = StylesSheet.create({
    listItem : {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
});

export default GoalItem
