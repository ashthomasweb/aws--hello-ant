import { createContext, useReducer } from 'react'
import { mainReducer } from './MainReducer'

export const MainContext = createContext()

const MainState = (props) => {
    const initialState = {
        user: 'Guest',
        message: 'Welcome',
        currentPage: 'Dashboard',
        collapsed: false,
    }

    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <MainContext.Provider value={{state, dispatch}}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainState;

// END of document
