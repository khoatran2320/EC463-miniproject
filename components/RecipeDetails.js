import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/loginViewStyle';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
export default function FoodInfo({ navigation, route}) {
    let Arr = route.params.items.map((a, i) => {
        return <View key={i} style={styles.button_alt}><Text style={ styles.buttonTitle}> {capitalizeFirstLetter(a.foodName)}: {a.calories} Calories</Text></View>;                   
      }) 
  return (
    <View>
         <View style={styles.button}>
            <Text style={ styles.buttonTitle}> {capitalizeFirstLetter(route.params.recipeName)}</Text>
        </View>
        {Arr}
    </View>
  );
}


