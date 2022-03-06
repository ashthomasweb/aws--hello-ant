export const mainReducer = (state, action) => {
    switch (action.type) {
        case "SET_PAGETITLE":
            return {
                ...state,
                currentPage: action.payload
            }
        case "TOG_COLLAPSE":
            return {
                ...state,
                collapsed: !state.collapsed
            }
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}