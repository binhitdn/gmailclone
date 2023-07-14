import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import MeetScreen from '../screen/MeetScreen';
import TabBarIcon from './TabBarIcon';

const Tab = createBottomTabNavigator();

const MyTabs = (): JSX.Element => {
  const renderTabBarIcon = ({
    color,
    size,
    name,
  }: {
    color: string;
    size: number;
    name: string;
  }) => <TabBarIcon routeName={name} color={color} size={size} />;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) =>
          renderTabBarIcon({color, size, name: route.name}),
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingVertical: 10,
          height: 60,
          width: '90%',
          position: 'absolute',
          left: '5%',
          right: '5%',
          bottom: 10,
          shadowColor: '#ffffff',
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'メール',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Meet"
        component={MeetScreen}
        options={{
          tabBarLabel: 'Meet',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
