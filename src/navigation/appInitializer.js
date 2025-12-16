import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser, logout } from '../store/authSlice';

const AppInitializer = ({ children }) => {
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
          }),
        );
      } else {
        dispatch(logout());
      }
      setInitializing(false);
    });
    return unsubscribe;
  }, [dispatch]);
  return children;
};

export default AppInitializer;
