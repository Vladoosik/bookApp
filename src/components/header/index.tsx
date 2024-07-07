// modules
import React, {FC, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// assets
import {CloseIcon} from '../../assets';
// styles
import {styles} from './styles.ts';
// types
import {HeaderProps} from '../../types/headerProps.ts';

const Header: FC<HeaderProps> = props => {
  const {title = 'title', onIconPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onIconPress} style={styles.icon}>
        <CloseIcon />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default memo(Header);
