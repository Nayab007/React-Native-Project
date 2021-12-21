import React from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={{
            width: '80%',
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
          }}
        />

        <Button title="ADD" />
      </View>
      <View style={styles.inputContainer}/>
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
});
