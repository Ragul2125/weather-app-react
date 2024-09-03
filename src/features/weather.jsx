// weatherSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "chennai",
    temp: 0,
    humidity: 0,
    speed: 0,
  },
  reducers: {
    setWeather: (state, action) => {
      return action.payload; 
    },
  },
});

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
