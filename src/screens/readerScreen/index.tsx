// modules
import React, {useEffect, useRef, useState} from 'react';
import {observer} from 'mobx-react';
import {ScrollView, Text, View} from 'react-native';
// styles
import {styles} from './styles.ts';
// components
import {Button, Header, ReaderFooter} from '../../components';
// mock
import {chapters} from '../../mock/chapters.json';
// store
import ReaderStore from '../../stroes/readerStore.ts';

const ReaderScreen = observer((props: any) => {
  const {navigation} = props;
  const {section, nextSection} = ReaderStore;

  const [chapter, setChapter] = useState<any>([]);
  const scrollRef = useRef<ScrollView>(null);

  const handleNextSection = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
    nextSection();
  };

  useEffect(() => {
    setChapter([...chapters]);
  }, [section]);

  const handleGoBack = () => navigation.goBack();
  return (
    <>
      <Header onIconPress={handleGoBack} title={`Chapter ${section + 1}`} />
      <ScrollView style={styles.container} ref={scrollRef}>
        <View style={styles.content}>
          <Text style={styles.text}>{chapter[section]?.content}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={'Next Chapter'}
            onPress={handleNextSection}
            disabled={chapter?.length === section + 1}
          />
        </View>
      </ScrollView>
      <ReaderFooter />
    </>
  );
});

export default ReaderScreen;
