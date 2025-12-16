import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { saveUserToStorage } from '../storage/userStorage';
import { setUser } from '../store/authSlice';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = async values => {
    console.log('tetiklendi');
    const { email, password } = values;
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      const safeUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };
      dispatch(setUser(safeUser));
      console.log('Logged in', user);

      await saveUserToStorage(safeUser);
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
  return { handleLogin, handleSignUp };
};
