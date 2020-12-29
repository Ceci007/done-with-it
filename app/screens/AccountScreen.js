import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native'

import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import AuthContext from '../auth/context';

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
    },
    targetScreen: 'Messages',
  }
]

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem 
          title={user.name}
          subTitle={user.email}
          image={require('../assets/user-placeholder.png')}
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
                onPress={() => navigation.navigate(item.targetScreen)}
              />
        }
        />
      </View>
      <ListItem 
        title='Log Out'
        IconComponent = {
          <Icon name='logout' backgroundColor='#ffe66d' />
        }
        onPress={() => setUser(null)}
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