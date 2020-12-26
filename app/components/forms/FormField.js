import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
  const { errors, setFieldTouched, setFieldValue, touched, values } = useFormikContext();

  return (
    <React.Fragment>
      <AppTextInput 
              onBlur={() => setFieldTouched(name)}
              onChangeText={text => setFieldValue(name, text)}
              value={values[name]}
              width={width}
              {...otherProps}
            />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}

export default AppFormField;