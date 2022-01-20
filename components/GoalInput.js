import React, { useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };  

    return (
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goal" 
        style={styles.input}
        onChangeText={goalInputHandler} 
        value={enteredGoal}
        />
        <View style ={styles.buttonContainer}>
          <View style={styles.button}>
        <Button title="CANCEL" color="#e33720" onPress={props.onCancel}/>
        </View>
        <View style={styles.button}>
        <Button title="ADD" color="#4de320" onPress={addGoalHandler}/>
        </View>
        </View>
      </View>
      </Modal>
    );
};


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      input: {
        width: '90%',
        borderColor: '#209fe3',
        borderWidth: 1,
        padding: 11,
        marginBottom: 10,
      },
      buttonContainer: {
      flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
      },

      button: {
        width: '42%'
      }
});

export default GoalInput;