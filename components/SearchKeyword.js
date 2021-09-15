import React, { useState }from 'react';
import { TouchableOpacity, Text, View, TextInput, Image } from 'react-native';
const axios = require("axios");
import api from "../utils/api"
import styles from '../styles/loginViewStyle';

export default function SearchKeyword() {
const [text, setText] = useState(0);
  return (
    <View>
      <Image
          style={styles.logo}
          source={require("../assets/food_logo.png")}
      />
      <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          placeholder='Search by food name'
          onChangeText={(text) => setText(text)}
          value={text}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
      />
      <TouchableOpacity
          style={styles.button}
          onPress={() => {
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
        }}>
          <Text style={styles.buttonTitle}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
