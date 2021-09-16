import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import { TouchableOpacity, StyleSheet, Text, View, Button, RefreshControlBase} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/loginViewStyle';


export default function ManageRecipes(){

    
    
    const navigation = useNavigation();

    return (
        <View style={containerstyles.container}>
        <Text style={containerstyles.maintext}>What would you like to do</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Create Recipe') } style={styles.button}><Text style={styles.buttonTitle}>Create a new recipe</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate( 'Modify Recipe' )} style={styles.button}><Text style={styles.buttonTitle}>Modify a recipe</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate( 'Delete Recipe' )} style={styles.button}><Text style={styles.buttonTitle}>Delete a recipe</Text></TouchableOpacity>
        </View>
    );
}

const containerstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  maintext: {
    fontSize: 16,
    margin: 20
  }
});