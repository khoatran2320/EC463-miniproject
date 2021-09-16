import React, { useState }from 'react';
import { TouchableOpacity, Text, View, TextInput, Image } from 'react-native';
const axios = require("axios");
import api from "../utils/api"
import styles from '../styles/loginViewStyle';
import findCal from "../utils/findCal";

export default function SearchKeyword({ navigation }) {
const [text, setText] = useState('');
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
              navigation.navigate("Food data", {
                foodName: text, 
                calories: findCal(res.data.foods[0].foodNutrients)
              })
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
