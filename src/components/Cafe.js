import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Cafe = (props) => (
    <div className="news-box-small p-reset" id="small">
        <div className="news-banner"> 
            <Link to='/Cafe' target="_self"><img src="/img/cafe.jpg" className="news-img"/></Link>
        </div>
        <div className="news-content-box" id="cafe"> 
            {props.cafe.map(post =>
                <div key={post.ID}>
                    {post.IMAGE && <Link to={post.URL} target="_self"><img src={post.IMAGE} className="news-img"/></Link>}
                    {post.NAME && <Link to={post.URL} target="_self"><p>{post.NAME}</p></Link>}
                </div>
            )}
        </div>
    </div>
); 

export default Cafe;