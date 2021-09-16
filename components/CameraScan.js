import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, RefreshControlBase} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
const axios = require("axios");
import api from "../utils/api"
import findCal from "../utils/findCal";


export default function CameraScan( {navigation}){

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned');
  
  const askForCameraPermission = () => {
      (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == 'granted')
      })()
  }
      
  //Request camera permission
  useEffect(() => {
      askForCameraPermission();
  }, [])
  
  //when barcode gets scanned 
  const BarCodeScanned = ({ type, data}) => {
      setScanned(true);
      setText(data.substring(1));
      console.log('Data: ' + data)
      axios.get(api.backend_api() + "search_keyword", {
        params: {
            keyword: text
        }
      })
      .then((res) => {
          //what backend sends to frontend
        console.log(res.data.foods[0]);
        navigation.navigate("Food data", {
          foodName: res.data.foods[0]["brandName"] +" "+ res.data.foods[0]["description"] , 
          calories: findCal(res.data.foods[0].foodNutrients)
        })
      })
      .catch((err) => {
          //error handling
          console.log(err);
      })
      
  }
  //check permissions and return the screens
  //screen behind the pop up box that asks for permission
  if (hasPermission == null){
    return(
    <View style={styles.container}>
        <Text> Requesting camera permission</Text>
    </View>
    )
  }

  if (hasPermission == false){
    return(
    <View style={styles.container}>
        <Text style={{margin: 10}}> No access to camera </Text>
        <Button title={'Allow Carmea'}  onPress={() => askForCameraPermission()} />
    </View>
    )
  }
    return (
        <View style={styles.container}>
          <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned = {scanned ? undefined : BarCodeScanned}
            style = {{height: 400, width: 400}}/>
          </View>
          <Text style={styles.maintext}>{text}</Text>
          {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='green'/>}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  barcodebox: {
    backgroundColor : 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 350,
    overflow: 'hidden',
    borderRadius: 30
  },

  maintext: {
    fontSize: 16,
    margin: 20
  }
});