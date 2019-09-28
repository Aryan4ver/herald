import React from 'react';
import ReactDOM from 'react-dom';
import {isMobile} from 'react-device-detect';
import AdSense from 'react-adsense';

class Ads extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          width: props.width,
          height: props.height,  
          slot: props.slot,
          footer: (props.footer)?true:false,
          detail: (props.detail)?true:false,
          header: (props.header)?true:false
        };
    }

    componentDidMount () {
        //(window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        if(this.state.footer)
        { 
            return (
                <div className="mob-adbox">
                    {/*<ins className="adsbygoogle"
                    style={{ 'display':'inline-block', 'width':this.state.width, 'height':this.state.height }}
                    data-ad-client="ca-pub-8657336033133527"
                    data-ad-slot={this.state.slot}></ins>*/}
                    <AdSense.Google
                        client='ca-pub-8657336033133527'
                        slot={`'${this.state.slot}'`}
                        style={{ display: 'inline-block', 'width':'320', 'height':'100' }}
                    />
                </div>
            );
        }
        else if(this.state.detail)
        {
            if(isMobile)
            {
                return (
                    <AdSense.Google
                        client='ca-pub-8657336033133527'
                        slot='3513430809'
                        style={{ display: 'inline-block', 'width':'300', 'height':'250' }}
                    />
                );
            }
            else
            {
                return (
                    <AdSense.Google
                        client='ca-pub-8657336033133527'
                        slot={`'${this.state.slot}'`}
                        style={{ display: 'block' }}
                        layout='in-article'
                        format='fluid'
                    />
                );
            }
        }
        else if(this.state.header)
        {
            return (
                <AdSense.Google
                    client='ca-pub-8657336033133527'
                    slot={`'${this.state.slot}'`}
                    style={{ display: 'inline-block', 'width':this.state.width, 'height':this.state.height }}
                />
            );
        }
        else
        {
            return (
                <div className="news-box-small p-right" id="small">
                <AdSense.Google
                    client='ca-pub-8657336033133527'
                    slot={`'${this.state.slot}'`}
                    style={{ display: 'inline-block', 'width':this.state.width, 'height':this.state.height }}
                /> 
                    {/*<ins className="adsbygoogle"
                    style={{ 'display':'inline-block', 'width':this.state.width, 'height':this.state.height }}
                    data-ad-client="ca-pub-8657336033133527"
            data-ad-slot={this.state.slot}></ins>*/ }
                </div>
            );
        }
    }
}
      
export default Ads;