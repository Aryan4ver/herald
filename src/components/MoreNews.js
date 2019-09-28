import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const MoreNews = (props) => (
    <div className="related-news">
        <div id="header">
            <h3>Also See</h3>
        </div>
        {props.morenews.map(post =>
            <div className="col-3a" key={post.ID}>
                <div className="news-box-small" id="small">
                    <div className={ (post.IMAGE)?"news-banner": "news-banner no-img"}>
                        <div className="img-container"> 
                            <Link to={post.URL} target="_self"><img src={ (post.IMAGE)?post.IMAGE: ''} className="news-img"/></Link> 
                        </div>
                        { (post.SECTION_NAME)?<div className="tag" style={{ 'background':post.SECTION_COLOR }}>{post.SECTION_NAME}</div>: ''}
                    </div>
                    <Link to={`/${post.URL}`} target="_self">
                        <div className="news-content-box shadow-hover">
                            { (post.NAME)?<h2>{post.NAME}</h2>: ''}
                            { (post.STRAP)?<p>{post.STRAP}</p>: ''}
                        </div>
                    </Link> 
                </div>
          </div>
        )}
        <div className="clear"></div>
    </div>
);

export default MoreNews;