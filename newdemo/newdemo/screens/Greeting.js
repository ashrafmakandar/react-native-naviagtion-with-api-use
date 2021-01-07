/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {Text} from 'react-native-elements';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-elements';
export default function Greeting({route, navigation}) {
  const {name} = route.params;
  const {email} = route.params;
  const [newd, setNewd] = useState([]);
  function fetchalldata() {
    fetch('https://5ff3f47616cf4f0017c1f8a5.mockapi.io/api/v1/users')
      .then((response) => response.json())
      .then((responsejson) => {
        setNewd(responsejson);
      });
  }
  useEffect(() => {
    fetchalldata();
  }, []);
  function deleteitem(id) {
    Alert.alert(
      //title
      'Hello user',
      //body
      'How are you liking this app?',
      [
        {
          text: 'Delete',
          onPress: () =>
            fetch(
              'https://5ff3f47616cf4f0017c1f8a5.mockapi.io/api/v1/users/' + id,
              {method: 'DELETE'},
            )
              .then((res) => res.json())
              .then((responsejson) => {
                console.log('delete', responsejson);
                fetchalldata();
              }),
        },
        {
          text: 'UPDATE',
          onPress: () =>
            fetch(
              'https://5ff3f47616cf4f0017c1f8a5.mockapi.io/api/v1/users/' + id,
              {
                method: 'PUT',
                body: JSON.stringify({
                  id: 50,
                  name: 'name 50',
                  email: 'email 50',
                }),
              },
            )
              .then((res) => res.json())
              .then((responsejson) => {
                console.log('put', responsejson);
                fetchalldata();
              }),
        },
        {
          text: 'Add',
          onPress: () =>
            fetch('https://5ff3f47616cf4f0017c1f8a5.mockapi.io/api/v1/users/', {
              method: 'POST',
              body: JSON.stringify({id: 100, name: 'ashra', email: 'ashraf'}),
            })
              .then((res) => res.json())
              .then((responsejson) => {
                console.log('post', responsejson);
                fetchalldata();
              }),
        },
      ],
      {cancelable: true},
      //clicking out side of alert will not cancel
    );
    /* fetch('https://5ff3f47616cf4f0017c1f8a5.mockapi.io/api/v1/users/'+id,{method:'DELETE'})
 .then((res)=>res.json())
 .then((resjon)=>{
     console.log("apis",resjon);
 })
 fetchalldata(); */
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fffffff8'}}>
      <Text h4 style={{color: '#559999', margin: 10}}>
        welcome {name} and your email is {email}{' '}
      </Text>
      <FlatList
        data={newd}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => deleteitem(item.id)}>
            <Card>
              <Card.Title style={{color: '#ffa888', margin: 1, padding: 1}} h6>
                {item.name}
              </Card.Title>
            </Card>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
