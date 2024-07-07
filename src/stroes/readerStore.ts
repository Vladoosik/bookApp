// modules
import {makeAutoObservable} from 'mobx';

class ReaderStore {
  section: number = 0;

  constructor() {
    makeAutoObservable(this);
  }
  nextSection = () => (this.section += 1);
  resetSection = () => (this.section = 0);
}

const readerStore = new ReaderStore();
export default readerStore;
