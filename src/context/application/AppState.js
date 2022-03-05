import React, {useReducer} from 'react';
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";


const AppState = () => {

    return (
        <AppContext.Provider value={{currentUser}}/>
        )
    }
        
export default AppState