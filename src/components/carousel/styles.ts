// modules
import {StyleSheet} from 'react-native';
import {width} from '../../constants/dimension.ts';

export const styles = StyleSheet.create({
  trendingTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 27,
  },
  trendingTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginLeft: 20,
    color: '#0E0E16',
    marginRight: 5,
  },
  trendingCarousel: {
    width: '100%',
    justifyContent: 'space-between',
  },
  trendingContainer: {
    marginTop: 18,
    marginLeft: 20,
    width: width / 3,
  },
  trendingImage: {
    width: 148,
    height: 222,
    borderRadius: 5,
  },
  trendingBookTitle: {
    fontSize: 13,
    color: '#848694',
    marginTop: 7,
  },
});
