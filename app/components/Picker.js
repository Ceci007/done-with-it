import React, { useState } from 'react';
import { Text, View, TouchableWithoutFeedback, Modal, FlatList, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppButton from './Button';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ 
  icon, 
  items,
  numberOfColumns = 1, 
  onSelectItem, 
  PickerItemComponent = PickerItem, 
  placeholder, 
  selectedItem, 
  width = '100%', 
  ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons name={icon} 
            size={25} color={colors.grey} style={styles.icon} />}
          {selectedItem ? <Text style={styles.text}>{selectedItem.label}</Text> :
          <Text style={styles.placeholder}>{placeholder}</Text>}
          <MaterialCommunityIcons 
            name='chevron-down' size={25} color={colors.grey} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide' >
        <Screen style={styles.screen}>
          <AppButton style={styles.button} title='close' onPress={() => setModalVisible(false)} />
          <FlatList 
            data={items}
            keyExtractor={item => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem = {({ item }) => 
              <PickerItemComponent 
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 15,
    width: '60%',
  },
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.grey,
    flex: 1,
    fontSize: 18,
  }, 
  text: {
    flex: 1,
    fontSize: 18,
  },
  textInput: {
    fontSize: 18,
    color: colors.grey,
  },
  screen: {
    width: '100%',
    alignItems: 'center',
  },
})

export default AppPicker;