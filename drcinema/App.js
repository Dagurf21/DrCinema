// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
    console.log("app.js")
    return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
    );
}
