import { ADD_FILTER, DELETE_ALL_FILTERS, DELETE_FILTER } from "./filters-constans";

export const addFilter = (payload) => ({
    type: ADD_FILTER,
    payload
});

export const deleteFilter = (payload) => ({
    type: DELETE_FILTER,
    payload
});

export const deleteAllFilters = () => ({
    type: DELETE_ALL_FILTERS,
});