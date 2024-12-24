import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../features/currency";

export default configureStore({
    reducer: {
        currency: currencyReducer
    }
})