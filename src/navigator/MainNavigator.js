import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailMovieScreen from '../screens/DetailMovieScreen';
import RecommendationScreen from '../screens/RecommendationScreen';
import MostViewedScreen from '../screens/MostViewedScreen';
 
const Stack = createStackNavigator();
 
const headerOptions = {
  headerStyle: { backgroundColor: '#65c3ba' },
  headerTitleStyle: { color: 'white', fontSize: 22 },
  headerTitleAlign: 'center',
};
 
const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ ...headerOptions, title: 'Movie Collection' }}
      />
      <Stack.Screen
        name="DetailMovie"
        component={DetailMovieScreen}
        options={{ ...headerOptions, title: 'Details', headerLeft: () => null }}
      />
      <Stack.Screen
        name="Recommended"
        component={RecommendationScreen}
        options={{ ...headerOptions, title: 'Recommended', headerLeft: () => null }}
      />
      <Stack.Screen
        name="MostViewed"
        component={MostViewedScreen}
        options={{ ...headerOptions, title: 'Most Viewed', headerLeft: () => null }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
 
export default MainNavigator;