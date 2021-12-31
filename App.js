import React, {useState} from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [ enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goal" 
        style={styles.input}
        onChangeText={goalInputHandler} />

        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View>
          {courseGoals.map((goal) => <View><Text style={} key={goal}>{goal}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    width: '75%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  },

  listItem : {
    padding: 10,
    magin: 10,
  }
});
