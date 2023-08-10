import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../services/CoubonApi";


const CouponSlice = createSlice({
  name: "coupon-slice",
  initialState: { data: [...Data], filteredData: [...Data] },
  reducers: {
    createCoupon: (state, action) => {
      state.data.push(action.payload);
      state.filteredData = state.data;
    },
    editCoupon: (state, action) => {
      state.data.find((element) => element.id = action.payload);

    },

    updateCoupon: (state, action) => {
      const updatedCouboon = action.payload.Coopo;
      const index = state.data.findIndex((element) => element.id === updatedCouboon.id);
      if (index !== -1) {
        state.data[index] = updatedCouboon;
      }
    },




    deleteCoupon: (state, action) => {
      const filterData = state.data.filter(
        (element) => element.id != action.payload);
      state.data = filterData;
      state.filteredData = filterData;

    },

   

    filterSearchCoupon: (state, action) => {
      state.filteredData = state.data;
      console.log("datafilter", state.data);
      if (action.payload !== "") {
        state.filteredData = state.data.filter(
          (element) => {
            console.log('first', element.name)
            return element.name.toLowerCase().includes(action.payload.toLowerCase())
          }
        );

      } else {
        state.filteredData = state.filteredData;
      }
    },
  },
});

export const CouponReducer = CouponSlice.reducer;
// export const CouponActions = CouponSlice.actions;
export const {
  createCoupon,
  editCoupon,
  updateCoupon,
  deleteCoupon,
  filterSearchCoupon,
} = CouponSlice.actions;
