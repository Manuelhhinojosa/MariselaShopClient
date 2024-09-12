import { configureStore } from "@reduxjs/toolkit";

// reducers
import imagesSlice from "./slices/staticState/imagesSlice";
import textSlice from "./slices/staticState/textSlice";

export default configureStore({
  reducer: {
    imagesSlice: imagesSlice,
    textSlice: textSlice,
  },
});
