import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native'

import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeparator from '../components/lists/ListItemSeparator';

const menuItems = [
  { 
    title: 'My Listings', 
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    }
  },
  { 
    title: 'My Messages', 
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    }
  }
]

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem 
          title='Ceci Benitez'
          subTitle='cecibenitezca@gmail.com'
          image={require('../assets/foto-perfil.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList 
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) =>
              <ListItem 
                title={item.title}
                IconComponent={
                  <Icon 
                    name={item.icon.name} 
                    backgroundColor={item.icon.backgroundColor}
                    />
                }
              />
        }
        />
      </View>
      <ListItem 
        title='Log Out'
        IconComponent = {
          <Icon name='logout' backgroundColor='#ffe66d' />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
})

export default AccountScreen;