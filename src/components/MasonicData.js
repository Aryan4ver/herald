import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect';

import Columns from './Columns'

class MasonicData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: 5,
      listing: props.listing
    }
  }


    componentWillReceiveProps(props) {
        this.state.listing = props.listing;
    };

  render() {
    const { columns } = this.state

    const queries = [{
      columns: 2,
      query: 'min-width: 300px'
    }, {
      columns: 3,
      query: 'min-width: 768px'
    }]

    return (
      <div>
        <Columns gap="0px" queries={queries}>
          {this.state.listing.map(post =>
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
        </Columns>
      </div>
    )
  }
}

export default MasonicData;