import React, {useState} from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import MessagesScreen from './app/screens/MessagesScreen';

import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 }
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker 
        placeholder='Category'
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories} 
        icon='apps' 
        />
      <AppTextInput icon='email' placeholder='Email' />
    </Screen>
  );
}

