import { createContext, useReducer } from "react";
import { addUserHabitService, getAllHabitsService } from "../services/general-services";
import { reducerFunc } from "./reducer";

const HabitContext = createContext()

const HabitProvider = ({children})=>{
    const [state, dispatch]= useReducer(reducerFunc, {
        habits:[]
    })

    const getAllHabits = async({encodedToken})=>{
        try{
            const response = await getAllHabitsService({encodedToken})
            dispatch({
                type:"initialState",
                payload:{habits: response.data.habits}
            })
        }catch(err){
            console.error(err)
        }
    }

    const addUserHabit = async({encodedToken, habitData})=>{
        try{
            const response = await addUserHabitService({encodedToken, habitData})
            dispatch({
                type:"addUserHabit",
                payload:{habits: response.data.habits}
            })
            // console.log(response.data.habits)
        }catch(err){
            console.error(err)
        }
    }

    return(
        <HabitContext.Provider value={{state, dispatch, getAllHabits, addUserHabit}}>
            {children}
        </HabitContext.Provider>
    )
}

export {HabitProvider, HabitContext }