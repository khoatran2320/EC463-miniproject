import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, RefreshControlBase} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';



export default class CameraScan  extends React.Component{

    static navigationOptions = {
        title: 'CameraScan',
    };

    render() {
      const { navigate } = this.props.navigation;

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
          setText(data);
          console.log('Data: ' + data)
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
}
