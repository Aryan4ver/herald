import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import RightSide from './RightSide';

class AboutUsPage extends React.Component {

    render() { 
        return (
            <div className="news-content" id="citizen-page">
                <div className="container">
                    <div className="col-9">
                    <div className="newsletter-box static-content">
                    <h1>Disclaimer</h1>
        <p>Herald Publications Pvt. Ltd. maintains www.heraldgoa.in (hereinafter "website") to provide classified service through the web thereby allowing consumers to post/view advertisements subject to certain terms and condition on the website. This service is provided on an "As Is" basis and is continually under development.</p>
        <p>Though we work very hard to keep correct and updated information, Herald Publications Pvt Ltd. its holding, subsidiary, group companies, affiliates, third party content providers or licensors and each of their respective officers, directors, employees, representatives, licensees and agents (hereinafter altogether referred to as "HTML") do not make any representations or warranties of any kind, express or implied, about the completeness, accuracy, authenticity, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose nor does HTML make any warranty that the website will be uninterrupted or error free or as to the results that may be obtained from use of the website or the information contained therein. Any reliance you place on such information/service/products/ graphics and/or the website is therefore purely and strictly at your own risk and consequences.</p>
        <p>In no event will HTML be liable for any loss or damage, including without limitation, direct, indirect, incidental, special, consequential or punitive loss or damages or any loss or damage whatsoever arising out of reliance on any information contained in the website, the use of or inability to use the website or any service contained therein.</p>
        <p>Through this website you are able to link to other websites which are not under the control of "Herald Publications Pvt. Ltd". We have no control over the nature, content and availability of those sites or the services/products provided. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
        <p>Every effort is made to keep the website up and running smoothly. However, HTML takes no responsibility for and will not be liable for the website being temporarily unavailable due to technical issues beyond its control.</p>
        </div>            
        </div>
                    <div className="col-3" >
                        <RightSide/>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
};

export default AboutUsPage;