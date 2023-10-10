import * as React from 'react';
import { ScrollView, View, Image, Text, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style = {welcome.container}>
      <ScrollView 
        contentContainerStyle = {welcome.innercontainer}
      >
        <Image
          source = {require("../assets/little-lemon-logo.png")}
          style = {welcome.logo}
          resizeMode = "contain"
        />
        <Text style = {welcome.caption}> Little Lemon, Your Local Mediterranean Bistro</Text>
        <Pressable 
          style = {welcome.button}
          onPress = {() => navigation.navigate("Subscribe")}
        >
          <Text style = {welcome.buttonText}>Newsletter</Text>
        </Pressable>
      </ScrollView>
    </View>
      
)}

export default WelcomeScreen;

const welcome = StyleSheet.create({
  container: {
     backgroundColor: "#ffffff",
     alignItems: "center",
     justifyContent: "center",
     flex: 1,
     
  },
  innercontainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  logo: {
    width: 200,
    height: 200,
    marginVertical: 40,
    
  },
  caption: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 40,
    textAlign: "center",
    color: "#444"
  },
  button: {
    paddingHorizontal: 100,
    paddingVertical: 10,
    backgroundColor: "green",
    borderRadius: 10,
    marginVertical: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  }
})