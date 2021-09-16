import React, {useState, useEffect} from 'react';
import { TouchableOpacity, Text, View, Button, Image} from 'react-native';
// import CameraScan from './CameraScan';
import styles from '../styles/loginViewStyle';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'HomeScreen',
    };

    render() {
        const navigate = this.props.navigation.navigate;

        return (
            <View>
            <Image
                style={styles.logo}
                source={require("../assets/food_logo.png")}
            />
            <TouchableOpacity onPress={() => navigate( 'Login' )} style={styles.button}><Text style={styles.buttonTitle}>Log In</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigate( 'Create user')} style={styles.button}><Text style={styles.buttonTitle}>Sign Up</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigate( 'Camera scan')} style={styles.button}><Text style={styles.buttonTitle}>Scan Items</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigate( 'Search')} style={styles.button}><Text style={styles.buttonTitle}>Search by Item Name</Text></TouchableOpacity>
<<<<<<< HEAD
            <TouchableOpacity onPress={() => navigate( 'Create recipe')} style={styles.button}><Text style={styles.buttonTitle}>Create Recipe</Text></TouchableOpacity>
=======
            <TouchableOpacity onPress={() => navigate( 'Manage Recipes')} style={styles.button}><Text style={styles.buttonTitle}>Manage your Recipes</Text></TouchableOpacity>
>>>>>>> e9b48abd44141283ae975aaad18e32e4cd463c0d
            </View>

        );
    }
}