import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

const today = moment().format('dddd, MMM DD, YYYY').toUpperCase();

const Navigations = () => (
    <div className="navigations">
        <div className="container">
            <div className="brand-info"> <Link to="" className="search-btn"><img src="/img/icons/8.jpg" className="search"/></Link> <Link to="" className="menu-btn"><img src="/img/icons/9.jpg" className="bars"/></Link>
                <div className="date"> <img src="/img/logo.jpg" className="logo" />
                    <h4>{today}</h4>
                </div>
                <div className="right-links">
                    <ul className="socials">
                        <li> 
                            <span>
                                <i>follow us on</i> &nbsp;
                                <FontAwesome name="caret-right" className="fa fa-caret-right" aria-hidden="true"></FontAwesome>
                            </span> 
                            <Link to="/"><FontAwesome name="facebook" className="fa fa-facebook" aria-hidden="true"></FontAwesome></Link> 
                            <Link to="/"><FontAwesome name="twitter" className="fa fa-twitter" aria-hidden="true"></FontAwesome></Link> 
                            <Link to="/"><FontAwesome name="youtube-play" className="fa fa-youtube-play" aria-hidden="true"></FontAwesome></Link> 
                        </li>
                        <li><img src="/img/line.jpg" className="pie"/></li>
                        <li> 
                            <span>
                                <i>reach us on app store</i> &nbsp;
                                <FontAwesome name="caret-right" className="caret-right" aria-hidden="true"></FontAwesome>
                            </span> 
                            <Link to="/"><img src="/img/icons/4.jpg" className="icon"/></Link> 
                            <Link to="/"><img src="/img/icons/5.jpg" className="icon"/></Link> 
                        </li>
                        <li><img src="/img/line.jpg" className="pie"/></li>
                        <li className="tools"> 
                            <Link to="/" className="deals">DEALS</Link> 
                            <Link to="/"><img src="/img/icons/6.jpg" className="paper"/></Link> 
                            <Link to="/"><img src="/img/icons/7.jpg" className="pen"/></Link> 
                            <Link to="/"><img src="/img/icons/8.jpg" className="serach"/></Link> 
                            <Link to="/"><img src="/img/icons/9.jpg" className="bars"/></Link> 
                        </li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        </div> 
    </div>
);

export default Navigations;