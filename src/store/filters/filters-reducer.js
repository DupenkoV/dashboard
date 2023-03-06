import { ADD_FILTER, DELETE_ALL_FILTERS, DELETE_FILTER } from "./filters-constans";

export const filtersReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_FILTER: {
            return [
                ...state,
                action.payload
            ]
        }
        case DELETE_FILTER: {
            return state.filter(item => item !== action.payload)
        }
        case DELETE_ALL_FILTERS: {
            return []
        }
        default: {
            return state
        }
    }
}