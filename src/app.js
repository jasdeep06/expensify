import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from "./routes/AppRouter"
import configureStore from "./store/configureStore"
import {addExpense} from "./actions/expenses"
import {setTextFilter} from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"

const store=configureStore();


store.subscribe(()=>{
    
   const state=store.getState()
   console.log(getVisibleExpenses(state.expenses,state.filters))
})



store.dispatch(addExpense({description:"January Water Bill",amount:300}))
store.dispatch(addExpense({description:"January Gas Bill",amount:400}))
store.dispatch(setTextFilter("Water"))


const appRoot=document.getElementById("app")

ReactDOM.render(<AppRouter/>,appRoot)