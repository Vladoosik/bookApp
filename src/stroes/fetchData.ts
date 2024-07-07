// modules
import {makeAutoObservable, runInAction} from 'mobx';
// mock
import books from '../mock/books.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
// types
import {DetailedBookType, SectionType} from '../types/mockIType.ts';

class BookStore {
  sections: SectionType[] = [];
  selectedBook: DetailedBookType | null = null;

  constructor() {
    makeAutoObservable(this);
    this.loadSections();
  }

  fetchData = async () => {
    try {
      return books.sections;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  handleSelectBook = (item: DetailedBookType | null) => {
    runInAction(() => {
      this.selectedBook = item;
    });
  };

  async loadSections() {
    try {
      const cachedData = await AsyncStorage.getItem('sections');
      if (cachedData) {
        runInAction(() => {
          this.sections = JSON.parse(cachedData);
        });
      } else {
        await this.updateSections();
      }
    } catch (error) {
      console.error(error);
    }
  }

  async updateSections() {
    try {
      const fetchedData = await this.fetchData();
      runInAction(() => {
        this.sections = fetchedData as any;
      });
      await AsyncStorage.setItem('sections', JSON.stringify(fetchedData));
    } catch (error) {
      console.error(error);
    }
  }
}

const bookStore = new BookStore();
export default bookStore;
