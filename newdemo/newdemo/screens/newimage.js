import React,{useState,useEffect} from 'react';
import {View,Text, Image,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function newimage({navigation}){

    const [img,setImg]= useState([]);

    function movitem(){
        navigation.navigate('Comp');
    }

function getimg(){
fetch('https://picsum.photos/v2/list')
.then((response)=>response.json())
.then((responsejosn)=>{
    setImg(responsejosn);
    console.log("jsooowqoidoi",responsejosn);
});


}

useEffect(()=>{
    getimg();
},[]);


    return(
<View>
<Text></Text>
<FlatList data={img}
keyExtractor={(item)=>item.id}
renderItem={({item})=>
  <View>
<TouchableOpacity onPress={()=>{movitem()}}>

<Text style={{margin:10}}>{item.author}</Text>
       <Image source={{uri:item.download_url}} style={{height:200,width:500,margin:10}}/>
</TouchableOpacity>
  </View>
}


/>

</View>

    );
}
export default newimage;