import { createContext, useReducer } from 'react'
import { mainReducer } from './MainReducer'

export const MainContext = createContext()

const MainState = (props) => {
    const initialState = {
        user: 'Guest',
        userPerm: 1,
        message: 'Welcome',
        currentPage: 'Dashboard',
        collapsed: false,
    }

    const [state, dispatch] = useReducer(mainReducer, initialState)
    const value = { state, dispatch}

    return (
        <MainContext.Provider value={value}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainState;

// END of document
