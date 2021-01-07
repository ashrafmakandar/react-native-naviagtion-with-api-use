import React from 'react';
import {View,Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logan from './Logan';
import Greeting from './Greeting';
const Stack = createStackNavigator();
export default function Newholder() {
    
        return(
            <Stack.Navigator>
            
                  <Stack.Screen 
                 name="Logan" 
                 component={Logan}
                />
                 <Stack.Screen 
                  name="Greeting" 
                  component={Greeting} 
                
                />
            
            
               
            </Stack.Navigator>
       
    )
}
