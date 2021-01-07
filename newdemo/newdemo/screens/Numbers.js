import React,{useState,useEffect} from 'react';
import {Button, StyleSheet,Text,View,TouchableOpacity,TextInput, Alert, ActivityIndicator } from 'react-native';

 

function Numbers(){
    const [numb,setNumb]= useState([]);
    const[texts,setTexts]=useState([]);
    const [bol,setBol]=useState(false);


function getnumber(num){
    fetch('http://numbersapi.com/'+num+'/math/?json')
    .then((response)=>response.json())
    .then((responsejson)=>{
        console.log("api",responsejson);
        setNumb(responsejson.text);
    })
}
function getmew(num){
      setBol(true)
  setTexts(num);
  getnumber(num);
  if(bol)
  {
      setBol(false)  
  }
 
    
}
/* useEffect(()=>{
    getnumber();
},[]); */


    return(
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

   <Text style={{fontSize:20,color:"#55ff",margin:20,}}>Number Facts</Text>
   <View style={{margin:20,padding:10}}>

<Text style={{fontSize:20,color:"#f66444"}}>{numb}</Text>
</View>
<TextInput placeholder="enter the number to get facts" onChangeText={(text)=>setTexts(text)} style={{width:'75%',height:45,borderRadius:10,borderColor:"#11aaaa",borderWidth:2}}/>

<ActivityIndicator size="small" color="#0000ff" animating={bol} />
<TouchableOpacity  onPress={()=>{getmew(texts)}} style={{backgroundColor:"#000ddd",margin:10,padding:10,borderRadius:10}}>
<Text style={{color:"#fff",fontFamily:'DancingScript-VariableFont_wght'}}>click here</Text>
</TouchableOpacity>
  

</View>

    );
}
export default Numbers;

