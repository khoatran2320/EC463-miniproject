import React, { useState }from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
const axios = require("axios");
import api from "../utils/api"


export default function SearchKeyword() {
const [text, setText] = useState(0);
  return (
    <View>
      <TextInput placeholder="Search for food by keyword" onChangeText={(text) => setText(text)}/>
      <Button onPress={() => {
          //connect to backend to search based on keyword
          axios.get(api.backend_api() + "search_keyword", {
              params: {
                  keyword: text
              }
          })
          .then((res) => {
              //what backend sends to frontend
            console.log(res.data.foods[0]);
          })
          .catch((err) => {
              //error handling
              console.log(err);
          })
      }} title="Search" color="#841584" />
    </View>
  );
}
