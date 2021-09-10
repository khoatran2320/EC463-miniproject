import React, { useState }from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
const axios = require("axios");

function urlEncode(data) {
    var urlEncodedString = "";
    Object.keys(data).forEach(function(key) {
        urlEncodedString += key + "=" + encodeURIComponent(data[key]) + "&";
    });
    return urlEncodedString.slice(0, -1); //remove the trailing '&'
}

const defaultRequestConfig = {
    headers: {
        "content-type": "application/x-www-form-urlencoded",
    }
};
export default function CreateUser() {
const [firstName, setFirstName] = useState(0);
const [lastName, setLastName] = useState(0);
const [email, setEmail] = useState(0);
  return (
    <View>
      <TextInput placeholder="First name" onChangeText={(text) => setFirstName(text)}/>
      <TextInput placeholder="Last name" onChangeText={(text) => setLastName(text)}/>
      <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)}/>
      <Button onPress={() => {
          //connect to backend to search based on keyword
          axios.post("http://localhost:3000/add_user", urlEncode({
              body: {
                firstName: firstName, 
                lastName: lastName, 
                email: email, 
                recipes: []
              }
          }), defaultRequestConfig)
          .then((res) => {
              //what backend sends to frontend
            console.log(res.data);
          })
          .catch((err) => {
              //error handling
              console.log(err);
          })
      }} title="Search" color="#841584" />
    </View>
  );
}


