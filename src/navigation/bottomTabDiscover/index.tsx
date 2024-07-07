// modules
import React, {useCallback} from 'react';
import {RouteProp} from '@react-navigation/native';
// constants
import {Tab} from '../../constants/stack.ts';
// screens
import {
  AchievementsScreen,
  DiscoverScreen,
  ProfileScreen,
  SaveScreen,
} from '../../screens';
// options
import getTabOptions from './options.tsx';

const BottomTabDiscover = () => {
  const tabOptions = useCallback(
    (route: RouteProp<any>) => getTabOptions(route),
    [],
  );
  return (
    <Tab.Navigator
      initialRouteName={'Discover'}
      screenOptions={({route}) => tabOptions(route)}>
      <Tab.Screen
        name={'Save'}
        options={{headerShown: false}}
        component={SaveScreen}
      />
      <Tab.Screen
        name={'Discover'}
        options={{headerShown: false}}
        component={DiscoverScreen}
      />
      <Tab.Screen
        name={'Achievement'}
        options={{headerShown: false}}
        component={AchievementsScreen}
      />
      <Tab.Screen
        name={'Profile'}
        options={{headerShown: false}}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabDiscover;
