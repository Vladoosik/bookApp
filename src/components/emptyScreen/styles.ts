// modules
import {StyleSheet} from 'react-native';
// constants
import {height} from '../../constants/dimension.ts';

export const styles = StyleSheet.create({
  container: {
    height: height / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    maxWidth: 240,
    fontSize: 25,
    fontWeight: '500',
  },
});
