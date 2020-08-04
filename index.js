import { registerRootComponent } from 'expo';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducer'
import App from './components/App'

const store = createStore(todoApp);

const Root = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

registerRootComponent(Root);