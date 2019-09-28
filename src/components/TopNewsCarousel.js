import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import InfiniteCarousel from 'react-leaf-carousel';

const TopNewsCarousel = (props) => (
  <div className="top-new-desk">
    <div className="tag top">Top News</div>
      <div className="owl-carousel owl-theme">
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={false}
          showSides={true}
          sidesOpacity={.5}
          sideSize={.1}
          slidesToScroll={3}
          slidesToShow={3}
          scrollOnDevice={true}
        >
          {props.topnews.map(post =>
            <div className="item" key={post.ID}> 
              <Link to={`/${post.URL}`} params={{ q: post.URL }} target="_self">
                <div className="desk-news-box"> 
                  { post.IMAGE && <img src={post.IMAGE} width="100%" /> }
                  <p>{post.NAME}</p>
                </div>
              </Link>
            </div>
          )}
      </InfiniteCarousel> 
    </div>
  </div>
);

export default TopNewsCarousel;