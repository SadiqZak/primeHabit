import axios from "axios"

export const getAllHabitsService = ({encodedToken})=>{
    return axios.get('/api/habits',
    {
        headers:{
            authorization: encodedToken,
        }
    }
)
}

export const addUserHabitService = ({encodedToken, habitData})=>{
    return axios.post('/api/habits',{
        habit:habitData
    }, {
        headers:{
            authorization: encodedToken
        }
    })
}

export const deleteHabitService = ({encodedToken, habitId})=>{
    return axios.delete(`/api/habits/${habitId}`,{
        headers:{
            authorization: encodedToken
        }
    })
}

export const editHabitService = ({encodedToken, habitId, habitData})=>{
    return axios.post(`/api/habits/${habitId}`,{
        habit:habitData
    },{
        headers:{
            authorization:encodedToken
        }
    })
}