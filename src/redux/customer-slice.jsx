import { createSlice } from "@reduxjs/toolkit";
import { CustomerData } from "../services/CustomerApi";


const CustomerSlice = createSlice({
  name: "customer-slice",
  initialState: { data: [...CustomerData], filteredData: [...CustomerData] },
  reducers: {
    createCustomer: (state, action) => {
      state.data.push(action.payload);
      state.filteredData = state.data;
    },

    editCustomer: (state, action) => {
      state.data.find((element) => element.id = action.payload);

    },


    updateCustomer: (state, action) => {
      const customerr = action.payload.cusm;
      const index = state.data.findIndex((element) => element.id === customerr.id);
      if (index !== -1) {
        state.data[index] = customerr;
      }
    },

    deleteCustomer: (state, action) => {
      const filterData = state.data.filter(
        (element) => element.id != action.payload
      );
      state.data = filterData;
      state.filteredData = filterData;
    },

    filterSearchCustomer: (state, action) => {
      state.filteredData = state.data;
      console.log("datafilter", state.data);
      if (action.payload !== "") {
        state.filteredData = state.data.filter(
          (element) => {
            console.log('first', element.nameandemail)
            return element.nameandemail[0].toLowerCase().includes(action.payload.toLowerCase())
          }
        );

      } else {
        state.filteredData = state.filteredData;
      }
    },
  },
});

export const CustomerReducer = CustomerSlice.reducer;
// export const CustomerActions = CustomerSlice.actions;
export const {
  createCustomer,
  editCustomer,
  updateCustomer,
  deleteCustomer,
  filterSearchCustomer,

} = CustomerSlice.actions;
