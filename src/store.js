import { configureStore } from "@reduxjs/toolkit"

import { positionReducer } from "features/positions/position-slice" 
import { filtersReducer } from "features/filter/filter-slice.js" 

export const store = configureStore({
    reducer: {
        position: positionReducer,
        filters: filtersReducer
    },
    devTools: true,
})