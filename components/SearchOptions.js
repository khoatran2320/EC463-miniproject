import React, {useState, useEffect} from 'react';
import { TouchableOpacity, Text, View, Button, Image} from 'react-native';
// import CameraScan from './CameraScan';
import styles from '../styles/loginViewStyle';
import auth, { fs } from "../firebase/config";
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

export default class SearchOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {myArray: []}
    }
    async componentDidMount() {
        const recipes = await fs.collection("recipes")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach( (doc) => {
                // doc.data() is never undefined for query doc snapshots
                if(doc.data()["recipe"]["email"] == auth.currentUser.email && doc.data()["recipe"]['items'] != undefined){
                    this.setState({ myArray: [...this.state.myArray, doc.data()] })
                }
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }
    render() {
        const navigate = this.props.navigation.navigate;
        return (
            <View>
                <Image
                    style={styles.logo}
                    source={require("../assets/food_logo.png")}
                />
                <TouchableOpacity onPress={() => navigate( 'Recipes Page', this.state.myArray)} style={styles.button}><Text style={styles.buttonTitle}>View Recipes</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigate( 'Camera scan')} style={styles.button}><Text style={styles.buttonTitle}>Scan Items</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigate( 'Search')} style={styles.button}><Text style={styles.buttonTitle}>Search by Item Name</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigate( 'Create recipe')} style={styles.button}><Text style={styles.buttonTitle}>Create Recipe</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    auth.signOut();
                    navigate( 'Home page')}} style={styles.button}><Text style={styles.buttonTitle}>Logout</Text></TouchableOpacity>
            </View>

        );}
}