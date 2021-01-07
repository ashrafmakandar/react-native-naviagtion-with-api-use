import React,{useState,useEffect} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,SafeAreaView} from  'react-native';

export default function Logan({navigation}) {
const[email,setEmail]=useState([]);
const[pass,setPass]=useState([]);

function getvalidation(){
    var names=email;
    var passs= pass;
   fetch('https://5ff3f47616cf4f0017c1f8a5.mockapi.io/api/v1/users/1')
   .then((response)=>response.json())
   .then((responsejson)=>{
       
    alert(names+""+passs)
    navigation.navigate('Greeting',{
        name:names,
        email:passs 
     });
       if(responsejson.name==names&&responsejson.email==passs)
       {
           alert("login succesful")
         
       }
       else{
           alert("sorry not authorised user");
       }
   })
}


    return (
        <SafeAreaView style={styles.container}>
        <Text style={{textAlign:"center",fontSize:25,color:"#800008"}}>Login App</Text>

        <TextInput placeholder="enter email" style={styles.input} onChangeText={(text)=>setEmail(text)} />
        <TextInput placeholder="enter password" style={styles.input} secureTextEntry onChangeText={(text)=>setPass(text)}/>
        <TouchableOpacity style={styles.btn} onPress={()=>{getvalidation()}}>
            <Text style={{textAlign:"center",fontSize:20,color:"#fff"}}>LOGIN</Text>
        </TouchableOpacity>

        </SafeAreaView>
    );



}
const styles= StyleSheet.create({
container:{
    flex:1,

    marginTop:100,padding:10,marginLeft:10,marginRight:10,marginBottom:10,

},
input:{
    borderWidth:2,
    borderRadius:10,
  
    marginTop:15,padding:10,marginLeft:10,marginRight:10,marginBottom:10,
    color:"#0ddfff"

},btn:{
    backgroundColor:"#ff8888",
    margin:10,padding:10,
    textAlign:"center",
    borderRadius:15,borderWidth:1,borderColor:"#d2aadd",
}


});