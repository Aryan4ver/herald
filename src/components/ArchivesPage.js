import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SEO from './Seo';
import RightSide from './RightSide';
import ListingLoader from './ListingLoader';

import Columns from './Columns'

class ArchivesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: 5,
            listing: [],
            page: 1,
            seo: [],
            date: [],
            loading: false
        };
    }  
    
    fetchFirst(url,d,page) {
        var that = this;
        if (url) {
          fetch('https://www.heraldgoa.in/api/'+url+'?d='+d+'&page='+page,{
              mode: 'cors',
              credentials: 'same-origin',
              headers: {
                  'Access-Control-Allow-Origin': '*', 
                  Accept: 'application/json', 
                  'Content-Type': 'application/json',
              },
          }).then(function (response) {
            return response.json();
          }).then(function (result) {
            that.setState({ listing: result.listing, page: result.page, seo: result.seo, loading: false });
          });
        }
      }

    componentWillMount() {
        this.state.loading = true;
        this.fetchFirst("archives-api.php",this.state.date, this.state.page);
    }

    render() { 
      const { columns } = this.state

      const queries = [{
        columns: 2,
        query: 'min-width: 500px'
      }, {
        columns: 3,
        query: 'min-width: 1000px'
      }]

        return (
          <div>
            <SEO seo={this.state.seo}/>
            <div className="news-content" id="list-news-page">
              <div className="container">
                <div className="col-9" id="list-col">
                  { (this.state.loading)?<ListingLoader />:'' }
                  <Columns gap="20px" queries={queries}>
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
                <div className="col-3">
                  <RightSide />
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
      );
    }
}
  
export default ArchivesPage;