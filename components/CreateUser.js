import React, { useState }from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
const axios = require("axios");
import auth from "../firebase/config";


const axiosConfig = {
    headers: {
        "content-type": "application/json",
      }
  };

export default function CreateUser() {
const [firstName, setFirstName] = useState(0);
const [lastName, setLastName] = useState(0);
const [email, setEmail] = useState(0);
const [password, setPassword] = useState(0);
  return (
    <View>
      <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)}/>
      <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
      <Button onPress={()=>{
        auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
          });
      }} title="Register" color="#841584" />
    </View>
  );
}


