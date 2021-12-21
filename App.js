import React from 'react';

import { StyleSheet, Text, View, Button, TextInput, } from 'react-native';

export default function App() {
 
  return (
    <View style={{
    
    flexDirection: 'row',
    width: '80%',
     height: 300,
     justifyContent: 'space-around',
     alignItems: 'stretch',
     }}
     >
       <View style ={{
        backgroundColor: 'salmon',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

      }}>
        <Text>1</Text>
      </View>
    
       <View style ={{
        backgroundColor: 'gray',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'

      }}>
      <Text>2</Text>
    </View>
       <View style ={{
        backgroundColor: '#223251',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

      }}>
      <Text>3</Text>
    </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
    screen : {
      padding
    }
});
