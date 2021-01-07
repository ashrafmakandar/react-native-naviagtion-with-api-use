import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Picker,
} from 'react-native';
import Comp from './Comp.js';

function just({route, navigation}) {
  const [na, setNa] = useState([]);
  const [pa, setPa] = useState([]);
  const [names, setNames] = useState([]);
  const [user, setUser] = useState([]);
  const [todo, setTodo] = useState(['']);
  const [lis, setLis] = useState([]);
  const {nameis} = route.params;

  function getvalue() {
    alert(na + '\n' + pa);
  }
  function updateUser(nam) {
    setUser(nam);
    alert(nam);
  }
  function getrazorpay() {}

  function addtodos() {
    var ad = todo;
    setLis([...lis, ad]);
  }

  function getitemtouch(item)
  {
      alert(item);
      lis.filter(item=>item.id!==item);

  }
  return (
    <View style={styles.conatiner}>
      <TextInput
        placeholder="enter email"
        onChangeText={(text) => setNa(text)}
      />
      <TextInput
        placeholder="enter password"
        onChangeText={(text) => setPa(text)}
      />
      <TouchableOpacity
        onPress={() => {
          getvalue();
        }}>
        <Text>click</Text>
      </TouchableOpacity>

      <Text>{nameis}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Newdraw');
        }}>
        <Text>click for drawer page</Text>
      </TouchableOpacity>
      <Picker
        selectedValue={user}
        onValueChange={(value) => {
          updateUser(value);
        }}>
        <Picker.Item label="Steve" value="steve" />
        <Picker.Item label="Ellen" value="ellen" />
        <Picker.Item label="Maria" value="maria" />
      </Picker>
      <TouchableOpacity
        onpress={() => {
          getrazorpay;
        }}>
        <Text>click for razor pay</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="enter some text"
        placeholderTextColor="#55F"
        onChangeText={(text) => setTodo(text)}
        style={{
          padding: 10,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 2,
          backgroundColor: '#f88888',
          borderWidth: 1,
          margin: 5,
          padding: 5,
          width: 150,
          color: '#fff',
          textDecorationColor: '#fff',
        }}
        color="#fff"
      />
      <TouchableOpacity
        onPress={() => {
          addtodos();
        }}
        style={{
          backgroundColor: '#a3d3f3',
          borderWidth: 1,
          margin: 5,
          padding: 5,
          width: 150,
          borderRadius: 5,
          padding: 10,
        }}>
        <Text>add</Text>
      </TouchableOpacity>
      <FlatList
        data={lis}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              backgroundColor: '#2f9ad7',
              margin: 10,
              borderWidth: 1,
              padding: 20,
            }}>
            <TouchableOpacity onPress={()=>getitemtouch(item)}>
            <Text style={{color: '#fff', textAlign: 'center'}}>{item}</Text>
            </TouchableOpacity>
      
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
});
export default just;
