import React from 'react';

import { StyleSheet, Text, View, Button, TextInput, } from 'react-native';

export default function App() {
 
  return (
    <View style={{padding: 50, width: '80%', height: 300}}>
       <View style ={{
        backgroundColor: 'salmon',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'

      }}>
        <Text>1</Text>
      </View>
      <View style={{padding: 50}}>
       <View style ={{
        backgroundColor: 'gray',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'

      }}></View>
      <Text>2</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
