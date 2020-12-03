import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import colors from '../config/colors';

function ListItem({title, subTitle, image}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} /> 
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.grey,
  },
  title: {
    fontWeight: '500',
  }
})

export default ListItem;