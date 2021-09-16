import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/loginViewStyle';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
export default function FoodInfo({ navigation, route}) {
  return (
    <View>
        <Image
          style={styles.logo}
          source={require("../assets/food_logo.png")}
        />
        <View style={styles.button}>
            <Text style={ styles.buttonTitle}> {capitalizeFirstLetter(route.params.foodName)}</Text>
        </View>
        <View style={styles.button}>
            <Text style={ styles.buttonTitle}> {route.params.calories} Calories</Text>
        </View>
    </View>
  );
}


