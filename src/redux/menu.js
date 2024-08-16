import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: false,
};

const menuSlice = createSlice({
  name: 'MENU_SLICE',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu: (state) => {
      state.menuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = menuSlice.actions;
export default menuSlice;
