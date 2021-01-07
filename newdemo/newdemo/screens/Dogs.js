import React,{useState,useEffect} from 'react';
import {View,FlatList,ActivityIndicator,Alert} from 'react-native';
import {Image,Text} from 'react-native-elements';

export default function Dogs() {
const [dog,setDog]= useState([]);

function fetchdog(){

fetch('https://dog.ceo/api/breeds/list/all')
.then((response)=>response.json())
.then((responsejson)=>{
    setDog(responsejson.message);
    console.log("bs",responsejson.message);
})

;

}


function getbreeed(affenpinscher){

fetch('https://dog.ceo/api/breed/'+affenpinscher+'/images')
.then((response)=>response.json())
.then((responsejson)=>{
   console.log("iqwiidbu",responsejson.message);
})


}
function getdogs(dog)
{
    alert('affenpinscher');
    getbreeed('affenpinscher');
    
}
function getdogs2(dog)
{
    Alert.alert(
        //title
        'Hello user',
        //body
        'How are you liking this app?',
        [
          {
            text: 'Yes',
            onPress: () => console.log('Yes Pressed')
          },
          {
            text: 'No',
            onPress: () => console.log('No Pressed'), style: 'cancel'
          },
          {
            text: 'May Be',
            onPress: () => console.log('No Pressed'), style: 'cancel'
          },
          
        ],
        {cancelable: false},
        //clicking out side of alert will not cancel
      );
    getbreeed('akita');
    
}

useEffect(()=>{
fetchdog();

},[]);


    return (
        <View style={{marginTop:25}}>
      <Text h3 onPress={()=>getdogs(dog)}>{dog.affenpinscher}affenpinscher</Text>
      <Text h3>{dog.australian}</Text>
      <Text h3 style={{color:"#808888"}}  onPress={()=>getdogs2(dog)}>{dog.akita}akita</Text>

        </View>
    )
}
