import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider, useSelector } from 'react-redux';

import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import HomeView from './pages/Home/Home';
import MovieView from './pages/Movie/MovieView';
import SearchView from './pages/Search';
import TabNavigation from './navigation/tabNavigation/tabNavigation';
import FavoriteView from './pages/Favorite/FavoriteView';

import Icons from './assets/icons';
import Header from './components/Header';
import AppInitializer from './navigation/appInitializer';

import { store } from './store/store';
const Stack = createStackNavigator();

const StackScreens = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <Stack.Navigator initialRouteName={user ? 'HomeView' : 'Login'}>
      {!user ? (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="HomeView"
            component={HomeView}
            options={{
              header: () => (
                <Header leftIcon={Icons.movie} rightIcon={Icons.hamburger} />
              ),
            }}
          />
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MovieView"
            component={MovieView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchView"
            component={SearchView}
            options={{
              header: () => (
                <Header leftIcon={Icons.movie} rightIcon={Icons.hamburger} />
              ),
            }}
          />
          <Stack.Screen
            name="FavoriteView"
            component={FavoriteView}
            options={{
              header: () => (
                <Header leftIcon={Icons.movie} rightIcon={Icons.hamburger} />
              ),
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default function Router() {
  return (
    <Provider store={store}>
      <AppInitializer>
        <SafeAreaProvider>
          <NavigationContainer>
            <StackScreens />
          </NavigationContainer>
          <Toast />
        </SafeAreaProvider>
      </AppInitializer>
    </Provider>
  );
}
