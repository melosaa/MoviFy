import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text, Alert } from 'react-native';
import styles from './Register.style';
import Input from '../../../components/TextInput';
import Button from '../../../components/Button';
import { Formik } from 'formik';
import Icons from '../../../assets/icons';
import Images from '../../../assets/images';
import { registerValidationSchema } from '../../../utils/validation/registerValidation';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

const Register = ({ navigation }) => {
  const handleRegister = async values => {
    const { email, password } = values;
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      Toast.show({
        type: 'success',
        text1: 'User account created & signed in!',
      });
      console.log('Kayit Basarili', user);
      Toast.show({
        type: 'success',
        text1: 'Hesap basariyla olusturuldu.',
      });
      navigation.navigate('HomeView');
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/email-already-in-use') {
        Toast.show({
          type: 'success',
          text1: 'Bu e-posta zaten kayitli',
        });
      } else if (error.code === 'auth/invalid-mail') {
        Toast.show({
          type: 'error',
          text1: 'Geçersiz e-posta',
          text2: 'Lütfen geçerli bir e-posta adresi gir.',
        });
      } else if (error.code === 'auth/weak-password') {
        Toast.show({
          type: 'error',
          text1: 'Zayıf şifre',
          text2: 'Şifren en az 6 karakter olmalı.',
        });
      }
    }
  };

  function signIn() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '', passwordConfirm: '' }}
        onSubmit={handleRegister}
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
              isSecure
            />
            {touched.passwordConfirm && errors.passwordConfirm && (
              <Text style={styles.errorText}>{errors.passwordConfirm}</Text>
            )}

            <View style={styles.button_container}>
              <Button text="SIGN UP" theme="primary" onPress={handleSubmit} />
              <Button text="SIGN IN" theme="secondary" onPress={signIn} />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Register;
