import React, { useState }from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
const axios = require("axios");

function search_button_press(){

}
export default function SearchKeyword() {
const [text, setText] = useState(0);
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search for food by keyword" onChangeText={(text) => setText(text)}/>
      <Button onPress={() => {
          //connect to backend to search based on keyword
          axios.get("http://localhost:3000/search_keyword", {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

