import {createSlice} from '@reduxjs/toolkit'
import { UsersData } from '../FakeData'
export const userSlice = createSlice({
    name:"users",
    initialState:{value:UsersData},
    reducers:{
        addUser:(state,action)=>{
            //we will write here code for adding a user
            state.value.push(action.payload)
        },
        deleteUser:(state,action)=>{ //we will just pass user id
            state.value = state.value.filter((user)=>user.id!=action.payload.id)
        },
        updateUsername:(state,action)=>{//in action we will pass id of user and new username to udpate
            state.value.map((user)=>{
                if(user.id==action.payload.id){
                    user.username = action.payload.username
                }
            })
        }
    }
})

export const {addUser,deleteUser,updateUsername} = userSlice.actions
export default userSlice.reducer