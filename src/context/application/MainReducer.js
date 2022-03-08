
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
            let userPerm
            switch (action.payload) {
                case "California Wind Farms":
                    userPerm = 1
                    break
                case "Oregon Renewables":
                    userPerm = 1
                    break
                default:
                    userPerm = 0 
            }
            return {
                ...state,
                user: action.payload,
                userPerm: userPerm
            }
        default:
            return state
    }
}

// END of document
