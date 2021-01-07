import React,{useState,useEffect} from 'react'
import { SafeAreaView,FlatList, View } from 'react-native';
import {Text,Card} from 'react-native-elements';
export default function Stocks() {
  const [wards,setWards]= useState([]);


  function fetchwards(){
fetch('https://raw.githubusercontent.com/openbangalore/bangalore/master/bangalore/GIS/BBMP_Wards_2011_region.json')
.then((res)=>res.json())
.then((responsejosn)=>{
    console.log("apiii",responsejosn.features);
    setWards(responsejosn.features);
});


  }

  useEffect(()=>{
      fetchwards();

  },[]);
    return (
       <SafeAreaView>
       <View style={{justifyContent:"center",alignContent:"center",alignItems:"center",marginTop:30,marginBottom:5,marginLeft:15,marginRight:15,padding:5,borderWidth:2,borderColor:"#77aadd"}}>
<Text h4 h4Style={{color:"#000"}}>List of Wards </Text>

       </View>
       <FlatList data={wards} keyExtractor={(item)=>item.properties.WARD_NO} renderItem={({item})=>
       <View>
       <Card style={{margin:5,padding:5}}>
       <Text style={{color:"#8833dd"}}> WARD NAME : {item.properties.WARD_NAME}</Text>
           <Text  style={{color:"#8833dd"}} >ZONE : {item.properties.ZONE}</Text>
           <Text  style={{color:"#8833dd"}} >WARD NO : {item.properties.WARD_NO}</Text>
       </Card>
           
       </View>
       
       
       }/>

       </SafeAreaView>
    )
}
