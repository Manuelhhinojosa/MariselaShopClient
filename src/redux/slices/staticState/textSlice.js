import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "textSlice",
  initialState: {
    homeTitle: "RIGA",
    homeText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolor dicta? Praesentium tempora quas rem voluptatibus officia facilis mollitia, in quidem veniam molestiae nostrum alias fugiat nihil repudiandae iste at. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit magnam animi dolor sapiente eum rerum molestiae maxime. Pariatur eum eligendi modi! Laudantium ratione ullam dignissimos. Ullam dicta sequi maxime ut!",
    aboutText:
      "Hello! Riga Design is a brand based in Guadalajara, Mexico, inspired by the vibrant colors and rich textures of cities around the world. My mission is to bring you unique, handcrafted pieces that allow you to wear or showcase a fragment of the world’s beauty in your everyday life. Whether you choose to adorn yourself or your home, Riga Design lets you carry a limited edition piece with you wherever you go. The creator Marisela Fierro is a multifaceted visual artist and Art Educator with a passion for exploring the interplay between form and material. Her work seamlessly blends minimalist aesthetics with organic elements, creating a style that is both refined and dynamic. Marisela’s creative process is driven by a curiosity to push the boundaries of traditional design, resulting in pieces that are not only visually striking but also thought-provoking. Her dedication to craftsmanship and her innovative approach to art and design invite viewers to engage with her work on a deeper, more personal level. Web page: https://mariselafierro.netlify.app/ ",
  },
  reducers: {},
});

export default textSlice.reducer;
