import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
initialState = { theme: "dark", news: [] };

const mySlice = createSlice({
    name: "mySlice",
    initialState: initialState,
    reducers: {
        toggleTheme: (state, action) => {
            if (state.theme === "light") {
                state.theme = "dark"
            } else state.theme = "light";
        },
        setNews: (state, action) => {
            state.news = action.payload
        }

    }

})


export const { toggleTheme, setNews } = mySlice.actions;
export default mySlice.reducer;