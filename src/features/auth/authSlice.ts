import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { User } from "../../app/types";

type Auth = {
    currentUser: User | null,
    logStatus: 'unknown' | 'success' | 'failure',
}

const authAdapter = createEntityAdapter<Auth>({
    
});

const authSlice = createSlice({
    name: 'auth',
    initialState: authAdapter.getInitialState(),
    reducers: {},
    extraReducers(builder) {
        
    },
})