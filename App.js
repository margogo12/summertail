import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../group_project/src/screens/search';
import ResultsScreen from '../group_project/src/screens/results';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="search" component={SearchScreen} />
        <Stack.Screen name="results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

