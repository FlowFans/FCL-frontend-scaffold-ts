import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, AppState } from '../index'
import {
  updateTheme,
} from './actions'





export function useThemeManager(): [string | null, (t:string) => void] {
  const dispatch = useDispatch<AppDispatch>()
  const theme = useSelector<AppState, AppState['user']['theme']>(state => state.user.theme)

  const changeTheme = useCallback((theme: string) => {
    dispatch(updateTheme({theme}))
  }, [theme, dispatch])
  return [theme, changeTheme]
}


