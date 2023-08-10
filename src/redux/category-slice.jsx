import { Data } from "../services/CategoryApi";

const { createSlice } = require("@reduxjs/toolkit");



const CategorySlice = createSlice({
  name: "category-slice",
  initialState: { data: Data, filteredData: [...Data] },
  reducers: {
    createCategory: (state, action) => {
      state.data.push(action.payload);
      state.filteredData = state.data;
    },

    editCategory: (state, action) => {
      state.data.find((element) => element.id = action.payload);

    },


    updateCategory: (state, action) => {
      const updatedCategory = action.payload.categorys;
      const index = state.data.findIndex((element) => element.id === updatedCategory.id);
      if (index !== -1) {
        state.data[index] = updatedCategory;
      }
    },

    deleteCategory: (state, action) => {
      const filterData = state.data.filter(
        (element) => element.id != action.payload);
      state.data = filterData;
      state.filteredData = filterData;

    },

    filterSearchCategory: (state, action) => {
      state.filteredData = state.data;
       if (action.payload !== "") {
        state.filteredData = state.data.filter(
          (element) => element.name && element.name.includes(action.payload)
        );
      } else {
        state.filteredData = state.filteredData;
      }
    },

  },
});


export const CategoryReducer = CategorySlice.reducer;
// export const CategoryActions = CategorySlice.actions;
export const {
  createCategory,
  editCategory,
  updateCategory,
  deleteCategory,
  filterSearchCategory,


} = CategorySlice.actions;