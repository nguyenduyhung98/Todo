import React from 'react'
import { StyleSheet } from 'react-native'
import { TabNavigatior } from './src/navigation/index'
import CardProvider from './src/context/CardContext'
import axios from 'axios'

axios.defaults.baseURL ='https://d06ci.sse.codesandbox.io'

const App = () => {
    return (
      <CardProvider>
        <TabNavigatior />
      </CardProvider>
    );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default App;
