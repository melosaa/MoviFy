/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import Home from './pages/Home';
import Icons from './assets/icons';
import Header from './components/Header';
import MovieView from './pages/Movie';
import SearchView from './pages/Search';
import MovieDetail from './pages/MovieDetail';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
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
            name="Home"
            component={Home}
            options={{
              header: () => (
                <Header leftIcon={Icons.movie} rightIcon={Icons.hamburger} />
              ),
            }}
          />
          <Stack.Screen
            name="MovieView"
            component={MovieView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={SearchView}
            options={{
              header: () => (
                <Header leftIcon={Icons.movie} rightIcon={Icons.hamburger} />
              ),
            }}
          />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
