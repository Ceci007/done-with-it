import React, { useEffect} from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import AppButton from '../components/Button';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      { getListingsApi.error && 
      <>
        <View style={styles.container}>
          <Text style={styles.text}>Couldn't retrieve the listings.</Text>
          <AppButton title='Retry' onPress={getListingsApi.request} />
        </View>
      </>}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList 
        data={getListingsApi.data}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => 
          <Card 
            title = {item.title}
            subTitle = {'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        }
      /> 
    </Screen>
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
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
  text: {
    color: colors.danger,
    textAlign: 'center',
  },
})

export default ListingsScreen;