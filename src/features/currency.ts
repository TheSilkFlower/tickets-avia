import { createSlice } from "@reduxjs/toolkit";

interface CurrencyState {
    value: 'RUB' | 'USD' | 'EUR'
}

const initialState: CurrencyState = {
    value: 'RUB'
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
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