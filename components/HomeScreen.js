import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, RefreshControlBase} from 'react-native';
// import CameraScan from './CameraScan';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'HomeScreen',
    };

    render() {
        const navigate = this.props.navigation.navigate;

        return (
            <View style={styles.container}>
            <Text style={styles.maintext}>Main Menu</Text>
            <Button title={'Log In'} onPress={() => navigate( 'Login' )} color='green'/>
            <Button title={'Sign Up'} onPress={() => navigate( 'CreateUser')} color='green'/>
            <Button title={'Scan Items'} onPress={() => navigate( 'CameraScan')} color='green'/>
            <Button title={'Search by Item Name'} onPress={() => navigate( 'SearchKeyword')} color='green'/>
            </View>

        );
    }
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