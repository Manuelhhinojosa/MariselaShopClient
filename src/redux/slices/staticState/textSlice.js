import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "textSlice",
  initialState: {
    homeTitle: "RIGA",
    homeText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolor dicta? Praesentium tempora quas rem voluptatibus officia facilis mollitia, in quidem veniam molestiae nostrum alias fugiat nihil repudiandae iste at. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit magnam animi dolor sapiente eum rerum molestiae maxime. Pariatur eum eligendi modi! Laudantium ratione ullam dignissimos. Ullam dicta sequi maxime ut!",
  },
  reducers: {},
});

export default textSlice.reducer;
