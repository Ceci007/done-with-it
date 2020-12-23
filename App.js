import React, {useState} from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import MessagesScreen from './app/screens/MessagesScreen';

import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { ListItem } from './app/components/lists';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';


export default function App() {
  return (
    <ListingEditScreen />
  );
}

