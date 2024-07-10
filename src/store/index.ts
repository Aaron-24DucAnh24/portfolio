import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { THEME } from '@/utils/enums';
import { MODE } from '@/utils/constants';

export class GeneralStore {
  mode: string = MODE.SYSTEM;
  theme: THEME = THEME.LIGHT;

  constructor() {
    makeAutoObservable(this);
  }

  setSystemMode(systemMode: string) {
    this.mode = systemMode;
  }

  setTheme(theme: THEME) {
    this.theme = theme;
  }
}

const generalStore = new GeneralStore();

const stores = {
  generalStore
};

export const useStores = () => useContext(createContext(stores));
