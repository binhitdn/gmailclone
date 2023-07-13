import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

interface TabBarIconProps {
  routeName: string;
  color: string;
  size: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({routeName, color, size}) => {
  let iconName = '';
  if (routeName === 'Home') {
    iconName = 'mail';
  } else if (routeName === 'Meet') {
    iconName = 'videocamera';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export default TabBarIcon;
