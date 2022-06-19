import { createContext, useReducer } from "react";
import { reducerFunc } from "./reducer";

const HabitContext = createContext()

const HabitProvider = ({children})=>{
    const [state, dispatch]= useReducer(reducerFunc, {
        habits:[]
    })
    return(
        <HabitContext.Provider value={{state, dispatch}}>
            {children}
        </HabitContext.Provider>
    )
}

export {HabitProvider, HabitContext }