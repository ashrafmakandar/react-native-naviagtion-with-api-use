import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
function Random({route,navigation}) {
  const [randomtext, setRandomText] = useState([]);
  const {university}= route.params
  function getrandom() {
    fetch('http://numbersapi.com/random/year?json')
      .then((response) => response.json())
      .then((responsejosn) => {
        setRandomText(responsejosn.text);
      });
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 25,
          margin: 10,
          borderRadius: 5,
          padding: 20,
          backgroundColor: '#fff',
          width: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center',
        }}>
        RANDOM FACTS{' '}
      </Text>
      <View style={{backgroundColor: '#fff', margin: 10, borderRadius: 15}}>
        <Text style={{fontSize: 25, margin: 20}}>{randomtext} </Text>
        <Text style={{fontSize: 25, margin: 20}}>{university}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          getrandom();
        }}
        style={{
          fontSize: 25,
          margin: 20,
          backgroundColor: '#0f0f',
          borderRadius: 15,
        }}>
        <Text style={{color: '#fff', fontSize: 20, margin: 5, padding: 5}}>
          Click For Random Fact
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('just', {nameis: randomtext})}>
        <Text>click for next page</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Random;
