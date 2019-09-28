import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const MobileTopNews = (props) => (
    <div className="mob-ver-topnews">
        <div className="tag top">Top News</div>
        <div className="news-container disable-scrollbars">
            <ul>
                {props.topnews.map(post =>
                    <Link to={`/${post.URL}`} params={{ q: post.URL }} target="_self" key={post.ID}>
                        <li className="mob-news-box">
                            <img src="img/news5.jpg" width="100%" />
                            <p>{post.NAME}</p>
                        </li>
                    </Link>
                )}
            </ul>
            <div className="clear"></div>
        </div>
    </div>
);

export default MobileTopNews;