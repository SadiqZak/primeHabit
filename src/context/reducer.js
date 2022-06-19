export const reducerFunc = (state, action)=>{
    switch(action.type){
        case "initialState":{
            return{
                ...state,
                habits: action.payload.habits
            }
        }
        case "addUserHabit":{
            console.log(action.payload)
            return{
               ...state 
            }
        }
        default:{
            return state
        }
    }
}
