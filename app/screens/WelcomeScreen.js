import React from 'react';
import { ImageBackground } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground source={require('../assets/background.jpg')}></ImageBackground>
  );
}

const styles = StyleSheet.create({
  
})

export default WelcomeScreen;