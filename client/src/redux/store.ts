import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { blogApiSlice } from "./apiCalls/blogApi";
import blogSlice from "./slice/blogSlice";

const rootReducer = combineReducers({
    blogSlice: blogSlice,
    [blogApiSlice.reducerPath]: blogApiSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()

    .concat(blogApiSlice.middleware)

}

)
export type RootState = ReturnType<typeof rootReducer>;