import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const initialState = { name: "", cost: 0 };
const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  //   How to clear the input fields on the form when the user inputs a new car
  extraReducers(builder) {
    // Watch for the addCar action type
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
