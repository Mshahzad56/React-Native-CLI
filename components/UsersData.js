
import { StyleSheet, Text, View } from 'react-native'

export default UsersData = (props)=>{
    const item= props.item;
    return(
      <View style={Styles.box}>
        <Text style={Styles.item}> {item.name}</Text>
        <Text style={Styles.item}> {item.email}</Text>
      </View>
    )
  }
  
   const Styles=StyleSheet.create({
        item:{
          fontSize: 25,
          color: "deeppink",
          flex: 1,
          margin: 2,
        },
        box:{
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: 'orange',
          marginBottom: 10,
          padding: 2,
          textAlign: 'center'
        }
        })