import { createContext, useReducer } from "react";
import { addUserHabitService, deleteHabitService, editHabitService, getAllHabitsService } from "../services/general-services";
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

    const deleteHabit = async({encodedToken, habitId})=>{
        // console.log("ID", habitId)
        try{
            const response = await deleteHabitService({encodedToken, habitId})
            // console.log(response)
            dispatch({
                type:"deleteUserHabit",
                payload:{habits: response.data.habits}
            })
        }catch(err){
            console.error(err)
        }
    }

    const editHabit = async({encodedToken, habitData, habitId})=>{
        try{
            const response = await editHabitService({encodedToken, habitData, habitId})
            dispatch({
                type:"editUserHabit",
                payload:{habits: response.data.habits}
            })
        }catch(err){
            console.error(err)
        }
    }

    return(
        <HabitContext.Provider value={{state, dispatch, getAllHabits, addUserHabit, deleteHabit, editHabit}}>
            {children}
        </HabitContext.Provider>
    )
}

export {HabitProvider, HabitContext }