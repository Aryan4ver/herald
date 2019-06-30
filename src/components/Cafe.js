import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Cafe = (props) => (
    <div className="news-box-small p-reset" id="small">
        <div className="news-banner"> 
            <img src="img/cafe.jpg" className="news-img"/>
        </div>
        <div className="news-content-box" id="cafe"> 
            {props.cafe.map(post =>
                <div key={post.ID}>
                    {post.IMAGE && <img src={post.IMAGE} className="news-img"/>}
                    {post.NAME && <p>{post.NAME}</p>}
                </div>
            )}
        </div>
    </div>
);

export default Cafe;