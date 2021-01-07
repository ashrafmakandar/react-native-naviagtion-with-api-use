import React, {useState, useEffect} from 'react';
import { View, FlatList,ActivityIndicator} from 'react-native';
import { Image,Header,Text } from 'react-native-elements';
import { Button } from 'react-native-paper';
function Breaking() {
  const [breakin, setBreakin] = useState([]);

  function getalldata() {
    fetch('https://breakingbadapi.com/api/characters')
      .then((response) => response.json())
      .then((responsejosn) => {
        setBreakin(responsejosn);
      });
  }

  useEffect(() => {
    getalldata();
  }, []);

  return (
    <View>
    <Header

  centerComponent={{ text: 'Breaking Bad ', style: { color: '#fff',fontSize:20,fontStyle:"Bold" } }}

/>

      <FlatList
 
        data={breakin}
        keyExtractor={(item)=>item.char_id}
        renderItem={({item}) => (
          <View style={{borderRadius:1,borderWidth:1,borderColor:"#fff",margin:10}}>
         
            <Image
         PlaceholderContent={<ActivityIndicator />}
        style={{ width: 200, height: 300 ,padding:10,}}
        source={{
            uri: item.img,
    
        }}
    
    />
            <Text  h1 style={{fontSize:25,color:"#000888",margin:5,padding:10,}}>{item.name}</Text>
            <Text h4 style={{fontSize:16,color:"#000888",marginStart:5,padding:10,}}>{item.nickname}</Text>
            <Text h7 style={{fontSize:12,color:"#000888",marginStart:5,padding:10,}}>{item.occupation}</Text>
          </View>
        )}
      />
    </View>
  );
}
export default Breaking;
