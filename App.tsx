import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  )
}

export default App;