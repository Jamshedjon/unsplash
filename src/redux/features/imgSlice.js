import { createSlice } from "@reduxjs/toolkit";

function valueFromLocal() {
  return (
    JSON.parse(localStorage.getItem("data")) || {
      query: "features",
      page: 1,
      total: 0,
      likedPhotos: [],
      theme: "light",
      user: {},
    }
  );
}
const imgSlice = createSlice({
  name: "img",
  initialState: valueFromLocal(),
  reducers: {
    updateQuery: (state, { payload }) => {
      state.query = payload;
      localStorage.setItem("data", JSON.stringify(state));
    },
    updateTotal: (state, { payload }) => {
      state.total = payload;
      localStorage.setItem("data", JSON.stringify(state));
    },
    updatePage: (state, { payload }) => {
      state.page = payload;
      localStorage.setItem("data", JSON.stringify(state));
    },
    addLikedPhotos: (state, { payload }) => {
      const isImageHas = state.likedPhotos.every((photo) => {
        return photo.id !== payload.id;
      });
      if (isImageHas) {
        state.likedPhotos = [...state.likedPhotos, payload];
      }
      // else {
      //   state.likedPhotos.forEach((item, i) => {
      //     if (item.id == payload.id) {
      //       state.likedPhotos.splice(i, 1);
      //     }
      //   });
      // }
      localStorage.setItem("data", JSON.stringify(state));
    },
    removeLikedPhoto: (state, { payload }) => {
      state.likedPhotos.forEach((item, i) => {
        if (item.id == payload.id) {
          state.likedPhotos.splice(i, 1);
        }
      });
      localStorage.setItem("data", JSON.stringify(state));
    },
    addUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("data", JSON.stringify(state));
    },
  },
});

export const {
  updateQuery,
  updateTotal,
  updatePage,
  addLikedPhotos,
  removeLikedPhoto,
  addUser,
} = imgSlice.actions;
export default imgSlice.reducer;
