import { createReducer } from '@reduxjs/toolkit'
import { updateVersion } from '../global/actions'
import {
  updateTheme,
} from './actions'

const currentTimestamp = () => new Date().getTime()

export interface UserState {
  theme: string  // the user's choice for dark mode or light mode
  timestamp: number
}


export const initialState: UserState = {
  theme: '',
  timestamp: currentTimestamp()
}

export default createReducer(initialState, builder =>
  builder
    .addCase(updateVersion, state => {

    })
    .addCase(updateTheme, (state, action) => {
      state.theme = action.payload.theme
      state.timestamp = currentTimestamp()
    })

)
