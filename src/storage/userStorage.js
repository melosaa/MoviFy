import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = 'movieApp_user';

export const saveUserToStorage = async user => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.log('Error saving user', error);
  }
};

export const getUserFromStorage = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_KEY);
    if (!value) return null;
    return JSON.parse(value);
  } catch (error) {
    console.log('Error reading user', error);
    return null;
  }
};

export const removeUserFromStorage = async () => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.log('Error reading user', error);
  }
};
