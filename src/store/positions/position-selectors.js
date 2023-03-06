export const selectAllPositions = state => state.position;

export const selectVisiblePositions = (state, filters = []) => {
    if(filters.length === 0) return state.position;
    return state.position.filter(pos => {
        const posFilters = [].concat(pos.role, pos.level, ...pos.language, ...pos.tools);

        return filters.every(filter => posFilters.includes(filter))
    })
}