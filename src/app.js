import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Hud from './components/Hud';
import SearchBox from './components/SearchBox';
import Navigations from './components/Navigations';
import Menu from './components/Menu';
import Menu2 from './components/Menu2';
import IndexPage from './components/IndexPage';
import ListingPage from './components/ListingPage';
import DetailPage from './components/DetailPage';

//import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './js/salvattore.js';

const ExpenseDashboardPage = () => (
    <div>
        This is my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is my add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is my edit expense component
    </div>
);

const NotFoundPage = () => (
    <div>
        404 Not Found
    </div>
);

const Header = () => (
    <header>
        <Hud />
        <SearchBox />
        <hr className="line"></hr>
        <Navigations />
        <Menu />
        
        
        
        { /*<h1>Expensify</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Expense</Link>
        <Link to="/edit">Edit Expense</Link> */ }
    </header>
);

const WebContent = (
    <BrowserRouter>
        <div>
            <Header />
            <section>
                <Switch>
                    <Route path='/' component={IndexPage} exact={true} />
                    <Route path='/:section' component={ListingPage} exact={true} />
                    <Route path='/:parent_section/:section' component={ListingPage} exact={true} />
                    <Route path='/:section/:news_title/:id' component={DetailPage} exact={true} />
                    <Route component={NotFoundPage} />
                </Switch>
            </section>
        </div>
    </BrowserRouter>
);

ReactDOM.render(WebContent, document.getElementById('app'));