const { createSlice } = require("@reduxjs/toolkit");

const Data = [
  {
    item1: "1",
    item2: "2 min ago",
    item3: "Joseph Wheeler",
    item4: "250",
    item5: "$154",
    item6: "Pending",
  },
  {
    item1: "2",
    item2: "5min ago",
    item3: "Joseph Wheeler",
    item4: "250",
    item5: "$222",
    item6: "Pending",
  },
  {
    item1: "3",
    item2: "5min ago",
    item3: "Joseph Wheeler",
    item4: "250",
    item5: "$222",
    item6: "Pending",
  },

];

const OrderSlice = createSlice({
  name: "order-slice",
  initialState: { data: [...Data], filteredData: [...Data], filterButton: [...Data] },
  reducers: {
    create: (state, action) => {
      state.data.push(action.payload);
      state.filteredData = state.data;
    },

    filterBySearch: (state, action) => {
      state.filteredData = state.data;
      console.log("datafilter", state.data);
      if (action.payload !== "") {
        state.filteredData = state.data.filter(
          (element) => element.item3 && element.item3.includes(action.payload)
        );

      } else {
        state.filteredData = state.filteredData;
      }
    },

    filteredData: (state, action) => {
      if (action.payload == "Id") {
        state.filteredData = state.data.sort((a, b) => {
          if (a.item1 < b.item1) {
            return -1;
          } else if (a.item1 > b.item1) {
            return 1;
          } else {
            return 0;
          }
        });
      }


      else if (action.payload == "Total") {
        state.filteredData = state.data.sort((a, b) => {
          if (a.item4 < b.item4) {
            return -1;
          } else if (a.item4 > b.item4) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        state.filteredData = state.data;
      }
    },
    button: (state, action) => {
      const updatedData = state.data.map((element) =>
        element.id === action.payload.id
          ? { ...element, item6: action.payload.newValue }
          : element
      );
      state.data = updatedData;
      state.filterButton = updatedData.filter(
        (element) => element.item6 === action.payload.newValue
      );
      console.log("00000", state.filterButton);
    },
    
    


  },
});

export const OrderSliceReducer = OrderSlice.reducer;
export const OrderSliceActions = OrderSlice.actions;
