// modules
import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
// styles
import {styles} from './styles.ts';
import {ArrowRight} from '../../assets';
// types
import {ReadingType} from '../../types/readingType.ts';

const ContinueReading: FC<ReadingType> = props => {
  const {item, onContainerPress} = props;

  return (
    <Pressable onPress={onContainerPress}>
      <View style={styles.container}>
        <Image source={{uri: item?.image}} style={styles.image} />
        <View style={styles.descriptionContainer}>
          <View>
            <Text style={styles.description}>Continue reading</Text>
            <Text style={styles.bookTitle}>{item?.title}</Text>
          </View>
          <ArrowRight />
        </View>
      </View>
    </Pressable>
  );
};

export default ContinueReading;
