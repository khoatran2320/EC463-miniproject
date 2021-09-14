import React, { useState }from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
const axios = require("axios");

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
      <TextInput placeholder="First name" onChangeText={(text) => setFirstName(text)}/>
      <TextInput placeholder="Last name" onChangeText={(text) => setLastName(text)}/>
      <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)}/>
      <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
      <Button onPress={() => {
          console.log(firstName, lastName, email);
          axios.post("http://localhost:3000/create_user", {
                    firstName: firstName, 
                    lastName: lastName, 
                    password: password,
                    email: email
            }, axiosConfig)
          .then((res) => {
              //what backend sends to frontend
            console.log(res.data);
          })
          .catch((err) => {
              //error handling
              console.log(err);
          })
      }} title="Register" color="#841584" />
    </View>
  );
}


