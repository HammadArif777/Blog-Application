import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  name: "Sign in",
  id: 1,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.id = nanoid();
      state.name = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
