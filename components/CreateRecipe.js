import React, {useState, useEffect} from 'react';
import { TextInput, Text, View, TouchableOpacity, RefreshControlBase} from 'react-native';
const axios = require("axios");
import api from "../utils/api"
import styles from '../styles/loginViewStyle';
import findCal from "../utils/findCal";
import auth from "../firebase/config";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default function CreateRecipe(){
  const [recipeName, setRecipeName] = useState('');
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  let Arr = items.map((a, i) => {
    return <View key={i} style={styles.button_alt}><Text style={ styles.buttonTitle}> {capitalizeFirstLetter(a.foodName)}: {a.calories} Calories</Text></View>;                   
  }) 

  return (
    <View>
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
              const repItem = {
                foodName: text, 
                calories: findCal(res.data.foods[0].foodNutrients)
              }
              setItems(oldArray => [...oldArray, repItem]);

            })
            .catch((err) => {
                //error handling
                console.log(err);
            })
        }}>
          <Text style={styles.buttonTitle}>Search</Text>
      </TouchableOpacity>
      {Arr}
      <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          placeholder='Recipe name'
          onChangeText={(text) => setRecipeName(text)}
          value={recipeName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
      />
      <TouchableOpacity
          style={styles.button}
          onPress={() => {
            
        }}>
          <Text style={styles.buttonTitle}>Create Recipe</Text>
      </TouchableOpacity>
    </View>
  )
}
