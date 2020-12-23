import React from 'react';
import { useFormikContext } from "formik";
import { View, StyleSheet } from 'react-native';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name]; 

  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri]);
  }

  const handleRemove = uri => {
    setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
  }

  return (
    <React.Fragment>
      <ImageInputList 
        imageUris={imageUris} 
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}

export default FormImagePicker;