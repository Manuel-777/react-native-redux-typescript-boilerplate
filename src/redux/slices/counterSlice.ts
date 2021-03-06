import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state): void => { state.count = state.count + 1 },
    decrement: (state): void => { state.count = state.count - 1 }
  }
})

export default counterSlice;