// modules
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {observer} from 'mobx-react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// styles
import {styles} from './styles.ts';
// assets
import {ArrowRight, SearchIcon} from '../../assets/index.ts';
// constant
import {width} from '../../constants/dimension.ts';
// store
import bookStore from '../../stroes/fetchData.ts';
import ReaderStore from '../../stroes/readerStore.ts';
// types
import {DetailedBookType, MockIType} from '../../types/mockIType.ts';
import {TopChartsType} from '../../types/renderBooksProps.ts';
// components
import {
  CarouselDefault,
  ContinueReading,
  RenderBooksColumn,
} from '../../components';

const DiscoverScreen = observer((props: any) => {
  const {navigation} = props;
  const sections = bookStore.sections;

  const specialOptions = {
    vertical: false,
    width: width * 0.93,
    height: width / 2,
  } as const;

  const handleReaderNavigate = (item: DetailedBookType | null) => {
    if (bookStore.selectedBook !== item) {
      ReaderStore.resetSection();
    }
    navigation.navigate('reader');
    bookStore.handleSelectBook(item);
  };

  const handleContinueReading = () => {
    navigation.navigate('reader');
    bookStore.handleSelectBook(bookStore.selectedBook);
  };

  const topSeriesColumns: any = [];
  for (let i = 0; i < sections[4]?.books.length; i += 3) {
    topSeriesColumns.push(sections[4]?.books.slice(i, i + 3));
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.iconContainer}>
          <SearchIcon />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Discover</Text>
        </View>
        <GestureHandlerRootView style={{flex: 1}}>
          <Carousel
            {...specialOptions}
            height={300}
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
            style={styles.specialCarousel}
            autoPlay={false}
            data={sections[0]?.books}
            scrollAnimationDuration={1000}
            renderItem={({item}: {item: MockIType}) => (
              <View style={styles.specialContainer}>
                <Text style={styles.specialPrice}>{item.price}</Text>
                <Text style={styles.specialTitle}>{item.title}</Text>
                <Image source={{uri: item.image}} style={styles.image} />
              </View>
            )}
          />
          <CarouselDefault
            onBookPress={handleReaderNavigate}
            title={'Trending Now'}
            data={sections[1]?.books}
          />
          <CarouselDefault
            onBookPress={handleReaderNavigate}
            title={'Romance'}
            data={sections[2]?.books}
          />
          <View style={styles.billionaireBox}>
            <CarouselDefault
              onBookPress={handleReaderNavigate}
              title={'Billionaire'}
              data={sections[3]?.books}
            />
          </View>
          <View style={styles.trendingTitleBox}>
            <Text style={styles.trendingTitle}>Top Series</Text>
            <ArrowRight />
          </View>
          <Carousel
            {...specialOptions}
            height={400}
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
            style={styles.specialCarousel}
            autoPlay={false}
            data={topSeriesColumns}
            scrollAnimationDuration={1000}
            renderItem={({item}: {item: TopChartsType[]}) => (
              <RenderBooksColumn
                books={item}
                onBookPress={handleReaderNavigate}
              />
            )}
          />
          <View style={styles.actorsBox}>
            <CarouselDefault
              onBookPress={handleReaderNavigate}
              title={'Authors You Might Know'}
              data={sections[5]?.books}
            />
          </View>
          <View style={styles.topRomanceBox}>
            <CarouselDefault
              onBookPress={handleReaderNavigate}
              title={'Top Romance'}
              data={sections[6]?.books}
            />
          </View>
        </GestureHandlerRootView>
      </ScrollView>
      {bookStore.selectedBook && (
        <ContinueReading
          onContainerPress={handleContinueReading}
          item={bookStore.selectedBook}
        />
      )}
    </>
  );
});

export default DiscoverScreen;
