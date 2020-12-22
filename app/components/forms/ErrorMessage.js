import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../config/colors';

function ErrorMessage({error, visible}) {
  if (!visible || !error) return null;
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: colors.danger,
    borderWidth: 1,
    backgroundColor: colors.lightRed,
  }, 
  text: {
    color: colors.danger,
  },
})

export default ErrorMessage;