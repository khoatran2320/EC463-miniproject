import React, {useState, useEffect} from 'react';
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


export default function CreateRecipe(){

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