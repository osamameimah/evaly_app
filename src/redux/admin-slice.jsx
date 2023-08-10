import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../services/AdminApi";

const AdminSlice = createSlice({
  name: "admin-slice",
  initialState: { data: [...Data], filteredData: [...Data] },
  reducers: {
    createAdmin: (state, action) => {
      state.data.push(action.payload);
      state.filteredData = state.data;
    },

    editAdmin: (state, action) => {
      const updatedAdmin = action.payload;
      const index = state.data.findIndex((element) => element.id === updatedAdmin.id);
      if (index !== -1) {
        state.data[index] = updatedAdmin;
      }
    },

    updateAdmin: (state, action) => {
      const updatedAdmin = action.payload.Admns;
      const index = state.data.findIndex((element) => element.id === updatedAdmin.id);
      if (index !== -1) {
        state.data[index] = updatedAdmin;
      }
    },

    deleteAdmin: (state, action) => {
      let filterData = state.data.filter((element) => element.id !== action.payload);
      state.data = filterData;
      state.filteredData = filterData;
    },

    filterSearchAdmin: (state, action) => {
      state.filteredData = state.data;
      if (action.payload !== "") {
        state.filteredData = state.data.filter(
          (element) => element.name && element.name.includes(action.payload)
        );
      }
    },
  },
});

export const AdminReducer = AdminSlice.reducer;
 export const {
  createAdmin,
  deleteAdmin,
  editAdmin,
  filterSearchAdmin,
  updateAdmin,
} = AdminSlice.actions;
