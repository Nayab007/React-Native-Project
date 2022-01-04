import React from 'react';

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

export default GoalInput;