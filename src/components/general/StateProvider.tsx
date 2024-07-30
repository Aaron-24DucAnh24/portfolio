'use client';

import store from '@/store';
import { Provider } from 'react-redux';

export function StateProvider<T extends {}>(Children: (props: T) => JSX.Element) {
  const result = (props: T) => {
    return (
      <Provider store={store}>
        <Children {...props} />
      </Provider>
    );
  };
  return result;
};