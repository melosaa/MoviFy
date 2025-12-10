import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchView from '../../pages/Search/SearchView';
import MovieView from '../../pages/Movie/MovieView';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#111',
          borderTopWidth: 0,
          height: 70,
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: '#777',
      }}
    >
      <Tab.Screen name="MovieView" component={MovieView} />
      <Tab.Screen name="SearchView" component={SearchView} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
