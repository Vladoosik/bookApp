// modules
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F1F7',
  },
  icon: {
    position: 'absolute',
    left: 24,
  },
  title: {
    textTransform: 'capitalize',
    color: '#0E0E16',
    fontSize: 22,
    fontWeight: '800',
  },
});
