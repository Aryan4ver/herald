import React from 'react';
import ReactDOM from 'react-dom';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const Twitter = () => (
    <div className="news-box-small p-reset" id="small">
        <div className="news-banner"> 
            <img src="img/twitter.jpg" className="news-img"/>
        </div>
        <div className="news-content-box"> 
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="oheraldogoa"
                noHeader
                noBorders
                Transparent
                options={{height: 400}}
            />
        </div>
    </div>
);

export default Twitter;