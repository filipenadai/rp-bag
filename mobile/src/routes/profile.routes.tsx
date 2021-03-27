import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/Profile';
import CreateProfile from '../screens/CreateProfile';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Profile"
  >
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="CreateProfile" component={CreateProfile} />
  </Stack.Navigator>
);

export default StackNavigator;
