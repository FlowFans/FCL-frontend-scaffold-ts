import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  ChakraProvider,
  Box,
  useColorMode
} from "@chakra-ui/react"
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import theme from '../themes'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from './home'
import Wallet from './wallet'
import Config from './config'


export const App = () => {

  const { colorMode } = useColorMode()
  const color = `text.${colorMode}`
  const background = `background.${colorMode}`
  return (
    <Suspense fallback={null}>
      <Route component={GoogleAnalyticsReporter} />
      <ChakraProvider theme={theme}>
        <Box bg={background} w="100%" minH="100vh" color={color}>
          <Header />
          <Switch>
            <Route exact strict path="/wallet" component={Wallet} />
            <Route exact strict path="/config" component={Config} />
            <Route exact strict component={Home} />
          </Switch>
          <Footer />
        </Box>
      </ChakraProvider>
    </Suspense>
  )
}
