import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const ListingOne = (props) => (
	<div>
		{props.listing_one.map(post =>
            <div className="news-box-small" id="small" key={post.ID}>
                <div className={ (post.IMAGE)?"news-banner": "news-banner no-img"}>
                    <div className="img-container">
                        <Link to={`/${post.URL}`} target="_self"><img src={ (post.IMAGE)?post.IMAGE: ''} className="news-img"/></Link>
                    </div>
                    { (post.SECTION_NAME)?<div className="tag top">{post.SECTION_NAME}</div>: ''}
                </div>
                <Link to={`/${post.URL}`} target="_self"> 
                    <div className="news-content-box shadow-hover">
                        { (post.NAME)?<h2>{post.NAME}</h2>: ''}
                        { (post.STRAP)?<p>{post.STRAP}</p>: ''}
                    </div>
                </Link>
            </div>            
		)}
	</div>
);

export default ListingOne;