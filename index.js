import { registerRootComponent } from "expo";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import todoApp from "./reducer";
import App from "./components/App";
import AppContainer from "./AppContainer";
// import { getFirestore } from "redux-firestore";
// import { getFirebase } from "react-redux-firebase";

const store = createStore(
  todoApp,
  {},
  applyMiddleware(reduxThunk)
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

registerRootComponent(Root);
