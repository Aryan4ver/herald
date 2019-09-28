import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const OtherNews = (props) => (
    <div className="mob-top-news">
        <div className="news-box-small p-reset" id="small">
            <div className="news-banner bck-reset">
                <div className="tag top">Related news</div>
                <ul>
                    {props.othernews.map(post =>
                        <li key={post.ID}><Link to={`/${post.URL}`} params={{ q: post.URL }} target="_self">{post.NAME}</Link></li>
                    )}
                </ul>
            </div>
        </div>
    </div>
);

export default OtherNews;