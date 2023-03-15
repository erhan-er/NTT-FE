import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = "https://honey-badgers-ecommerce.glitch.me/products";

const initialState = {
    items : [],
    favorite: [],
    filtered: [],
    isLoading: true,
}

export const getItems = createAsyncThunk('items/getItems', () => {
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
});

const slice = createSlice({
    name: 'itemlist',
    initialState,
    reducers: {
        favoriteItem: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find(item => item.id === id);
            if(item) {
                item.favorite = !item.favorite;
            }
        },
        filterItems: (state, action) => {
            const { category } = action.payload;
            state.filtered = state.filtered.filter(item => item.category === category);
        },
    },
    extraReducers: {
        [getItems.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
            state.filtered = action.payload;
        },
    }
});

export const { favoriteItem, filterItems } = slice.actions;
export default slice.reducer;