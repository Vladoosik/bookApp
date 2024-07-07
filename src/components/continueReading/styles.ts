import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 7,
    borderTopWidth: 1,
    borderTopColor: '#F0F1F7',
  },
  image: {
    width: 26,
    height: 39,
    borderRadius: 2,
  },
  descriptionContainer: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 12,
    color: '#50515E',
  },
  bookTitle: {
    marginTop: 1,
    color: '#0E0E16',
    fontSize: 14,
    fontWeight: '600',
  },
});
