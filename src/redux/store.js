import { configureStore } from "@reduxjs/toolkit";

// reducers
import homeSlice from "./slices/homeSlice";

export default configureStore({
  reducer: {
    homeState: homeSlice,
  },
});
