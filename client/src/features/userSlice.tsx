import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  title:string,
  description:string,
  image:string
  }

  const initialState: UserState ={
    title:"",
    description:"",
    image:""
  } 

 const userSlice = createSlice({
      name:'users',
      initialState,
      reducers:{
          addUser: (state:any,  action:PayloadAction<string>)=>{
              state=action.payload;
          }
      }
  });

  export const {addUser} = userSlice.actions
  export default userSlice.reducer;