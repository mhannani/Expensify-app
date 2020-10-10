import React from "react";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import ExpenseDashboard from '../components/ExpenseDashboard';
import About from '../components/About'
import NoMatch from "../components/NoMatch";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";

const AppRouter = ()=>(
    <Router>
        <div>
            <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
                <ul className={'navbar-nav mr-auto'}>
                    <li className={'nav-item'}>
                        <NavLink to="/" exact className={'nav-link'}
                                 activeClassName="selected"
                        >Dashboard
                        </NavLink>
                    </li>
                    <li className={'nav-item'}>
                        <NavLink to="/addExpense"
                                 className={'nav-link'}
                                 activeClassName="selected"
                        >Add expense
                        </NavLink>
                    </li>
                    <li className={'nav-item'}>
                        <NavLink to="/editExpense"
                                 className={'nav-link'}
                                 activeClassName="selected"
                        >Edit expense
                        </NavLink>
                    </li>
                    <li className={'nav-item'}>
                        <NavLink to="/about"
                                 className={'nav-link'}
                                 activeClassName="selected"
                        >About
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/about" component={About} exact={true} />
                <Route path="/addExpense" component={AddExpense} />
                <Route path="/editExpense/:id" component={EditExpense} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter