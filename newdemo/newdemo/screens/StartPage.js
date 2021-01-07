import React,{useState,useEffect} from 'react';
import {

  StyleSheet,

  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,Linking
} from 'react-native'; 
function StartPage({navigation}){


    const [name,setName]= useState([]);

    function getdata(){
    
    fetch('http://universities.hipolabs.com/search?country=United+Kingdom')
    .then((response)=>response.json())
    .then((responsejson)=>{
    console.log("api",responsejson);
     setName(responsejson)
    
    }
    
    
    
    
    
    )
    .catch((error) => console.error(error));
    
    }
    function getitemclick(names){
  navigation.navigate('Random',{university:names});

     
    }
    useEffect(()=> {
      getdata();
    },[])
    
    
      return(
    
    <View style={styles.continer}>
    
    
    <FlatList data= {name} renderItem={({item})=>
    <View>
    <TouchableOpacity onPress={()=>{getitemclick(item.name)}}>
      <Text style={styles.newtext}>{item.name}</Text>
      <Text style={styles.newtext}>{item.country}</Text>
  
    </TouchableOpacity>
    <TouchableOpacity>
    <Text style={styles.newtext} onpress={()=>{
       Linking.openURL('https://aboutreact.com');;
    }}>{item.web_pages}</Text>
    </TouchableOpacity>
    
    </View>
    
    } keyExtractor={(item)=>item.name}/>
    
    
    </View>
    
      );
    
    }
    
    
    const styles= StyleSheet.create({
      continer:{
        flex:1,
        backgroundColor:"#eeddff"
      },newtext:{
    
    fontSize:20,color:"#ee9999",marginBottom:10
    
      }
    
    
    
    });

    export default StartPage;




