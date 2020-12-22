import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo} 
        source={require('../assets/logo-red.png')} 
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <React.Fragment>
            <AppTextInput 
              autoCapitalize='none'
              autoCorrect={false}
              icon = 'email'
              placeholder = 'Email'
              keyboardType='email-address'
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
              textContentType='emailAddress'
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput 
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              onBlur={() => setFieldTouched('password')}
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry={true}
              textContentType='password'
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppButton title='Login' onPress={handleSubmit} />
          </React.Fragment>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
})

export default LoginScreen;