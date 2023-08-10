const { createSlice } = require("@reduxjs/toolkit");

const Data = [
  {
    item1: "1",
    item2: "osama",
    item3: "2022-10-15",
    item4: "4000",
    item5: "CC",
    item6: "Pending",
    item7: "View Details",
  },

  {
    item1: "10",
    item2: "ahmed",
    item3: "2022-10-18",
    item4: "7000",
    item5: "CC",
    item6: "Delivered",
    item7: "View Details",
  },
  {
    item1: "12",
    item2: "Joseph Wheeler",
    item3: "2022-10-10",
    item4: "3000",
    item5: "CC",
    item6: "Processing",
    item7: "View Details",
  },

  {
    item1: "10",
    item2: "mohammed",
    item3: "2022-10-18",
    item4: "5000",
    item5: "CC",
    item6: "Shipped",
    item7: "View Details",
  },

  {
    item1: "15",
    item2: "Joseph Wheeler",
    item3: "2022-10-10",
    item4: "1000",
    item5: "CC",
    item6: "Confirmed",
    item7: "View Details",
  },

  {
    item1: "5",
    item2: "Joseph Wheeler",
    item3: "2022-10-18",
    item4: "1900",
    item5: "CC",
    item6: "Picked",
    item7: "View Details",
  },

  {
    item1: "80",
    item2: "Joseph Wheeler",
    item3: "2022-10-18",
    item4: "1700",
    item5: "CC",
    item6: "Pending",
    item7: "View Details",
  },

  {
    item1: "20",
    item2: "Joseph Wheeler",
    item3: "2022-10-18",
    item4: "1600",
    item5: "CC",
    item6: "Pending",
    item7: "View Details",
  },

  {
    item1: "30",
    item2: "Joseph Wheeler",
    item3: "2022-10-18",
    item4: "1500",
    item5: "CC",
    item6: "Pending",
    item7: "View Details",
  },
  {
    item1: "20",
    item2: "Joseph Wheeler",
    item3: "2022-10-18",
    item4: "2000",
    item5: "CC",
    item6: "Pending",
    item7: "View Details",
  },

  {
    item1: "20",
    item2: "mohammed",
    item3: "2022-10-18",
    item4: "1000",
    item5: "CC",
    item6: "Pending",
    item7: "View Details",
  },
];

const TranactionSlice = createSlice({
  name: "transation-slice",
  initialState: { data: [...Data], filteredData: [...Data] },
  reducers: {
    createTransaction: (state, action) => {
      state.filteredData = state.data;
    },

    filterSearchTransaction: (state, action) => {
      state.filteredData = state.data;
      console.log("datafilter", state.data);
      if (action.payload !== "") {
        state.filteredData = state.data.filter(
          (element) => element.item2 && element.item2.includes(action.payload)
        );
      } else {
        state.filteredData = state.filteredData;
      }
    },

    filterByTransaction: (state, action) => {
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
  },
});

export const TransactionReducer = TranactionSlice.reducer;
// export const TransactionActions = TranactionSlice.actions;
export const {
  createTransaction,
  filterSearchTransaction,
  filterByTransaction,
} = TranactionSlice.actions;
