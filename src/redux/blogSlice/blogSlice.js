import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  blogs: [
    {
      id: 1,
      title: "Embracing Change: Navigating Life's Dynamic Journey",
      text: "Change is the only constant in life, a perpetual force shaping our paths. At times daunting, it's also our greatest catalyst for growth. Embracing change means relinquishing comfort zones, venturing into the unknown. It's a dance between uncertainty and opportunity, where resilience becomes our guiding light. In every twist and turn, we discover new facets of ourselves, evolving amidst life's dynamic journey.",
      date: new Date().toString(),
    },
  ],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      const blog = {
        id: nanoid(),
        title: action.payload.title,
        text: action.payload.text,
        date: action.payload.date,
      };
      state.blogs.push(blog);
    },
    removeBlog: (state, action) => {
      state.blogs = state.blogs.filter((state) => state.id !== action.payload);
    },
  },
});

export const { addBlog, removeBlog } = blogSlice.actions;
export default blogSlice.reducer;
