import React, { useState }from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
const axios = require("axios");


export default function SearchBarcode() {
const [text, setText] = useState(0);
  return (
    <View>
      <TextInput placeholder="Search for food by barcode" onChangeText={(text) => setText(text)}/>
      <Button onPress={() => {
          //connect to backend to search based on keyword
          axios.get("http://localhost:3000/search_barcode", {
              params: {
                  keyword: text
              }
          })
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


