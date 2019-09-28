import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SEO from './Seo';
import RightSide from './RightSide';
import ListingLoader from './ListingLoader';

import Columns from './Columns'

class ListingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: 5,
            search_result: [],
            page: 1,
            seo: [],
            search_text: props.match.params.search_text,
            loading: false
        };
    }  
    
    fetchFirst(url,s,page) {
        var that = this;
        if (url) {
          fetch('https://www.heraldgoa.in/api/'+url+'?s='+s+'&page='+page,{
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
            that.setState({ search_result: result.search_result, page: result.page, seo: result.seo, loading: false });
          });
        }
      }

    componentWillMount() {
      this.state.loading = true;
      this.fetchFirst("search-api.php",this.state.search_text,this.state.page);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.search_text !== this.props.match.params.search_text) {
          this.state.loading = true;
          this.state.search_text = nextProps.match.params.search_text
          this.state.page = 1
          this.fetchFirst("search-api.php",this.state.search_text,this.state.page);
        }
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
                  {this.state.search_result.map(post =>
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
  
export default ListingPage;