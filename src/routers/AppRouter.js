import React from "react";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import ExpenseDashboard from '../components/ExpenseDashboard';
import About from '../components/About'
import NoMatch from "../components/NoMatch";
import Users from "../components/Users";

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
                        <NavLink to="/about"
                                 className={'nav-link'}
                                 activeClassName="selected"
                        >About
                        </NavLink>
                    </li>
                    <li className={'nav-item'}>
                        <NavLink to="/users"
                                 className={'nav-link'}
                                 activeClassName="selected"
                        >Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact>
                    <ExpenseDashboard/>
                </Route>
                <Route path="/about" exact>
                    <About/>
                </Route>
                <Route path="/users" exact>
                    <Users/>
                </Route>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </div>
    </Router>
);

export default AppRouter