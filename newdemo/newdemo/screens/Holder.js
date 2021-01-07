import React from 'react';
import {View,Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import just from './just';
import Random from './Random';
import Newdraw from './Newdraw';
import StartPage from './StartPage';
const Stack = createStackNavigator();
function Holder(){
    
    return(
  <Stack.Navigator>
        <Stack.Screen 
       name="StartPage" 
       component={StartPage} 
       options={{ title: 'api call' }}
      />
   <Stack.Screen 
        name="Random" 
        component={Random} 
        options={{ title: 'Random', headerStyle: {
            backgroundColor: '#f4511e',
          }, }}
      />
      <Stack.Screen 
       name="just" 
       component={just} 
       options={{ title: 'Registeration', headerStyle: {
            backgroundColor: '#f4511e',
          }, }}
      />
       <Stack.Screen 
       name="Newdraw" 
       component={Newdraw} 
       options={{ title: 'Newdraw', headerStyle: {
            backgroundColor: '#f4511e',
          }, }}
      />
     
  </Stack.Navigator>
   



    );
}
export default Holder;