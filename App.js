import React from 'react';

import { StyleSheet, Text, View, Button, TextInput, } from 'react-native';

export default function App() {
 
  return (
    <View style={{padding: 40}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <TextInput placeholder="Today's Goal" style={{borderBottomColor: 'black', borderBottomWidth: 2, padding: 10}}/>
          <Button title="ADD"/>
      </View>
    

      <View/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
