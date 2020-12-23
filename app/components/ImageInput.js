import React, { useEffect } from 'react';
import { View, Image, Alert, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if(!granted)
      alert('You need to enable permission to access the library')
  }

  const handlePress = () => {
    if(!imageUri) selectImage();
    else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      { text: 'Yes', onPress: () => onChangeImage(null)},
      { text: 'No'}
    ]);
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if(!result.cancel)
        onChangeImage(result.uri);
    } catch (error) {
     console.log('Error reading an image...', error); 
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons color={colors.grey} name='camera' size={40} />}
        {imageUri && <Image source={{ uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default ImageInput;