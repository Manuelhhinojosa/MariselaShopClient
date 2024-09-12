import { createSlice } from "@reduxjs/toolkit";

export const logicSlice = createSlice({
  name: "logicSlice",
  initialState: {
    showJewellery: true,
  },
  reducers: {
    toggleRenderJewellery: (state, action) => {
      state.showJewellery = !state.showJewellery;
    },
  },
});

export const { toggleRenderJewellery } = logicSlice.actions;
export default logicSlice.reducer;
