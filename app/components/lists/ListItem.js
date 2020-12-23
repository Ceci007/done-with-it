import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}> 
      <TouchableHighlight 
        underlayColor={colors.lightGrey}
        onPress={onPress}
        >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            {subTitle && <Text style={styles.subTitle} numberOfLines={2}>{subTitle}</Text>}
          </View>
          <MaterialCommunityIcons color={colors.grey} name='chevron-right' size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.grey,
  },
  title: {
    fontWeight: '500',
  }
})

export default ListItem;