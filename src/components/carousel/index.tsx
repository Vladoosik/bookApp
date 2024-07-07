// modules
import React, {FC} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Image, Pressable, Text, View} from 'react-native';
// styles
import {styles} from './styles.ts';
// assets
import {ArrowRight} from '../../assets';
// types
import {CarouselProps} from '../../types/carouselProps.ts';
import {DetailedBookType} from '../../types/mockIType.ts';
// constants
import {width} from '../../constants/dimension.ts';

const CarouselDefault: FC<CarouselProps> = props => {
  const {data, title, onBookPress} = props;

  const trendingOptions = {
    vertical: false,
    width: width * 0.45,
    height: width / 2,
  } as const;

  const handleBookPress = (item: DetailedBookType) => {
    if (onBookPress) {
      onBookPress(item);
    }
  };

  return (
    <View>
      <View style={styles.trendingTitleBox}>
        <Text style={styles.trendingTitle}>{title}</Text>
        <ArrowRight />
      </View>
      <Carousel
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        {...trendingOptions}
        height={300}
        style={styles.trendingCarousel}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({item}: {item: DetailedBookType}) => (
          <Pressable onPress={() => handleBookPress(item)}>
            <View style={styles.trendingContainer}>
              <Image source={{uri: item.image}} style={styles.trendingImage} />
              <Text style={styles.trendingBookTitle}>{item.title}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default CarouselDefault;
