import { registerRootComponent } from 'expo';
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducer'
import App from './components/App'
import AppContainer from './AppContainer'

const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

const Root = () => {
    return(
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
}

registerRootComponent(Root);