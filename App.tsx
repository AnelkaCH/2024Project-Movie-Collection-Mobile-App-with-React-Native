import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './src/navigator/MainNavigator';
 
const App = () => (
  <SafeAreaProvider>
    <MainNavigator />
  </SafeAreaProvider>
);
 
export default App;