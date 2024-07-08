// modules
import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
// styles
import {styles} from './styles.ts';
// types
import {RenderBooksProps, TopChartsType} from '../../types/renderBooksProps.ts';

const RenderBooksColumn: FC<RenderBooksProps<TopChartsType>> = props => {
  const {books, onBookPress} = props;

  return (
    <View style={styles.renderContainer}>
      {books.map((book: TopChartsType) => (
        <Pressable onPress={() => onBookPress(book)} key={book.trends}>
          <View style={styles.bookItem}>
            <Image source={{uri: book.image}} style={styles.bookImage} />
            <Text style={styles.chart}>{book.trends}</Text>
            <View>
              <Text style={styles.bookType}>{book.type}</Text>
              <Text style={styles.topSeriesTitle}>{book.title}</Text>
              <Text style={styles.reads}>{book.reads} Reads</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default RenderBooksColumn;
