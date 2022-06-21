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