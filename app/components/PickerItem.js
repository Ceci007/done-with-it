import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    color: colors.grey,
    fontSize: 18,
  }
})

export default PickerItem;