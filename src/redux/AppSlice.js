import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {setIsLoading} = AppSlice.actions;

export default AppSlice.reducer;
