import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './features/blogSlice'
import {blogsApi} from './services/blogsAPi'
import {setupListeners} from '@reduxjs/toolkit/dist/query'

export const store=configureStore({
    reducer:{
        blogReducer,
        [blogsApi.reducerPath]:blogsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([blogsApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
