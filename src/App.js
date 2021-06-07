import React from "react";
import {Provider} from 'react-redux';
import LoginScreen from "./screens/LoginScreen";
import {MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import DashboardScreen from "./screens/Dashboard";
import theme from "./styles/theme";
import store from "./store/store";
let token = sessionStorage.getItem('token');
console.log(token)

function PrivateRoute({ path, component:Component, ...rest}){
    let token = sessionStorage.getItem('token');
    console.log(token)
    if (true) {
        return <Route path={path} component={() => <Component />} {...rest} />
    }else{
        return <Redirect to={'/'} {...rest} />
    }
}

function App() {
    
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={LoginScreen} />
                        <PrivateRoute exact path={"/dashboard"} component={DashboardScreen} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        </Provider>
  );
}

export default App;
