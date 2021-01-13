import { createAction } from '@reduxjs/toolkit'

export const updateTheme = createAction<{ theme: string }>('user/updateTheme')

