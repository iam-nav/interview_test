import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./Css/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Pages/Homepage'
import Cart from "./Pages/cart"


const Main = () => {


    return (<BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/cart" component={Cart} />
        </Switch>
    </BrowserRouter>)
}



export default Main;