import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  ChakraProvider,
  Box,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../components/ColorModeSwitcher"
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import theme from '../themes'
import {useThemeManager} from '../state/user/hooks'
export const App = () => {

  const [currTheme] = useThemeManager()
  console.log(currTheme)
  const color = `text.${currTheme}`
  const background = `background.${currTheme}`
  return (
  <Suspense fallback={null}>
    <Route component={GoogleAnalyticsReporter} />
    <ChakraProvider theme={theme}>
      <Box bg={background} w="100%" p={4} color={color}>
        <ColorModeSwitcher></ColorModeSwitcher>
        {currTheme}
      </Box>
    </ChakraProvider>
  </Suspense>
)}
