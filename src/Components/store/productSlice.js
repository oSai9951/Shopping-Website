import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchProduct = createAsyncThunk("fetchProduct", async (category) => {
    const url = `https://fakestoreapi.com/products${(category == "All" || category == " ") ? " " : `/category/${category}`}`;
    const response = await axios.get(url);
    const data =  response.data;
   
      return data;
});


const initialState = {
    isLoading: false,
    data: [],
    isError: false,
    search: [],
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        searching(state, action) {
            if (typeof action.payload === 'string') {
                const searchTerm = action.payload.toLowerCase();
                state.search = state.data.filter((item) =>
                    item.title.toLowerCase().includes(searchTerm)
                );
            } else {
                state.search = [];
            }
        }
    } ,
   

    extraReducers(builder) {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data=action.payload;
            console.log("inside productSlice", state.data)
            state.isError = false
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.error = true;

        });
    }
});

export default productSlice.reducer;
export const { searching } = productSlice.actions
