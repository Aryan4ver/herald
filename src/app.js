import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import FontAwesome from 'react-fontawesome';
import Hud from './components/Hud';
import SearchBox from './components/SearchBox';
import Navigations from './components/Navigations';
import Menu from './components/Menu';
import Menu2 from './components/Menu2';
import IndexPage from './components/IndexPage';
import ListingPage from './components/ListingPage';
import DetailPage from './components/DetailPage';
import SearchPage from './components/SearchPage';
import AdvertisementPage from './components/AdvertisementPage';
import ContactPage from './components/ContactPage';
import CitizenJournalistPage from './components/CitizenJournalistPage';
import SubscribeNewsletterPage from './components/SubscribeNewsletterPage';
import ObituariesPage from './components/ObituariesPage';
import Footer from './components/Footer';
import AboutUsPage from './components/AboutUsPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import DisclaimerPage from './components/DisclaimerPage';
import ArchivesPage from './components/ArchivesPage';

//import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

export const history = createBrowserHistory();

const NotFoundPage = () => (
    <div className="news-content" id="adver-page">
        <div className="container">
            <div className="ad-box not-found">
                <h1>404 Page Not Found</h1>
                <p>Sorry, the page you are looking for could not be found</p>
            </div>
        </div>
    </div>
);

const handleSearchClick = () => {
    $(".search-box").slideToggle(200);
};

const handleMenuClick = () => {
    $(".menu-tab").slideToggle(300);
};

const handleSideMenuClose = () => {
    $(".menu-tab").slideToggle(300);
};


const Header = () => (
    <header>
        <Hud />
        <SearchBox />
        <hr className="line"></hr>
        <Navigations handleSearchClick={handleSearchClick} handleMenuClick={handleMenuClick} />
        <Menu />
        <Menu2 handleSideMenuClose={handleSideMenuClose} />

        
        { /*<h1>Expensify</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Expense</Link>
        <Link to="/edit">Edit Expense</Link> */ }
    </header>
);

const WebContent = (
    <Router history={history}>
        <div>
            <Header />
            <section>
                <Switch>
                    <Route path='/' component={IndexPage} exact={true} />
                    <Route path='/search/:search_text' component={SearchPage} exact={true} />
                    <Route path='/Archives' component={ArchivesPage} exact={true} />
                    <Route path='/Advertisement' component={AdvertisementPage} exact={true} />
                    <Route path='/About-Us' component={AboutUsPage} exact={true} />
                    <Route path='/Terms-Of-Use' component={TermsOfUsePage} exact={true} />
                    <Route path='/Privacy-Policy' component={PrivacyPolicyPage} exact={true} />
                    <Route path='/Disclaimer' component={DisclaimerPage} exact={true} />
                    <Route path='/Contact' component={ContactPage} exact={true} />
                    <Route path='/Citizen-Jornalist' component={CitizenJournalistPage} exact={true} />
                    <Route path='/Subscribe-Newsletter' component={SubscribeNewsletterPage} exact={true} />
                    <Route path='/Obituaries' component={ObituariesPage} exact={true} />
                    <Route path='/:section' component={ListingPage} exact={true} />
                    <Route path='/:parent_section/:section' component={ListingPage} exact={true} />
                    <Route path='/:section/:news_title/:id' component={DetailPage} exact={true} />
                    <Route path='/:parent_section/:section/:news_title/:id' component={DetailPage} exact={true} />
                    <Route component={NotFoundPage} />
                </Switch>
            </section>
            <Footer />
        </div>
    </Router>
);

//export default App;
ReactDOM.render(WebContent, document.getElementById('app'));