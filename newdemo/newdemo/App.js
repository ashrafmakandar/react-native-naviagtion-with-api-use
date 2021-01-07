

import React,{useState,useEffect} from 'react';
import {

  StyleSheet,

  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import Numbers from './screens/Numbers.js';
import Random from './screens/Random.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Holder from './screens/Holder.js';
import Breaking from './screens/Breaking.js';
import Dogs from './screens/Dogs.js';
import Logan from './screens/Logan.js';
import Newholder from './screens/Newholder.js';
import Stocks from './screens/Stocks.js';
const Stack                 = createStackNavigator();
const Tab                   = createBottomTabNavigator();
function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator  activeColor="#f0edf6"
  inactiveColor="#3e2465"

  barStyle={{ backgroundColor: '#694fad',}}>
       
        <Tab.Screen name    = "Number" component={Numbers} />
        <Tab.Screen name    = "Data" component={Holder} />
        <Tab.Screen name    = "breaking bad" component={Breaking} />
        <Tab.Screen name    = "Doglist" component={Dogs} />
        <Tab.Screen name    = "Newholder" component={Newholder} />
        <Tab.Screen name    = "Stocks" component={Stocks} />
      </Tab.Navigator>
    
    </NavigationContainer> 
 
   
    
  );
 

}


export default App;
