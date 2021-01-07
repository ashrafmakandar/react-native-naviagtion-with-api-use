import React, {useState, useEffect,useRef} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Slider from '@react-native-community/slider';
import Checkbox from '@react-native-form/checkbox';
import Toast, {DURATION} from 'react-native-easy-toast';


import Snackbar, {showSnackBar} from '@prince8verma/react-native-snackbar';
function profiles() {

  const [pro, setPro]                   = useState([]);
  const [value,setValue]                = useState([]);
  const [check,setCheck]                = useState([]);
  const [rad,setRad]                    = useState([]);
  function fetchdata() {
    fetch('https://randomuser.me/api/?seed=1&page=1&results=20')
      .then((response) => response.json())
      .then((responsejosn) => {
        console.log('api call', responsejosn.results);
        setPro(responsejosn.results);
      });
  }
  useEffect(() => {
    fetchdata();
  }, []);
  function getitemeadded(name)
  {
      alert(name);
  }
  function getitemclcik(name)
  {
      alert(name);
  }
  function gettext(text)
  {
      //alert(text);
      setValue(text);
  }

function getChecked (value) {
    console.log(value);
    setRad(value);
  }
  function showsnack(){
    showSnackBar({
        message: "you are recieving a message",
        position: 'top',
        confirmText: 'OK',
        backgroundColor: "#5555ff",
        duration: 5000,
     
        onConfirm: () => {
           // alert('hi');
          
        }
    });
  }
  return (
    <View>
     <Text>{value}</Text>
 
    
<TouchableOpacity onPress               = {()=>{showsnack();}}>
<Text>show snack</Text>
</TouchableOpacity>
<Text>{rad}</Text>
     <Checkbox
    label                               = "Red Rising"
    positionLabel                       = "right"
    marginTop                           = {10}
    nativeComponent                     = {false}
    color                               = "#457afb"
    disabled                            = {false}
    checked                             = {false}
    labelStyle                          = {{color:"#ffaaff"}}
    containerStyle                      = {{}}
    checkboxStyle                       = {{}}
    switchStyle                         = {{}}
    onValueChange                       = {item => {getcheckvalue(item);}}
    value                               = {13}
  />
      <Slider
    style                               = {{width: 400, height: 40, color:"#ddaadd"}}
    minimumValue                        = {0}
    step                                = {10}
    maximumValue                        = {100}
    minimumTrackTintColor               = "#FFFFFF"
    maximumTrackTintColor               = "#000000"
    onSlidingComplete                   = {(text)=>{gettext(text);}}
  />
      <FlatList
        data                            = {pro}
        keyExtractor                    = {(item)=>item.name.first}
        renderItem                      = {({item}) => (
          <View >
          <TouchableOpacity  onPress    = {()=>{getitemclcik(item.name.first);}} >
          <Text>{item.name.first}</Text>
          </TouchableOpacity>
            <Text>{item.name.last}</Text>
            <Image
              source                    = {{uri: item.picture.medium}}
              style                     = {{width: 100, height: 100}}
            />
          </View>
        )}
      />
      <Snackbar id={"App"}/>
    </View>
  );
}
export default profiles;
