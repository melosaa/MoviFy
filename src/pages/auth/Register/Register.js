import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text } from 'react-native';
import styles from './Register.style';
import Input from '../../../components/TextInput';
import Button from '../../../components/Button';
import { Formik } from 'formik';
import Icons from '../../../assets/icons';
import Images from '../../../assets/images';
import { registerValidationSchema } from '../../../utils/validation/registerValidation';

const Register = ({ navigation }) => {
  const handleLogin = values => {
    console.log(values);
  };

  function signIn() {
    navigation.navigate('Login');

    ///simdilik yaptim
  }
  function navigateToHomePage() {
    navigation.navigate('Home');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '', passwordConfirm: '' }}
        onSubmit={handleLogin}
        validationSchema={registerValidationSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          touched,
          errors,
        }) => (
          <View>
            <View style={styles.image_container}>
              <Image style={styles.image} source={Images.group} />
              <Text style={styles.title}>
                Enjoy the world of entertainment.
              </Text>
            </View>
            <Input
              icon={Icons.padlock}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="Email or phone number"
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <Input
              icon={Icons.padlock}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="Password"
              isSecure
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Input
              icon={Icons.padlock}
              value={values.passwordConfirm}
              onChangeText={handleChange('passwordConfirm')}
              onBlur={handleBlur('passwordConfirm')}
              placeholder=" Repeat Password"
            />
            {touched.passwordConfirm && errors.passwordConfirm && (
              <Text style={styles.errorText}>{errors.passwordConfirm}</Text>
            )}

            <View style={styles.button_container}>
              <Button
                text="SIGN UP"
                theme="primary"
                onPress={navigateToHomePage}
              />
              <Button text="SIGN IN" theme="secondary" onPress={signIn} />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Register;
