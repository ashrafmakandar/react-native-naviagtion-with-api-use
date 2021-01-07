import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';



function Comp({navigation}){


    function whoaru(){
navigation.navigate('Random');
    }
    return(
        <View>
<TouchableOpacity onPress   = {()=>{whoaru()}}>

    <Text style             = {{fontFamily:'DancingScript-VariableFont_wght'}}>forgot password?click here</Text>

</TouchableOpacity>

        </View>
    );
}
export default Comp;
