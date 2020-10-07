import React from "react";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import Home from '../components/Home';
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
                        >Home
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
                    <Home/>
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