import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const IdharUdhar = (props) => (
    <div className="news-box-small p-reset" id="small">
        <div className="news-banner"> 
            <img src="/img/iu.jpg" className="news-img"/>
        </div>
        <div className="news-content-box" id="iu">
            {props.idharUdhar.map(post =>
                <img key={0} src={post.IMAGE} className="news-img"/> 
            )}
        </div>
    </div>
);

export default IdharUdhar;