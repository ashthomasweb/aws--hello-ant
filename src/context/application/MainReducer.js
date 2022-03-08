
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
            let dataSet
            switch (action.payload) {
                case "California Wind Farms":
                    userPerm = 1
                    dataSet = 'Cal'
                    break
                case "Oregon Renewables":
                    userPerm = 1
                    dataSet = 'Ore'
                    break
                default:
                    userPerm = 0 
            }
            return {
                ...state,
                user: action.payload,
                userPerm: userPerm,
                dataSet: dataSet
            }
        default:
            return state
    }
}

// END of document
