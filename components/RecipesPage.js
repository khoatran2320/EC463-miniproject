import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/loginViewStyle';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
export default function RecipesPage({ navigation, route}) {
    console.log(route.params);
    let Arr = route.params.map((a, i) => {
        return <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          navigation.navigate("Recipe Details", a.recipe)
        }}>
        <Text style={styles.buttonTitle}>{capitalizeFirstLetter(a.recipe.recipeName)}</Text>
    </TouchableOpacity>              
      }) 
  return (
    <View>
        <Image
          style={styles.logo}
          source={require("../assets/food_logo.png")}
        />
        {Arr}
    </View>
  );
}


