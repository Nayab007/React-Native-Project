import React from 'react';
import { View, } from 'react-native';

const GoalInput = props => {
    return (
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goal" 
        style={styles.input}
        onChangeText={goalInputHandler} />

        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
    );
};


const styles = StyleSheet.create({});

export default GoalInput;