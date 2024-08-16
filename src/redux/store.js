import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './menu';

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
  },
});

export default store;
