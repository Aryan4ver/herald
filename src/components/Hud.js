import React from 'react';
import ReactDOM from 'react-dom';
import {isMobile} from 'react-device-detect';
import Ads from './Ads';

const IsMobile = (isMobile)?1:2;

class Hud extends React.Component {

    /*componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }*/

    render() { 
        return (
            <div>
                <div className='thetop'></div>
                <div className="container">
                        <div className="adv">
                            <div className="adv-box">
                                {IsMobile==2 && <Ads width={728} height={90} slot={5106150000} header={1} /> }
                            </div>            
                        </div> 
                </div>
            </div>
        );
    }
}
      
export default Hud;