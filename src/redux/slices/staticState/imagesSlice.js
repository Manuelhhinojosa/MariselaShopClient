import { createSlice } from "@reduxjs/toolkit";

export const imagesSlice = createSlice({
  name: "imagesSlice",
  initialState: {
    homeImageUrl:
      "https://res.cloudinary.com/mangud/image/upload/v1724357016/mariselaShopClient/Screen_Shot_2024-08-22_at_4.03.27_PM_j7t4lo.png",
  },
  reducers: {},
});

export default imagesSlice.reducer;
