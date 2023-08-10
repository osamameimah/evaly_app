import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../services/BrandApi";

const BrandSlice = createSlice({
  name: "brand-slice", // Correct the name here
  initialState: { data: [...Data], filteredData: [...Data] },
  reducers: {
    createBrand:(state, action)=> {
      state.data.push(action.payload);
      state.filteredData = state.data;
    },
    editBrand:(state, action)=> {
      // This part is incorrect and should be modified to update the brand data
      const editedBrand = action.payload;
      const index = state.data.findIndex((element) => element.id === editedBrand.id);
      if (index !== -1) {
        state.data[index] = editedBrand;
      }
    },
    updateBrand:(state, action)=> {
      const updatedBrand = action.payload.brands;
      const index = state.data.findIndex((element) => element.id === updatedBrand.id);
      if (index !== -1) {
        state.data[index] = updatedBrand;
      }
    },
    
    deleteBrand:(state, action)=> {
      state.data = state.data.filter((element) => element.id !== action.payload);
      state.filteredData = state.data;
    },
    filterSearchBrand:(state, action)=> {
      state.filteredData = state.data;
      if (action.payload !== "") {
        state.filteredData = state.data.filter((element) =>
          element.item2 && element.item2.includes(action.payload)
        );
      } else {
        state.filteredData = state.data;
      }
    },
  },
});

export const BrandReducer = BrandSlice.reducer;
// export const BrandActions = BrandSlice.actions;
export const {
  createBrand,
editBrand,
updateBrand,
deleteBrand,
filterSearchBrand
} = BrandSlice.actions;