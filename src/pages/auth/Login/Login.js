import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text } from 'react-native';
import styles from './Login.style';
import Input from '../../../components/TextInput';
import Button from '../../../components/Button';
import { Formik } from 'formik';
import Icons from '../../../assets/icons';
import Images from '../../../assets/images';
import { loginValidationSchema } from '../../../utils/validation/loginValidation';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

const Login = ({ navigation }) => {
  const handleLogin = async values => {
    console.log('tetiklendi');
    const { email, password } = values;
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      console.log('Logged in', user);
      Toast.show({
        type: 'success',
        text1: 'Basarili giris yaptiniz',
      });
      navigation.navigate('HomeView');
    } catch (error) {
      console.log('Logged error', error);
      if (
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/invalid-credential'
      ) {
        Toast.show({
          type: 'error',
          text1: 'Sifre yanlis',
          text2: 'Lütfen şifreni kontrol et.',
        });
      } else if (error.code === 'auth/invalid-email') {
        Toast.show({
          type: 'error',
          text1: 'Geçersiz e-posta',
          text2: 'Lütfen geçerli bir e-posta adresi gir.',
        });
      }
    }
    console.log(values);
  };

  function handleSignUp() {
    navigation.navigate('Register');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
        validationSchema={loginValidationSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
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
              placeholder="Email or phone number"
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <Input
              icon={Icons.padlock}
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Password"
              isSecure
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <View style={styles.rememberRow}>
              <View style={styles.leftSide}>
                <View style={styles.checkbox} />
                <Text style={styles.rememberText}>Remember Me</Text>
              </View>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </View>

            <View style={styles.button_container}>
              <Button text="SIGN IN" theme="primary" onPress={handleSubmit} />
              <Button text="SIGN UP" theme="secondary" onPress={handleSignUp} />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
