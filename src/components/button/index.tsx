// modules
import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
// styles
import {styles} from './styles.ts';
// types
import {ButtonProps} from '../../types/buttonProps.ts';

const Button: FC<ButtonProps> = props => {
  const {title, onPress, disabled} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        {backgroundColor: disabled ? '#848694' : '#6209D9'},
      ]}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
