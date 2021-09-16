import React, { useState }from 'react';
import { TouchableOpacity, Text, View, TextInput, Image, Alert } from 'react-native';
const axios = require("axios");
import auth from "../firebase/config";
import styles from '../styles/loginViewStyle';


const axiosConfig = {
    headers: {
        "content-type": "application/json",
      }
  };

export default function CreateUser( {navigation} ) {
const [email, setEmail] = useState(0);
const [password, setPassword] = useState(0);
  return (
    <View>
      <Image
          style={styles.logo}
          source={require("../assets/food_logo.png")}
      />
       <TextInput
        style={styles.input}
        placeholder='E-mail'
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
      />
      <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                      auth.createUserWithEmailAndPassword(email, password)
                        .then((userCredential) => {
                          // Signed in 
                          const user = userCredential.user;
                          console.log(user);
                          Alert.alert(
                            'Registration succeeded',
                            'Please log in now',
                            [{
                              text: 'Go back to Log In',
                              onPress: () => navigation.navigate("Home page")
                            }]
                          )
                          
                        })
                        .catch((error) => {
                          const errorCode = error.code;
                          const errorMessage = error.message;
                          console.log(errorCode, errorMessage);
                          Alert.alert(
                            errorMessage,
                            'Please try again',
                            [{
                              text: 'Try Again',
                              onPress: () => console.log('error message displayed')
                            }]
                          )
                          // ..
                        });
                    }}>
                    <Text style={styles.buttonTitle}>Register</Text>
                </TouchableOpacity>
    </View>
  );
}


