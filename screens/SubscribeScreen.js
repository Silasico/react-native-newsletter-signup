import * as React from 'react';
import { useState } from "react"
import { View, Image, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { validateEmail } from "../utils"

const SubscribeScreen = () => {
  const [email, setEmail] = useState("")
  const [isEmail, setIsEmail] = useState(false)
  
  return (
    <View style = {subscribe.container}>
      <Image
        source = {require("../assets/little-lemon-logo-grey.png")}
        resizeMode = "contain"
        style = {subscribe.logo}
      />
      <Text style = {subscribe.caption}>Subscribe to our newsletters for our latest delicious recipes</Text>
      <TextInput
        placeholder = "Type your email"
        inputType = "email"
        style = {subscribe.emailInput}
        value = {email}
        onChangeText = {(value) => {
          setEmail(value)
          if(validateEmail(email)) {
            setIsEmail(true)
          } else {
            setIsEmail(false)
          }
        }}
      />
      <Pressable
        style = {isEmail ? subscribe.buttonActive : subscribe.buttonInactive}
        onPress = {() => isEmail && Alert.alert("Thank you for subscribing", "", [
          {
            text: "OK",
            onPress: () => {
              setEmail("")
              setIsEmail(false)
            }
          }
        ])}
      >
        <Text style = {subscribe.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  )
};

export default SubscribeScreen;

const subscribe = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 30,
    boxSizing: "border-box"
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 30,
  },
  caption: {
    color: "#444",
    fontSize: 20,
    textAlign: "center",
  },
  emailInput: {
    borderWidth: 2,
    borderColor: "#444",
    borderType: "solid",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: "left",
    width: 290,
    fontSize: 20,
    marginVertical: 30,
  },
  buttonActive: {
    backgroundColor: "green",
    width: 290,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonInactive: {
    backgroundColor: "grey",
    width: 290,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  }
})