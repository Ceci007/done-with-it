import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import ListItem from '../components/lists/ListItem';

import colors from '../config/colors';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Green jacket for sale</Text>
        <Text style={styles.price}>100$</Text>
        <View style={styles.userContainer}>
          <ListItem 
            image={require('../assets/foto-perfil.jpg')}
            title='Ceci Benitez'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userContainer: {
    marginVertical: 40,
  },
})

export default ListingDetailsScreen;