import React, {useState, useEffect} from 'react';
import { TouchableOpacity, Text, View, Button, Image} from 'react-native';
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
            </View>

        );
    }
}