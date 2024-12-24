import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        value: 'RUB'
    },
    reducers: {
        convertToRub: (state) => {
            state.value = 'RUB'
        },
        convertToUsd: (state) => {
            state.value = 'USD'
        },
        convertToEur: (state) => {
            state.value = 'EUR'
        },
    },
})

export const { convertToRub, convertToUsd, convertToEur } = currencySlice.actions
export default currencySlice.reducer