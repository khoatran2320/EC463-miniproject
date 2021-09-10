import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchKeyword from "./components/SearchKeyword";
import SearchBarcode from "./components/SearchBarcode";
import CreateUser from "./components/CreateUser";


export default function App() {
  return (
    <View style={styles.container}>
      <SearchKeyword />
      <SearchBarcode />
      <CreateUser />
      <StatusBar style="auto" />
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
  search: {
    height: "5vh",

  }
});
