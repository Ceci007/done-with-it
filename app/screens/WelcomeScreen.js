import React from 'react';
import { ImageBackground, View, Image, Text, StyleSheet } from 'react-native';

import AppButton from '../components/Button';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground 
      blurRadius={4}
      style = {styles.background}
      source={require('../assets/background.jpg')} >
        <View style = {styles.logoContainer}>
          <Image style = {styles.logo} source={require('../assets/logo-red.png')} />
          <Text style={styles.tagline}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title='Login' onPress={() => navigation.navigate("Login")} />
          <AppButton title='Register' color='secondary' onPress={() => navigation.navigate("Register")} />
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }, 
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100, 
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
})

export default WelcomeScreen;