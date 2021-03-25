import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Home from '../screens/Home';

import StackItems from './items.routes';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        backgroundColor: '#4d4d4d',
        borderTopWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: () => <Icon name="home" size={32} color="#fdfdfd" />,
      }}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <Icon name="box" size={32} color="#fdfdfd" />,
      }}
      name="ListItems"
      component={StackItems}
    />
  </Tab.Navigator>
);

export default TabNavigator;
