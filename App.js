import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/helper/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducer';
import thunk from 'redux-thunk';


const store = createStore(reducers, applyMiddleware(thunk));



function App() {



  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation></Navigation>
      </NavigationContainer>
    </Provider>
  );
};


export default App;