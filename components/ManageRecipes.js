import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, RefreshControlBase} from 'react-native';



export default function ManageRecipes(){
    
    const navigate = this.props.navigation.navigate;
    // CreateRecipe(() => {
    //     navigate( 'CreateRecipe' )
    // }, [])

    // ModifyRecipe(() => {
    //     <Text style={styles.maintext}>Here you modify recipes</Text>
    //     navigate( 'Login' )
    // }, [])

    // DeleteRecipe(() => {
    //     <Text style={styles.maintext}>Here you delete recipes</Text>
    //     navigate( 'Login' )
    // }, [])
    

    return (
        <View style={styles.container}>
        <Text style={styles.maintext}>What would you like to do</Text>
        <Button title={'Create Recipe'} onPress={() => navigate('CreateRecipe')} color='green'/>
        {/* <Button title={'Modify Recipe'} onPress={() => ModifyRecipe()} color='blue'/>
        <Button title={'Delete Recipe'} onPress={() => DeleteRecipe()} color='red'/> */}
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

  barcodebox: {
    backgroundColor : 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 350,
    overflow: 'hidden',
    borderRadius: 30
  },

  maintext: {
    fontSize: 16,
    margin: 20
  }
});