import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
// import CameraScan from './CameraScan';
import styles from '../styles/loginViewStyle';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'HomeScreen',
    };

    render() {
        const navigate = this.props.navigation.navigate;

        return (
            <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/food_logo.png")}
            />
            <Button title={'Log In'} onPress={() => navigate( 'Login' )} color='green'/>
            <Button title={'Sign Up'} onPress={() => navigate( 'Create user')} color='green'/>
            <Button title={'Scan Items'} onPress={() => navigate( 'Camera scan')} color='green'/>
            <Button title={'Search by Item Name'} onPress={() => navigate( 'Search')} color='green'/>
            </View>

        );
    }
}