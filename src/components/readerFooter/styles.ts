// modules
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F1F7',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 38,
  },
  arrowLeft: {
    transform: [{scaleX: -1}],
  },
});
