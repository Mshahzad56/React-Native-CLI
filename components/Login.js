 import { useState } from 'react';
import { Text, View, Button, TextInput, } from 'react-native';
 export const Login = props => {
  const [name, setName]=useState('')
  const age =29;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}> Passing data btw Screen</Text>
      <TextInput 
      style={{fontSize:20, borderColor:'red', borderWidth: 2}}
       onChangeText={(text)=>console.warn(text)} placeholder='Enter Name'/>
        <Button
          title="Go to Home page"
          onPress={() => props.navigation.navigate('Home', {name,age})}
        />
      </View>
    );
  };
  