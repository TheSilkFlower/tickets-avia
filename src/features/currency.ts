import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrencyCode = 'RUB' | 'USD' | 'EUR';

type CurrencyState = {
    curr: CurrencyCode
}

const initialState: CurrencyState = {
    curr: 'RUB'
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        changeCurrency: (state, action: PayloadAction<CurrencyCode>) => {
            state.curr = action.payload;
        }
    },
})

export const { changeCurrency } = currencySlice.actions
export default currencySlice.reducer