import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
  const {handleChange, errors, setFieldTouched, touched} = useFormikContext();

  return (
    <React.Fragment>
      <AppTextInput 
              onBlur={() => setFieldTouched(name)}
              onChangeText={handleChange(name)}
              width={width}
              {...otherProps}
            />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}

export default AppFormField;