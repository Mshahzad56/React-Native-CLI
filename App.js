import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  SectionList,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Pressable,
  StatusBar,
  Platform,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import UserData from './components/UserData';
import ExStyles from './style';
import style from './style';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import UsersData from './components/UsersData';
import ClassCom from './components/ClassComp';
import {WebView} from 'react-native-webview';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBarItem } from 'react-native-tab-view';

// button , onpress .console warn (9)

// const App = () =>{
//   const Btn = (value:number) => {
//     console.warn(value)
//   }
//   return(
//     <View>
//       <UserData/>
//       <Text style={{ fontSize: 30}}> Components  </Text>
//       <Button title="On Press" onPress={()=>Btn(50)} color={"deeppink"}/>
//       {/* <Button title="On Press 2" onPress={Btn} color={"red"}/> */}
//     </View>
//   );
// };

//  Usestate and update state (10)

// const App = () =>{
//   const [ name, setName ] = useState("akash");

//   let data="khanww"
//    function testName(){

//     setName('khan')
//     data = "peter"

//   }
//   return(
//     <View>
//     <Text style={{ fontSize: 30}}> {name} </Text>
//     <Text style={{ fontSize: 30}}> {data} </Text>
//     <Button title='update name' onPress={testName}/>
//     </View>
//   )
// }

//                                     //  Props update props  (11)
// const App = () => {
//   const [name, setName]=useState('Defult Name')
//   return(
//     <View>
//     <Text style={{ fontSize: 30}}>Props</Text>
//     <Button title='UpdateProps' onPress={()=>setName("Upadated Prop")} />
//     <User name={name} Age={63}/>
//     </View>
//   )
// }

// const User=(props)=>{
//   return(
//     <View style={{padding: 5}}>
//     <Text style={{ fontSize: 35, backgroundColor: "green"}}> Name: {props.name} </Text>
//     <Text style={{ fontSize: 35, backgroundColor: "green"}}> Age: {props.Age} </Text>
//     </View>
//   )
// }

//        Basic Styles in RN /internal/ external/ inline (12)

// const App =()=>{
//   return(
//     <View>
//       <Text style={{fontSize: 25, color: 'red', borderWidth: 5, borderRadius: 10, backgroundColor: 'pink'}}> Inline Styles</Text>
//       <Text style={ExStyles.textBox}>External Styles</Text>
//       <Text style={Styles.textBox}> Internal Styles</Text>
//       <Text style={Styles.textBox}> Internal Styles</Text>
//       <Text style={Styles.textBox}> Internal Styles</Text>
//       <Text style={[Styles.textBox, ExStyles.textBox,{marginTop:20}]}> Internal Styles</Text>
//     </View>
//   )
// }

// const Styles=StyleSheet.create({
//   textBox:{
//     color: 'blue',
//     fontSize: 35,
//     backgroundColor: "deeppink",
//     margin: 10,
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     padding: 5,
//     marginBottom: 10,
//     borderRadius: 10,
//     height: 70,
//     borderColor: 'green',
//     borderWidth: 5,
//   }
// })

//     GET TEXT INPUT VALUE=( HANDLING TEXT INPUT)

// const App =()=>{
//   const[name, setName]= useState('React');
//   return(
//     <View>
//      <Text style={{fontSize: 30,}}> Handling Text Input</Text>
//      <Text style={{fontSize: 25,}}>What Is Your Name: {name} </Text>
//      <TextInput
//      style={Styles.textInput}
//      placeholder='Enter Your Name'
//      value={name}
//      onChangeText={(text)=>setName(text)}
//      />
//      <Button title='Reset Button' onPress={()=>setName('')}/>
//     </View>
//   )
// }

// const Styles=StyleSheet.create({
// textInput:{
//   fontSize: 20,
//   color: 'red',
//   borderWidth: 3.5,
//   borderColor: 'blue',
//   margin: 10
// }
// })

//                       SIMPLE FORM IN REACT-NATIVE (13)

// const App =()=>{
//     const [name, setName]= useState('');
//     const [email, setEmail]= useState('');
//     const [password, setPassword]= useState('');
//     const [display, setDisplay] =useState(false)

//     const resetFormData =() =>{
//       setDisplay(false);
//       setEmail('');
//       setName('');
//       setPassword('')
//     }
//     return(
//       <View>
//         <Text style={{fontSize:30}}> Simple Forms</Text>
//         <TextInput
//         style={Styles.textInput}
//         placeholder='Enter User Name'
//         onChangeText={(text)=>setName(text)}
//         value={name}
//         />

//          <TextInput
//         style={Styles.textInput}
//         placeholder='Enter User Email'
//         onChangeText={(text)=>setEmail(text)}
//         value={email}
//         />

//          <TextInput
//         style={Styles.textInput}
//         placeholder='Enter User Password'
//         secureTextEntry={true}
//         onChangeText={(text)=>setPassword(text)}
//         value={password}
//         />
//         <View style={{marginBottom:10}}>
//         <Button color={'deeppink'} title='Print Detail' onPress={()=>setDisplay(true)} />
//         </View>
//         <Button title='Clear Details' onPress={(resetFormData)}/>
//         <View>
//           {
//             display ?
//             <View>
//               <Text style={{fontSize: 20}}>User Name is: {name} </Text>
//               <Text style={{fontSize: 20}}>User Email is: {email} </Text>
//               <Text style={{fontSize: 20}}>User Password is: {password} </Text>
//               </View>: null
//           }
//         </View>

//       </View>
//     )
// }

// const Styles=StyleSheet.create({
//   textInput:{
//     fontSize: 20,
//     color: 'black',
//     borderWidth: 3.5,
//     borderColor: 'blue',
//     margin: 10,
//     borderRadius: 10,
//     marginVertical: 10,
//     marginHorizontal: 5
//   }
//   })

//       LIST AND FLAT LIST (14)

// const App =() => {

//   const Users=[
//     {
//       id:1,
//       name: "Ali"
//     },
//     {
//       id:2,
//       name: "Ahmad"
//     },
//     {
//       id:3,
//       name: "Khan"
//     },
//     {
//       id:4,
//       name: "Bruce"
//     },
//     {
//       id:5,
//       name: "Tommy"
//     },

//   ]
//   return(

//     <View>
//       <Text style={{fontSize:30}}>List and FlatList</Text>
//       <FlatList
//       data={Users}
//       renderItem={({item})=><Text style={Styles.list}>{item.name}</Text>}
//       keyExtractor={item=>item.id}
//       />
//     </View>
//   )
// }

// const Styles=StyleSheet.create({
//     list:{
//       fontSize: 25,
//       padding: 10,
//       color: 'black',
//       backgroundColor:'aqua',
//       borderColor: "red",
//       borderWidth: 3.5,
//       margin: 10,
//       borderRadius: 15

//     }
//     })

//                           LIST WITH MAP  FUNCTION(CUSTOM)+{scrollview} (15)
// const App= ()=>{
//   const Users=[
//         {
//           id:1,
//           name: "Ali"
//         },
//         {
//           id:2,
//           name: "Ahmad"
//         },
//         {
//           id:3,
//           name: "Khan"
//         },
//         {
//           id:4,
//           name: "Bruce"
//         },
//         {
//           id:5,
//           name: "Tommy"
//         },
//         {
//           id:5,
//           name: "Tommy"
//         },
//         {
//           id:5,
//           name: "Tommy"
//         },
//         {
//           id:5,
//           name: "Tommy"
//         },
//         {
//           id:5,
//           name: "Tommy"
//         },
//         {
//           id:5,
//           name: "Tommy"
//         },
//         {
//           id:5,
//           name: "Tommy"
//         },
//         {
//           id:5,
//           name: "Tommy"
//         },
//       ]
//   return(
//     <View>
//      <Text style={{fontSize:30}}>list map</Text>
//      <ScrollView style={{marginBottom:50}}>
//      {
//       Users.map((data )=><Text style={Styles.list}>{data.name}</Text>)
//      }
//      </ScrollView>
//     </View>
//   )
// }

//  const Styles=StyleSheet.create({
//       list:{
//         fontSize: 25,
//         padding: 10,
//         color: 'black',
//         backgroundColor:'aqua',
//         borderColor: "red",
//         borderWidth: 3.5,
//         margin: 10,
//         borderRadius: 15

//       }
//       })

//                   DYNAMIC GRIDS & STATIC GRID (16)

// const App =() => {
//     const Users=[
//         {
//           id:1,
//           name: "Ali"
//         },
//         {
//           id:2,
//           name: "Ahmad"
//         },
//         {
//           id:3,
//           name: "Khan"
//         },
//         {
//           id:4,
//           name: "Bruce"
//         },
//         {
//           id:5,
//           name: "Tommy"
//         },
//       ]
//   return(
//     <View>
//       <Text style={{fontSize:30}}> STATIC and DYNAMIC GRID</Text>
//       <View style={{flex: 1, flexDirection:'row', flexWrap: 'wrap' }}>
//         {
//           Users.map((item)=><Text style={Styles.items}>{item.id}</Text>)
//         }
//       </View>
//     </View>
//   )
// }

//  const Styles=StyleSheet.create({
//       items:{
//         fontSize: 25,
//         backgroundColor: "deeppink",
//         color: "blue",
//         margin: 5,
//         padding: 5,
//         borderWidth: 2,
//         borderRadius: 2,
//         width: 120,
//         height: 120,
//         textAlignVertical: 'center',
//         textAlign:'center,
//       }
//       })

//   COMPONENT IN LOOP WITH FLATLIST

// const App =()=>{
//   return(
//     <View>
//       <Text>

//       </Text>
//     </View>
//   )
// }

//       COMPONENTS IN LOOP WITH FLATLIST (17)

// const App = ()=>{
//   const users=[
//     {
//       id: 1,
//       name: 'Aliyan',
//       email: 'abc@mail.com'
//     },
//     {
//       id: 2,
//       name: 'Talpad',
//       email: 'abc@mail.com'
//     },
//     {
//       id: 3,
//       name: 'Lala',
//       email: 'abc@mail.com'
//     },
//     {
//       id: 4,
//       name: 'Babal',
//       email: 'abc@mail.com'
//     }
//   ]
//   return(
//     <View>
//       <Text style={{fontSize:25}}>COMPONENTS IN LOOP WITH FLATLIST</Text>
//       <FlatList
//       data={users}
//       renderItem={({item})=> <UsersData item={item}/>}
//       />
//     </View>
//   )
// }

//         SECTION LIST IN RN (18)

// const App =()=>{
//   const users=[
//         {
//           id: 1,
//           name: 'Aliyan',
//           data:['Php','React','Css','Js']
//         },
//         {
//           id: 1,
//           name: 'Tommy',
//           data:['Angular','Express','Bootstrp','Node']
//         },
//         {
//           id: 1,
//           name: 'Robert',
//           data:['C++','C#','Native','Mongo']
//         },
//         {
//           id: 1,
//           name: 'Alexa',
//           data:['Sql','Databs','Html','Java']
//         },
//       ]
//   return(
//     <View>
//      <Text style={{fontSize:25}}>SECTION LIST IN RN</Text>
//      <SectionList
//      sections={users}
//      renderItem={({item})=><Text style={{fontSize:25,marginLeft:20, color:'blue'}}>{item}</Text>}
//      renderSectionHeader={({section:{name}})=>(
//       <Text style={{fontSize:25, color:'red'}}>{name}</Text>
//      )}
//      />
//      </View>
//   )
// }

//          CLASS COMPONENT IN RN (19)

// class App extends React.Component{
//   fruits = () =>{
//     console.warn('mango')
//   }

//   render(){
//     return(
//       <View>
//         <Text style={{ fontSize:30, color: 'red'}}>Class component</Text>
//         <Button title='class' onPress={this.fruits}/>
//         <ClassCom/>
//       </View>
//     )
//   }
// }

//     STATES AND PROPS IN CLASS COMPNENT (20)

// class App extends React.Component{
//    constructor(){
//     super();
//     this.state={
//       name:'ak',
//       age: '20',
//     }
//    }

//    updateName(val){
//     this.setState({name:val})
//    }

//     render(){
//        return(
//          <View>
//            <Text style={{ fontSize:30, color: 'red'}}>{this.state.name}</Text>
//            <TextInput
//           placeholder='Enter name'
//           onChangeText={(text)=>this.updateName(text)}/>
//          <Button title='class'/>
//          <ClassCom name = {this.state.name}/>
//         </View>
//       )
//      }
//    }

//  LIFE CYCLE METHOD (21) life cycle phases[ Mounting, Update, Unmounting ]
//  Hooks in React native =|
//  hooks are new addition in react 16.8  they just let you use,
// state and other react feature withoutwriting a class

//       useEffect hook for life cycle method ( 23 )

// const App =()=>{
//     const [count, setCount]=useState(0)
// return(
//     <View>
//         <Text style={{fontSize:"25"}}>useEffect as component</Text>
//         <Button title='update counter'/>
//     </View>
// )
// }
//     const [ count, setCount] =useState(0);
//     useEffect(()=>{
//         console.warn('hello')
//     },[])
//     return(

//         <View>
//             <Text style={{fontSize:28}}>Life cycle with hook effect {count}</Text>
//             <Button title='Upadte Button' onPress={()=>setCount(count-1)}/>
//         </View>
//     )
// }

//      useEffect as componetDidupdate (24)

// const App =()=>{
//     const [ count, setCount] =useState(0);
//     const [ data, setData] =useState(100);
//     useEffect(()=>{
//         console.warn(count);
//     },[count])
//     return(
//         <View>
//             <Text style={{fontSize:25}}>{data}Hello world</Text>
//             <Button title='Update Counter' onPress={()=>setCount(count+1)}/>
//             <Button title='Update data' onPress={()=>setData(data+1)}/>
//         </View>
//     )
// }

//          SHOW/HIDE COMPONENT and TOGGLE (25)

// const App =()=>{
//     const [show ,setShow]=useState(false)
//     return(
//         <View>
//             <Text style={{fontSize:25}}>Show/Hide component</Text>
//             <Button title='Show compnent' onPress={()=>setShow(true)}/>
//             <Button title='Hide compnent' onPress={()=>setShow(false)}/>

//             <Button title='Toggle compnent' onPress={()=>setShow(!show)}/>
//             {
//                 show ? <User/> :null
//             }
//         </View>
//     )
// }

// const User=()=>{
//     return(
//         <View>
//             <Text style={{fontSize:25, color:'green'}}>User Component</Text>
//         </View>
//     )
// }

//                      useEffect for Unmount Life Cycle (26)

// const App=()=>{
//     const [show ,setShow]=useState(true)
//     return(
//         <View>
//             <Text style={{ fontSize:25}}> UseEffect for umount component</Text>
//             <Button title='Toggle' onPress={()=>setShow(!show)}/>
//             {
//                 show ? <Student/>: null
//             }

//         </View>
//     )
// }

// const Student=()=>{
//     let timer = setInterval(()=>{
//         console.warn('Timer called')
//     }, 2000)
//     useEffect(()=>{
//         // return ()=>{console.warn('useEffect Called on unmount');}
//         return ()=> clearInterval(timer)
//     })
//     return(
//          <View>
//             <Text style={{fontSize:30, color:'red'}}>Student</Text>
//          </View>
//     )
// }

//         Responsive layout with Flex (27)

// const App =()=>{
//     return(
//         <View style={Styles.main}>
//             <View style={Styles.box1}>
//                 <View style={Styles.innerBox1}></View>
//                 <View style={Styles.innerBox2}></View>
//                 <View style={Styles.innerBox3}></View>
//             </View>
//             <View style={Styles.box2}></View>
//             <View style={Styles.box3}></View>
//         </View>
//     )
// }
// const Styles =StyleSheet.create({
//     main:{
//         flex :1,
//     },
//     box1:{
//         flex:2,
//         backgroundColor:"red",
//         flexDirection: 'row'
//     },
//     box2:{
//         flex:1,
//         backgroundColor:"blue"
//     },
//     box3:{
//         flex:1,
//         backgroundColor:"aqua"
//     },
//     innerBox1:{
//         flex: 1,
//         backgroundColor:'yellow',
//         margin: 10,
//     },
//     innerBox2:{
//         flex: 1,
//         backgroundColor:'pink',
//         margin: 10,
//     },
//     innerBox3:{
//         flex: 1,
//         backgroundColor:'black',
//         margin: 10,
//     }
// })

//                 Style with Button In RN (28)

// const App= ()=>{
//     return(
//         <View style={Styles.main}>
//         <TouchableHighlight>
//         <Text style={[Styles.button,Styles.success]}>Success</Text>
//         </TouchableHighlight>
//         <TouchableHighlight>
//         <Text style={[Styles.button,Styles.primary]}>Primary</Text>
//         </TouchableHighlight>
//         <TouchableHighlight>
//         <Text style={[Styles.button,Styles.warning]}>Warning</Text>
//         </TouchableHighlight>
//         <TouchableHighlight>
//         <Text style={[Styles.button,Styles.error]}>Error</Text>
//         </TouchableHighlight>
//         <TouchableHighlight>
//         <Text style={Styles.button}>Button</Text>
//         </TouchableHighlight>
//         </View>
//     )
// }
// const Styles=StyleSheet.create({

//     main:{
//         flex:1
//     },
//     button:{
//         backgroundColor:'#bbb',
//         color: '#fff',
//         fontSize: 24,
//         textAlign: 'center',
//         margin: 20,
//         padding:10,
//         borderRadius: 10,
//         shadowColor:'red',
//         elevation: 25,
//         shadowOpacity: .5
//     },
//     success:{backgroundColor:'green'},
//     primary:{backgroundColor:'blue'},
//     warning:{backgroundColor:'deeppink'},
//     error:{backgroundColor:'gold'},

// })

//        Static & Dynamic Radio Buttons (29/30)

// const App=()=>{
//     const skills= [
//         {
//             id : 1,
//             name: "JAVA"
//         },
//         {
//             id : 2,
//             name: "PHP"
//         },
//         {
//             id : 3,
//             name: "SQL"
//         },
//         {
//             id : 4,
//             name: "NODE"
//         },
//         {
//             id : 5,
//             name: "JS"
//         },

//     ]

//     const [ selectedRadio, setSelectedRadion] = useState(1)
//     return(
//         <View style={Styles.main}>

//         {skills.map((item,index)=>
//         <TouchableOpacity
//         key={index} onPress={()=>setSelectedRadion(item.id)}>
//         <View style={Styles.radioWraper}>
//             <View style={Styles.radio}>
//             {
//                 selectedRadio===item.id ? <View style={Styles.radioBg}></View>:null
//             }
//             </View>
//             <View>
//             <Text style={Styles.txt}>{item.name}</Text>
//             </View>
//         </View>
//     </TouchableOpacity>)
//         }

//         </View>
//     )
// }

// const Styles=StyleSheet.create({
//     main:{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     txt:{
//         color:'red',
//         fontSize: 25,
//     },
//     radio:{
//         height: 40,
//         width: 40,
//         borderColor: 'black',
//         borderWidth: 2,
//         borderRadius: 20,
//         margin: 10,
//     },
//     radioBg:{
//         backgroundColor:'skyblue',
//         height: 28,
//         width: 28,
//         borderRadius: 20,
//         margin: 4,
//     },
//     radioWraper:{
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
// })

//               ActivitY Indicator (31)

// const App=()=>{
//     const [show, setShow]= useState(false)
//     const displayLoader=()=>{
//         setShow(true)

//         // api call in 3 sec
//         setTimeout(()=>{
//             setShow(false)
//         }, 5000)
//     }
//     return(
//         <View style={Styles.main}>
//             <ActivityIndicator size={50} color={'blue'} animating={show}/>
//             {
//                 show? <ActivityIndicator size={50} color={'black'} animating={show}/>:null
//             }
//             <Button onPress={displayLoader} title='Show Loader'/>
//         </View>
//     )
// }

// const Styles = StyleSheet.create({
//     main:{
//         flex: 1,
//         alignItems:'center',
//         justifyContent: 'center',
//     }
// })

//                Modal in React native (32)

// const App = () => {
//     const [showModal, setShowModal ]= useState(false)
//   return (
//     <View style={Styles.main}>
//       <Modal transparent={true}
//       visible={showModal}
//       animationType='slide'>
//         <View style={Styles.centerView}>
//           <View style={Styles.modalView}>
//             <Text style={Styles.modalText}>Modal In React-Native</Text>
//             <Button title="Close Modal" onPress={()=>setShowModal(false)}  />
//           </View>
//         </View>
//       </Modal>
//       <View style={Styles.btnView}>
//         <Button onPress={()=>setShowModal(true)} title="Open Modal" />
//       </View>
//     </View>
//   );
// };

// const Styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
//   btnView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   centerView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 25,
//   },
//   modalView: {
//     backgroundColor: '#fff',
//     padding: 30,
//     borderRadius: 20,
//     shadowColor: 'black',
//     elevation: 5,
//   },
//   modalText: {
//     fontSize: 25,
//     marginBottom: 20,
//   },
// });

//                   Pressable In React-Native(33)

// const App=()=>{
//     return(
//     <View style={Styles.main}>
//         <Pressable
//         // onPress={()=>console.warn('Normal on press')}
//         // onLongPress={()=>{console.warn('Long Press')}}
//         onPressIn={()=>{console.warn('press in')}}
//         onPressOut={()=>{console.warn('press out')}}>
//             <Text style={Styles.pressableBtn}>PressAble</Text>
//         </Pressable>
//     </View>
//     )
// }

// const Styles = StyleSheet.create({
//       main: {
//         flex: 1,
//         justifyContent: 'center',
//       },
//       pressableBtn:{
//         backgroundColor: 'skyblue',
//         color:'#fff',
//         padding:10,
//         margin: 10,
//         borderRadius: 10,
//         fontSize:25,
//         textAlign: 'center',
//         shadowColor: '#000',
//         elevation:5

//       }
//     })

//                          Status Bar (34)

//     const App=()=>{
//       const[hide, setHide]=useState(false);
//       const [barStyle, setBarStyle]=useState('default')
//     return(
//       <View style={Styles.container}>
//         <StatusBar
//         backgroundColor='red'
//         barStyle={barStyle}
//         hidden={hide}
//         />
//         <Button title='toggle' onPress={()=>setHide(!hide)}/>
//         <Button title='toggle Status bar' onPress={()=>setBarStyle('dark-content')}/>
//       </View>
//     )
// }

// const Styles = StyleSheet.create({
//       container:{
//         flex:1,
//         justifyContent:'center',
//       }
//     })

//          Platform (35)

// const App=()=>{
//     return(
//       <View>
//         <Text style={{fontSize:25}}>Platform : {Platform.OS} </Text>
//         {
//         Platform.OS=="android"?
//         <View style={{backgroundColor:'green', height:100,width:100}}></View>
//         :
//         <View style={{backgroundColor:'red', height:100,width:100}}></View>
//         }
//         <Text style={Styles.text}>Hello</Text>
//         <Text>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
//       </View>
//     )}

// const Styles = StyleSheet.create({
//       text:{
//         color:Platform.OS=="andriod"?"orange":'blue',
//         fontSize:25
//       }
//     })

//               Install NPM Package "WebView"iN RN {36}

// const App=()=>{
//   return(
//     <WebView source={{uri:'https://reactnative.dev/docs/props'}}/>
//   )
// }

//                custom Modal box {37}

// const App=()=>{
//   const [show, setShow]=useState(false)
//   return(
//     <View style={Styles.container}>
//       {show?
//       <View style={Styles.modal}>
//         <View style={Styles.body}>
//           <Text style={{fontSize:20,textAlign:'center'}}> Custom Modal</Text>
//           <Button title='Close Modal' onPress={()=>setShow(false)} />
//         </View>
//       </View>
//       :null
//       }
//       <Button title='Open Modal' onPress={()=>setShow(true)}/>
//     </View>
//   )
// }
//  const Styles = StyleSheet.create({
//         container:{
//           flex:1,
//           justifyContent:'flex-end',
//         },
//         modal:{
//           flex:1,
//           backgroundColor: 'rgba(50,50,50,0.5)',
//           justifyContent:'center',
//           alignItems:'center'
//         },
//         body:{
//           backgroundColor:'#fff',
//           height:200,
//           width:300,
//           padding:30,
//           justifyContent:'center',
//           borderRadius: 10
//         }
//       })

//                            Navigation With RN (38)
//                         Stack Navigation(39) + Style in stack  (40) + Buttons and components (41)
//                          Pass data bTw screen (43)

// const Stack = createNativeStackNavigator();
// const App = () => {
//   const btnAction =()=>{
//     console.warn('btn Pressed')
//   } 
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           // title:"User Login",
//           headerStyle: {
//             backgroundColor: 'blue',
//           },
//           headerTintColor: 'yellow',
//           headerTitleStyle: {
//             fontSize: 25,
//           },
//         }}>
//         <Stack.Screen name="Login" component={Login} 
//         options={{
//           headerTitle:()=><Button title='Left' onPress={btnAction}/>,
//           headerRight:()=><Header/>,
//         }}/>
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// const Header =()=>{
//   return(
//     <Button title='Btn'/>
//   )
// }

//                Tab Navigation + Top Tab Navigation(44)


// const Tab = createMaterialTopTabNavigator();
// const App=()=>{
//   return(
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name='Login' component={LogIn}/>
//         <Tab.Screen name='SignUp' component={SignUp}/>

//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// const LogIn=()=>{
//   return(
//     <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
//       <Text style={{fontSize:25}}>Login</Text>
//     </View>
//   )
// }

// const SignUp=()=>{
//   return(
//     <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
//       <Text style={{fontSize:25}}>SignUp</Text>
//     </View>
//   )
// }


//                              API Call in RN (46)

// const App=()=>{
//   const [data,setData]=useState(undefined)

//   getAPIData= async ()=>{
//     // Api call
//     const url ='https://jsonplaceholder.typicode.com/posts/1';
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result)
//   }
//   useEffect(()=>{
//     getAPIData();
//   },[])
//   return(
//     <View>
//       <Text style={{fontSize:25}}>Api Call</Text>
//       {
//         data ? <View>
//           <Text style={{fontSize:25}}>{data.id}</Text>
//           <Text style={{fontSize:25}}>{data.title}</Text>
//           <Text style={{fontSize:25}}>{data.body}</Text>
//           <Text style={{fontSize:25}}>{data.userId}</Text>


//         </View>:null
//       }
//     </View>
//   )
// };

//              list With API Data (47)

// const App =()=>{
// const [data, setData]=useState([]);
//   const getAPIData = async ()=>{
//     const url ="https://jsonplaceholder.typicode.com/posts";
//     let result= await fetch(url);
//     result= await result.json();
//     setData(result);

//   }
//   useEffect(()=>{
//   getAPIData()
//   },[])
//   return( 
//     <ScrollView>
//       <Text style={{fontSize:25}}>List with API data</Text>
//       {
//         data.length ? 
//         data.map((item)=>
//         <View style={{padding:10, borderBottomColor:'deeppink',borderBottomWidth:1}}>
//         <Text style={{fontSize:20,backgroundColor:"#ddd"}}> ID : {item.id}</Text>
//         <Text style={{fontSize:20,backgroundColor:"red"}}> Title : {item.title}</Text>
//         <Text style={{fontSize:20,backgroundColor:"green"}}> Body : {item.body}</Text>
//         </View>
//         )
//         :
//         null
//       }
//     </ScrollView>
//   )
// }


//         Flat List with Api(48)

// const App = () =>{
//  const [data, setDate] =useState([]);
//   const getAPIData= async ()=>{
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     let result = await fetch(url);
//     result = result.json();
//     setDate(result);
//   }

//   useEffect(()=>{
//    getAPIData() 
//   })
//   return(
//     <View>
//       <Text style={{fontSize:30}}>Flatlist with api data</Text>
//       {
//         data.length ?
//         <FlatList 
//         data={data}
//         renderItem={({item}) => <View>
//           <Text style={{fontSize:20}}>{item.id}</Text>
//           <Text style={{fontSize:18}}>{item.title}</Text>
//           <Text style={{fontSize:18}}>{item.body}</Text>
//         </View> }
//         />
//         :null
//       }
//     </View>
//   )
// }

//                   Make API wITH JSON SERVER(49) +(50)
//                    
//                       to run json server json-server --watch (filename)
//                       install json server and creating api's with postman and using 4 methods of put, get, delet, post


//                           JSON server API with react-native(51)
//                        ipconfig== json-server --host0.0.0.0 db.json===http://10.0.2.2:3000/users
// const App=()=>{
//   const [data, setData] =useState([])
//   const getAPIData = async ()=>{
//     const url = "http://10.0.2.2:3000/users"
//     let result = await fetch(url)
//     result = await result.json()
//     setData(result)
//   }
//   useEffect(()=>{
//     getAPIData()
//   },[])
//   return(
//     <View>
//       <Text style={{fontSize:25}}> json-server with api  </Text>
//       {

//         data.length ?
//         data.map((item) => 
//         <View style={{borderColor:'green', borderWidth: 1}}>
//             <Text style={{fontSize:25}}>{item.id} </Text>
//             <Text style={{fontSize:25}}>{item.name} </Text>
//             <Text style={{fontSize:25}}>{item.age} </Text>
//             <Text style={{fontSize:25}}>{item.email} </Text>
//         </View>)
//         :null
//       }
//     </View>
//   )
// }



//                      Simple posr api with react-native(53)

//  const App =()=>{
//   const data = {
//     name:'sam',
//     age: 34,
//     email: 'sam@test'
//   }
//   const saveAPIData = async ()=>{
//     const url = "http://10.0.2.2:3000/users";
//     let result = await fetch(url,{
//       method:'POST',
//       headers:{"Content-Type" : "application/json"},
//       body: JSON.stringify(data)
//     })
//     result = await result.json();
//     console.warn(result);


//   }
//   return(
//     <View>
//       <Text style={{fontSize:25,}}>Post Api Call</Text>
//       <Button title='Save Data' onPress={saveAPIData}/>
//     </View>
//   )
//  }

//                          Simple Form Validation(54)

// const App =()=>{
//       const [name, setName]= useState('');
//       const [email, setEmail]= useState('');
//       const [age, setAge]= useState('0');
      
//       const [ nameError, setNameError] = useState(false)
//       const [ emailError, setEmailError] = useState(false)
//       const [ ageError, setAgeError] = useState(false)
      
//       const saveData = async() =>{
        
//         if(!name){
//           setNameError(true)
//         } else{
//           setNameError(false)
//         }

//         if(!email){
//           setEmailError(true)
//         } else{
//           setEmailError(false)
//         }

//         if(!age){
//           setAgeError(true)
//         } else{
//           setAgeError(false)
//         }
        

//         if(!name || !age || !email){
//           return false
//         }

//         console.warn("next")
//         const saveAPIData = async ()=>{
//         const url = "http://10.0.2.2:3000/users";
//         let result = await fetch(url,{
//         method:'POST',
//         headers:{"Content-Type" : "application/json"},
//         body: JSON.stringify(name,email,age)
//         });
//         result = await result.json();
//         if(result){
//           console.warn("data added");
//         }
//       }
//     }


//       return(
//         <View>
//           <Text style={{fontSize:30}}> Post API with Input Field data</Text>
//         <TextInput
//           style={Styles.textInput}
//           placeholder='Enter User Name'
//           onChangeText={(text)=>setName(text)}
//           value={name}
//           />
//         { nameError ? <Text style={Styles.errorText}> Please Enter Valid Name</Text> :null}
  
//         <TextInput
//           style={Styles.textInput}
//           placeholder='Enter User Email'
//           onChangeText={(text)=>setEmail(text)}
//           value={email}
//           />
//           { emailError ? <Text style={Styles.errorText}> Please Enter Valid Email </Text> :null}

//         <TextInput
//           style={Styles.textInput}
//           placeholder='Enter User Age'
//           onChangeText={(text)=>setAge(text)}
//           value={age}
//           />
//           { ageError ? <Text style={Styles.errorText}> Please Enter Valid Age</Text> :null}
          
//           <Button title='Save Data' onPress={saveData} />
//         </View>
//       )
//   }
  
//   const Styles=StyleSheet.create({
//     textInput:{
//       fontSize: 20,
//       borderWidth: 1,
//       borderColor: 'skyblue',
//       margin: 20,

//       borderRadius: 5,
//       marginBottom: 5
//     },
//     errorText:{
//       color: 'red',
//       marginLeft: 20
//     }

//     })


//                  Make List from API(55)

const App=()=>{
  const [data,setData]=useState([])
  const getAPIData = async ()=>{
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json()
    if(result){

    }
  }
  return(
    <View>
      <Text>Hello world hello world</Text>
    </View>
  )
}

  const Styles=StyleSheet.create({
    textInput:{
      fontSize: 20,
      borderWidth: 1,
      borderColor: 'skyblue',
      margin: 20,
      borderRadius: 5,
      marginBottom: 5
    },
    errorText:{
      color: 'red',
      marginLeft: 20
    }

    })


 export default App;
