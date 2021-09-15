import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, RefreshControlBase} from 'react-native';


export default function CreateRecipe(){

    return (
        <View style={styles.container}>
        <Text style={styles.maintext}>Here you create recipes</Text>
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

  maintext: {
    fontSize: 16,
    margin: 20
  }
});