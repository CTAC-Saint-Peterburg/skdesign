import { createSlice } from "@reduxjs/toolkit";

const mydataSlice = createSlice({
  name: "mydata",
  initialState: {
    dataLengthRequest: 50,
    data: "данные не загрузились...",
    isLoading: true,
    buttons: [],
    pageData: [],
    sortBy: { id: false, firstName: false, lastName: false },
    search: "",
    moreDetailed: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setDataLengthRequest: (state, action) => {
      state.dataLengthRequest = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    addNewObj: (state, action) => {
      let copy = { ...action.payload };
      copy.phone = `(${String(copy.phone).substring(0, 3)})${String(
        copy.phone
      ).substring(3, 6)}-${String(copy.phone).substring(6)}`;

      state.pageData.unshift(copy);
    },
    setPageData: (state, action) => {
      state.pageData = state.data.slice(
        action.payload.pageLimit * action.payload.currentPage,
        action.payload.pageLimit * (action.payload.currentPage + 1)
      );
    },
    setMoreDetailed: (state, action) => {
      if (action.payload !== "") {
        state.moreDetailed = state.pageData.filter(
          (x) => x.id === action.payload
        );
      } else {
        state.moreDetailed = "";
      }
    },
    sortData: (state, action) => {
      if (action.payload === "id") {
        if (state.sortBy.id) {
          state.pageData = state.pageData.sort((a, b) => a.id - b.id);
        } else if (!state.sortBy.id) {
          state.pageData = state.pageData.sort((a, b) => b.id - a.id);
        }
        state.sortBy.id = !state.sortBy.id;
      } else if (action.payload === "firstName") {
        if (state.sortBy.firstName) {
          state.pageData = state.pageData.sort((a, b) =>
            a.firstName.localeCompare(b.firstName)
          );
        } else if (!state.sortBy.firstName) {
          state.pageData = state.pageData.sort((a, b) =>
            b.firstName.localeCompare(a.firstName)
          );
        }
        state.sortBy.firstName = !state.sortBy.firstName;
      } else if (action.payload === "lastName") {
        if (state.sortBy.lastName) {
          state.pageData = state.pageData.sort((a, b) =>
            a.lastName.localeCompare(b.lastName)
          );
        } else if (!state.sortBy.lastName) {
          state.pageData = state.pageData.sort((a, b) =>
            b.lastName.localeCompare(a.lastName)
          );
        }
        state.sortBy.lastName = !state.sortBy.lastName;
      } else return console.log("incorrect dispatch name...");
    },
    updateBtn: (state) => {
      state.buttons = new Array(Math.ceil(state.data.length / 50)).fill("btn");
    },
  },
});

export const {
  setData,
  sortData,
  setPageData,
  addNewObj,
  setSearch,
  setMoreDetailed,
  updateBtn,
  setDataLengthRequest,
  setIsLoading,
} = mydataSlice.actions;
export default mydataSlice.reducer;
