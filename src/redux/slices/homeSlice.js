import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "counter",
  initialState: {
    homeUrl:
      "https://res.cloudinary.com/mangud/image/upload/v1724357016/mariselaShopClient/Screen_Shot_2024-08-22_at_4.03.27_PM_j7t4lo.png",
    homeTitle: "RIGA",
    homeText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolor dicta? Praesentium tempora quas rem voluptatibus officia facilis mollitia, in quidem veniam molestiae nostrum alias fugiat nihil repudiandae iste at. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit magnam animi dolor sapiente eum rerum molestiae maxime. Pariatur eum eligendi modi! Laudantium ratione ullam dignissimos. Ullam dicta sequi maxime ut!",
  },
  reducers: {},
});

export default homeSlice.reducer;
