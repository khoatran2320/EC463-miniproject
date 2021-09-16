import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing components for page routings
import SearchKeyword from "./components/SearchKeyword";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import CameraScan from "./components/CameraScan";
import HomeScreen from "./components/HomeScreen";
import ManageRecipes from "./components/ManageRecipes"
import CreateRecipe from "./components/CreateRecipe"
import FoodInfo from "./components/FoodInfo"

const Stack = createNativeStackNavigator();

//create stack navigator for the routes
// const Navigator = createStackNavigator({
//   HomeScreen: { screen: HomeScreen},
//   CameraScan: { screen: CameraScan},
//   SearchKeyword: { screen: SearchKeyword },
//   CreateUser: { screen: CreateUser },
//   Login: { screen: Login }
// });

// // export default class App extends React.Component{
// //   render(){
// //     return <HomeScreen/>
// //   }
// // }
// const App = createAppContainer(Navigator);

// export default App;

//COMMENT OUT CODE IN CASE WE NEED IT BACK, BUT NOT IN USE NOW
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home page" component= { HomeScreen }/>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="Create user" component={CreateUser} />
        <Stack.Screen name="Search" component={SearchKeyword} />
        <Stack.Screen name="Camera scan" component={CameraScan} />
        <Stack.Screen name="Food data" component={FoodInfo} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    height: "5vh",

  }
});
