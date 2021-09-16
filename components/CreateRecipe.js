import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
import { TextInput, Text, View, TouchableOpacity, RefreshControlBase} from 'react-native';
const axios = require("axios");
import api from "../utils/api"
import styles from '../styles/loginViewStyle';
import findCal from "../utils/findCal";
import auth from "../firebase/config";
=======
import { TouchableOpacity, StyleSheet, Text, View, TextInput, SafeAreaView, Button, RefreshControlBase} from 'react-native';
// import { firebase } from '../firebase/config'
import firebase from "firebase/app"
const reference = database().ref('/users/carmen');

//variable to store recipe info as user inputs it
var recipeData = []

//helper function to create a recipe structure

const create = () => {
    firebase
        .database()
        .ref(reference)
        .set({
            highscore: 100,
        });
}
>>>>>>> e9b48abd44141283ae975aaad18e32e4cd463c0d

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

<<<<<<< HEAD
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
=======
    return (
        <View style={styles.container}>
        
        <TouchableOpacity onPress={() => create() } style={styles.addButton}><Text style={styles.maintext}>+</Text></TouchableOpacity>
        </View>
    );
    
}

// onPress={() => navigate('CreateRecipe')} color='green'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  maintext: {
    fontSize: 35,
    bottom: 13,
    right: 20,
    position: 'absolute',  
  },

  addButton: {
    width: 60,  
    height: 60,   
    borderRadius: 30,            
    backgroundColor: '#ee6e73',                                    
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10, 
  }
  
});
>>>>>>> e9b48abd44141283ae975aaad18e32e4cd463c0d
