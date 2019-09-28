import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import moment from 'moment';
import Ads from './Ads';

const today = moment().format('MMMM DD YYYY');

class RightSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            citizenJournalist: (props.citizenJournalist)?false:true
        };
    }
    
    render() { 
      return (
        <div>
            <div className="news-box-small p-right" id="small">
                <div className="news-banner"> 
                    <Link to="http://epaper.heraldgoa.in/" target="_blank"><img src="/img/epaper.jpg" className="news-img"/></Link>
                </div>
                <Link to="#">
                    <div className="news-content-box">
                        <h2>Daily Edition </h2>
                        <p>{today}</p>
                    </div>
                </Link>
            </div>
            <Ads width={300} height={250} slot={3513430809} />
            {
                (this.state.citizenJournalist && 
                    <div className="news-box-small p-right mob-left" id="small">
                        <div className="news-banner"> 
                            <Link to="/Citizen-Jornalist"><img src="/img/citizen.jpg" className="news-img"/> </Link>
                        </div>
                        <Link to="/Citizen-Jornalist" target="_self">
                            <div className="news-content-box">
                                <h2>Citizen Journalist​</h2>
                            </div>
                        </Link>
                    </div>
                )
            }
            <div className="news-box-small p-right mob-right" id="small">
                <div className="news-banner" id="inbox"> 
                    <img src="/img/inbox.jpg" className="news-img"/> 
                    <Link to="/Subscribe-Newsletter" className="inbox-btn">Get oHeraldo in your inbox</Link> 
                </div>
                <Link to="/Subscribe-Newsletter" target="_self">
                    <div className="news-content-box">
                        <h2>Subscribe Newsletter ​</h2>
                        <p>Subscribe to our newsletter that you can receive at 7am, every morning</p>
                    </div>
                </Link>
            </div>
            <Ads width={300} height={600} slot={2394985205} />
            <div className="news-box-small p-right" id="small">
                <div className="news-banner"> 
                    <Link to="#">
                        <img src="/img/newspaper.jpg" className="news-img"/>
                    </Link> 
                </div>
                <Link to="#">
                    <div className="news-content-box">
                        <h2>Online Classifieds​</h2>
                        <p>Book Your advertisements ONLINE</p>
                    </div>
                </Link>
            </div>
        </div>
      );
    }
}
  
export default RightSide;