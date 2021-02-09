import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import store from "./store/index"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme } from "./styles/index"
import Routes from "./routes/index"
import { signinAction } from "./store/actions/authActions";


// Check if user already signed-in before and if so sign-in with stored access token
const currentUserString = localStorage.getItem("currentUser")
if (currentUserString) {
    const currentUser = JSON.parse(currentUserString)
    store.dispatch(signinAction(currentUser.user, currentUser.access, currentUser.refresh, true))
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
