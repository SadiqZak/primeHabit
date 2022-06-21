export const reducerFunc = (state, action)=>{
    switch(action.type){
        case "initialState":{
            return{
                ...state,
                habits: [...action.payload.habits]
            }
        }
        case "addUserHabit":{
            return{
               ...state,
               habits: [...action.payload.habits]
            }
        }
        default:{
            return state
        }
    }
}
