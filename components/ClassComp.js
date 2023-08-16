import React, {Component} from "react";
import { Button, Text, TextInput, View  } from "react-native";



class ClassCom extends React.Component{

    render(){
      console.warn(this.props)
      return(
        <View>
          <Text style={{ fontSize:30, color: 'red'}}>Class component: {this.props.name}</Text>
        </View>
      )
    }
  }
  export default ClassCom;