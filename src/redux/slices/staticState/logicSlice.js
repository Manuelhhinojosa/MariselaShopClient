import { createSlice } from "@reduxjs/toolkit";

export const logicSlice = createSlice({
  name: "logicSlice",
  initialState: {
    showJewellery: true,
    showfirstImgSingleProd: true,
  },
  reducers: {
    toggleRenderJewellery: (state, action) => {
      state.showJewellery = !state.showJewellery;
    },
    toggleShowfirstImgSingleProd: (state, action) => {
      state.showfirstImgSingleProd = !state.showfirstImgSingleProd;
    },
  },
});

export const { toggleRenderJewellery, toggleShowfirstImgSingleProd } =
  logicSlice.actions;

export default logicSlice.reducer;
