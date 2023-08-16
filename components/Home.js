 import {Text, View, } from 'react-native';
 export const Home = ( props ) => {
  console.warn(props.route.params)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}> lorem25</Text>
        <Text style={{fontSize: 30}}> Name: {props.route.params.name}</Text>
        <Text style={{fontSize: 30}}> Age: {props.route.params.age}</Text>
      </View>
    );
  };