import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null
};

export const selectedSiteSlice = createSlice({
  name: 'selectedSite',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSelectedSite: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const payload = action.payload;

      state.value = payload.selectedSite;
    }
  },
});

export const { setSelectedSite } = selectedSiteSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.session.value)`
export const selectSelectedSite = (state) => state.selectedSite.value;

export default selectedSiteSlice.reducer;
