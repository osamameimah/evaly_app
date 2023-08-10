import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../services/ProductApi";



const ProductSlice = createSlice({
  name: "product-slice",
  initialState: { data: [...Data], filteredData: [...Data] },
  reducers: {
    createProduct:(state, action)=> {
      state.data.push(action.payload);
      state.filteredData = state.data;
    },

    editProduct:(state, action)=> {
      state.data.find((element) => element.id = action.payload);

    },




    updateProduct:(state, action)=> {
      const updatedProduct = action.payload.UpdateToProduct;
      const index = state.data.findIndex((element) => element.id === updatedProduct.id);
      if (index !== -1) {
        state.data[index] = updatedProduct;
      }
    },


    deleteProduct:(state, action)=> {
      const filterData = state.data.filter(
        (element) => element.id != action.payload
      );
      state.data = filterData;
      state.filteredData = filterData;
    },


    filterSearchProduct:(state, action)=> {
      state.filteredData = state.data;
      // console.log("datafilter", state.data);
      if (action.payload !== "") {
        state.filteredData = state.data.filter(
          (element) => element.item2 && element.item2.includes(action.payload)
        );
      } else {
        state.filteredData = state.filteredData;
      }
    },
  },
});

export const ProductReducer = ProductSlice.reducer;
// export const ProductActions = ProductSlice.actions;
export const {
  createProduct,
  editProduct,
  updateProduct,
  deleteProduct,
  filterSearchProduct,
} = ProductSlice.actions;
