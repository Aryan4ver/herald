import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {Masonry} from 'masonic';
import SEO from './Seo';
import RightSide from './RightSide';
import ListingLoader from './ListingLoader';

class ListingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        return (
          <div>
            <SEO seo={this.state.seo}/>
            <div className="news-content" id="list-news-page">
              <div className="container">
                <div className="col-9" id="list-col">
                { (this.state.loading)?<ListingLoader />:'' }
                <Masonry items={this.state.search_result} columnWidth={292} render={() => {}}>
                    {({index, data, width}) => (
                      <div className="news-box-small" id="small" key={data.ID}>
                        <div className={ (data.IMAGE)?"news-banner": "news-banner no-img"}>
                            <div className="img-container">
                                <Link to={`/${data.URL}`} target="_self"><img src={ (data.IMAGE)?data.IMAGE: ''} className="news-img"/></Link>
                            </div>
                            { (data.SECTION_NAME)?<div className="tag top">{data.SECTION_NAME}</div>: ''}
                        </div>
                        <Link to={`/${data.URL}`} target="_self"> 
                            <div className="news-content-box shadow-hover">
                                { (data.NAME)?<h2>{data.NAME}</h2>: ''}
                                { (data.STRAP)?<p>{data.STRAP}</p>: ''}
                            </div>
                        </Link>
                      </div>
                    )}
                  </Masonry> 
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