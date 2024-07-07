// modules
import React, {memo} from 'react';
import {View, TouchableOpacity} from 'react-native';
// styles
import {styles} from './styles.ts';
// assets
import {ArrowRight, ListIcon, SettingsIcon} from '../../assets';

const ReaderFooter = () => {
  const iconArray = [
    {id: 12, icon: <ListIcon />},
    {id: 13, icon: <SettingsIcon />},
    {id: 14, icon: <ArrowRight fill={'#0E0E16'} style={styles.arrowLeft} />},
    {id: 15, icon: <ArrowRight fill={'#0E0E16'} />},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {iconArray.map(item => (
          <TouchableOpacity key={item.id}>{item.icon}</TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default memo(ReaderFooter);
