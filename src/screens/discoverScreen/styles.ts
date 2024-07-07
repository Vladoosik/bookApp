// modules
import {StyleSheet} from 'react-native';
import {width} from '../../constants/dimension.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  specialContainer: {
    marginTop: 18,
    marginLeft: 20,
  },
  renderContainer: {
    marginLeft: 20,
  },
  specialPrice: {
    color: '#6209D9',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 1,
  },
  specialTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  iconContainer: {
    marginTop: 13,
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  titleContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#0E0E16',
  },
  image: {
    width: width - 50,
    height: 208,
    borderRadius: 10,
  },
  specialCarousel: {
    width: '100%',
    paddingLeft: 20,
  },
  billionaireBox: {
    marginTop: 80,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  chart: {
    color: '#848694',
    fontSize: 38,
    fontWeight: '700',
    marginHorizontal: 24,
  },
  bookImage: {
    width: 80,
    height: 120,
  },
  reads: {
    fontSize: 13,
    marginTop: 3,
    color: '#848694',
    fontWeight: '400',
  },
  topSeriesTitle: {
    marginTop: 3,
    fontSize: 15,
    fontWeight: '600',
    color: '#0E0E16',
    maxWidth: 150,
  },
  bookType: {
    color: '#6209D9',
    fontWeight: '700',
    fontSize: 12,
  },
  trendingTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 27,
    marginBottom: 19,
  },
  trendingTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginLeft: 20,
    color: '#0E0E16',
    marginRight: 5,
  },
  actorsBox: {
    marginTop: 50,
  },
  topRomanceBox: {
    marginBottom: 20,
  },
});
