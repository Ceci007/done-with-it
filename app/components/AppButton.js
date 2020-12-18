import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress, style, color='primary'}) {
  return (
    <TouchableOpacity style={[styles.button, style, {backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  }, 
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})

export default AppButton;