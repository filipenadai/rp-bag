import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListItem from '../screens/ListItems';
import CreateItem from '../screens/CreateItem';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="ListItems"
  >
    <Stack.Screen name="ListItems" component={ListItem} />
    <Stack.Screen name="CreateItem" component={CreateItem} />
  </Stack.Navigator>
);

export default StackNavigator;
