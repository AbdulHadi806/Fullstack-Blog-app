import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BlogState {
  userBlogByID: Record<string, any>; 
  user: any; 
}
const initialState: BlogState = {
  userBlogByID: {},
  user: null
};
const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    getUserBlogById: (state, action: PayloadAction<any>) => {
      state.userBlogByID = action.payload;
    },
   getLoggedInUser: (state, action: PayloadAction<any>) => {
    state.user = action.payload;
   }
  },
})

export const { getUserBlogById, getLoggedInUser } = blogSlice.actions;
export default blogSlice.reducer;