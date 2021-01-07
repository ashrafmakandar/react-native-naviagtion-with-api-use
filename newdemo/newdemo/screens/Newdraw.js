import React from 'react';
import {View,Text} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Random from './Random';
import just from './just';
import Comp from './Comp';
import StartPage from './StartPage';
import newimage from './newimage';
const Drawer = createDrawerNavigator();
function Newdraw(){

    return (
       
          <Drawer.Navigator initialRouteName="Random">
            <Drawer.Screen name="StartPage" component={StartPage} />
            <Drawer.Screen name="Comp" component={Comp} />
            <Drawer.Screen name="newimage" component={newimage}/>
          </Drawer.Navigator>
      

);

}
export default Newdraw;