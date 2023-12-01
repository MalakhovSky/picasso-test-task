import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postApi} from "../Pages/Posts/postsApi";

const rootReducer= combineReducers({
  [postApi.reducerPath]:postApi.reducer
})

export const setupStore=()=> {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMidleware) => getDefaultMidleware().concat(postApi.middleware)
  })
}