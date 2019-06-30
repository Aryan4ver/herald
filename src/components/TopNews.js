import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const TopNews = (props) => (
    <div className="news-box-small p-reset" id="small">
        <div className="news-banner bck-reset">
            <div className="tag top">top news</div>
        </div>
        <div className="news-content-box">
            <ul>
            {props.topnews.map(post =>
                <li key={post.ID}><Link to={`/${post.URL}`} params={{ q: post.URL }}>{post.NAME}</Link></li>
            )}
            </ul>
        </div>
    </div>
);

export default TopNews;