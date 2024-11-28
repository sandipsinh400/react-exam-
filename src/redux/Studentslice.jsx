import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState={
    userList:[]
}

var URL='http://localhost:5000/user'


export const addstudent=createAsyncThunk('/user/addstudent',async(data)=>{

    console.log(data);
    const res= await axios.post(URL,data)
    return res.data
    
})
export const viewstudent=createAsyncThunk('user/viewstudent',async()=>{
    const res= await axios.get(URL)
    return res.data
})

export const deletestudent= createAsyncThunk('user/deletestudent',async(id)=>{
    const res= await axios.delete(`${URL}/${id}`)

    return res.data.id
})

export const updatestudent=createAsyncThunk('user/updatestudent',async(data)=>{
    const res= await axios.put(`${URL}/${data.id}`,data)

    return res.data
})

const userslice=createSlice({
    name:"counter",
    initialState,
    extraReducers:((builder)=>{
        builder
        .addCase(addstudent.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.userList.push(action.payload)
        })
        .addCase(viewstudent.fulfilled,(state,action)=>{
            state.userList=action.payload
        })
        .addCase(deletestudent.fulfilled,(state,action)=>{
            const filterdata=state.userList.filter((user)=>{
                return user.id!==action.payload
            })
            state.userList=filterdata
        })

        .addCase(updatestudent.fulfilled,(state,action)=>{
            const {id}=action.payload
            const Index_std=state.userList.findIndex((user)=>{
                return user.id===id
            })
            if(Index_std!=-1){
                state.userList[Index_std]=action.payload
            }
        })
    })

})
export default userslice.reducer