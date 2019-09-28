import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {isMobile} from 'react-device-detect'; 
import Ads from './Ads';

const IsMobile = (isMobile)?1:2;

const handleScrollTopButton = () => {
    $("html,body").animate({scrollTop:$(".thetop").offset().top },"1000");
};

const Footer = () => (
    <footer>
        <div className="footer-menu">
            <div className="container"> 
                <ul>
                <li><Link to="/Advertisement">Advertise</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
                <li><Link to="/About-Us">About Us</Link></li>
                <li><Link to="/Terms-Of-Use">Terms of Use</Link></li>
                <li><Link to="/Privacy-Policy">Privacy Policy</Link></li>
                <li><Link to="/Disclaimer">Disclaimer</Link></li>
                </ul>
            </div>
        </div>
        <div className="container">
            <h5>© M/s Herald Publications Pvt Ltd</h5>
            <p>AF/1-4, Campal Trade Center,<br />
                Behind Military Hospital, Panjim -Goa 403001.<br />
                Telephone: +91-832-2224202, +91-832-6518500 <br />
                Fax: 2225622 <br />
                Email: online@herald-goa.com</p>
            <ul className="footer-links">
                <li><Link to="//dainikherald.com/" target="_blank"><img src="/img/dainik-logo.jpg" /></Link></li>
                <li><Link to="//www.amchoavaz.in/" target="_blank"><img src="/img/amcho-avaz.jpg" /></Link></li>
                <li><Link to="//www.hcngoa.com/" target="_blank"><img src="/img/hcn-logo.jpg" /></Link></li>
                <li><Link to="//epaperjuniorherald.in/" target="_blank"><img src="/img/jr-herald.jpg" /></Link></li>
            </ul>
            
            <ul className="socials">
                <li>
                    <Link to="//www.facebook.com/oheraldogoa" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></Link> 
                    <Link to="//twitter.com/oheraldogoa" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></Link> 
                    <Link to="//www.youtube.com/channel/UC7J_xpeCOZ7OMFC__2VF1pw" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link> 
                    <Link to="#" className="deals">DEALS</Link> 
                    <Link to="//epaper.heraldgoa.in/" target="_blank"><img src="/img/icons/6.jpg" className="paper"/></Link> 
                    <Link to="/Citizen-Jornalist"><img src="/img/icons/7.jpg" className="pen"/></Link>
                </li>
            </ul>
        </div>
        <div className="copyright">
            <p>Copyrights 2019. M/s herald Pulications. Designed & Developed by<Link to="//www.teaminertia.com/" target="_blank"> Team Inertia Technologies </Link></p>
        </div>
        <div className='scrolltop'>
            <div className='scroll icon' onClick={handleScrollTopButton}><FontAwesome name="4x fa-angle-up"></FontAwesome></div>
        </div>
        {IsMobile==1 && <Ads width={320} height={100} slot={5760313204} footer={1} /> } 
    </footer>
);

export default Footer;