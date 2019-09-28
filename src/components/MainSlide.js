import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const MainSlide = (props) => (
	<div className="news-box">
		{props.mainslide.map(post =>
			<div key={post.ID}>
				<div className="news-banner">
					{ (post.IMAGE)?<div className="img-container"><Link to={post.URL} target="_self"><img src={post.IMAGE} className="news-img"/></Link></div>: ''}
					{ (post.VIDEO)?<iframe width="400" height="315" src="https://www.youtube.com/embed/{post.VIDEO}?enablejsapi=true&rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>: ''}
					<div className="tag top">Top News</div>
				</div>
      			{ (post.NAME)?<Link to={post.URL} target="_self"><div className="news-content-box shadow-hover"><h2>{post.NAME}</h2></div></Link>: ''}
			</div>
		)}
	</div>
);

export default MainSlide;