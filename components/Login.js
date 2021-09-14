import React, { useState }from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import auth from "../firebase/config";


export default function Login({ navigation }) {
const [email, setEmail] = useState(0);
const [password, setPassword] = useState(0);
  return (
    <View>
      <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)}/>
      <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
      <Button onPress={()=>{
        auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            setEmail('');
            setPassword('');
            navigation.navigate('Search');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
          });
      }} title="Signin" color="#841584" />
    </View>
  );
}


