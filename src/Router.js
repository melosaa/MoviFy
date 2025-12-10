import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import HomeView from './pages/Home/Home';
import Icons from './assets/icons';
import Header from './components/Header';
import MovieView from './pages/Movie/MovieView';
import SearchView from './pages/Search';
import TabNavigation from './navigation/tabNavigation/tabNavigation';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
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
          <Stack.Screen
            name="HomeView"
            component={HomeView}
            options={{
              header: () => (
                <Header leftIcon={Icons.movie} rightIcon={Icons.hamburger} />
              ),
            }}
          />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
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
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </SafeAreaProvider>
  );
};

export default Router;
