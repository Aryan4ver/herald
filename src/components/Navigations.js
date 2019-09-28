import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

const today = moment().format('dddd, MMMM DD, YYYY').toUpperCase();

const Navigations = (props) => (
    <div className="navigations">
        <div className="container">
            <div className="brand-info"> 
                <Link to="#" className="search-btn" onClick={props.handleSearchClick}>
                    <img src="/img/icons/8.jpg" className="search"/>
                </Link> 
                <Link to="#" className="menu-btn" onClick={props.handleMenuClick}>
                    <img src="/img/icons/9.jpg" className="bars"/>
                </Link>
                <div className="date"> <Link to="/"><img src="/img/logo.jpg" className="logo" /></Link>
                    <h4>{today}</h4>
                </div>
                <div className="right-links">
                    <ul className="socials">
                        <li> 
                            <span>
                                <i>follow us on</i> &nbsp;
                                <FontAwesome name="caret-right" aria-hidden="true"></FontAwesome>
                            </span> 
                            <Link to="//www.facebook.com/oheraldogoa" target="_blank">
                                <FontAwesome name="facebook" aria-hidden="true"></FontAwesome>
                            </Link> 
                            <Link to="//twitter.com/oheraldogoa" target="_blank">
                                <FontAwesome name="twitter" aria-hidden="true"></FontAwesome>
                            </Link> 
                            <Link to="//www.youtube.com/channel/UC7J_xpeCOZ7OMFC__2VF1pw" target="_blank">
                                <FontAwesome name="youtube-play" aria-hidden="true"></FontAwesome>
                            </Link> 
                        </li>
                        <li><img src="/img/line.jpg" className="pie"/></li>
                        <li> 
                            <span>
                                <i>reach us on app store</i> &nbsp;
                                <FontAwesome name="caret-right" aria-hidden="true"></FontAwesome>
                            </span> 
                            <Link to="//appsto.re/in/hYv-bb.i" target="_blank">
                                <img src="/img/icons/4.jpg" className="icon"/>
                            </Link> 
                            <Link to="//play.google.com/store/apps/details?id=in.ohedaldo.heraldo" target="_blank">
                                <img src="/img/icons/5.jpg" className="icon"/>
                            </Link> 
                        </li>
                        <li><img src="/img/line.jpg" className="pie"/></li>
                        <li className="tools"> 
                            <Link to="/" className="deals">DEALS</Link> 
                            <Link to="//epaper.heraldgoa.in/" target="_blank">
                                <img src="/img/icons/6.jpg" className="paper"/>
                            </Link> 
                            <Link to="/Citizen-Jornalist">
                                <img src="/img/icons/7.jpg" className="pen"/>
                            </Link> 
                            <Link to="#" onClick={props.handleSearchClick}>
                                <img src="/img/icons/8.jpg" className="serach"/>
                            </Link> 
                            <Link to="#" onClick={props.handleMenuClick}>
                                <img src="/img/icons/9.jpg" className="bars"/>
                            </Link> 
                        </li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        </div> 
    </div>
);

export default Navigations;