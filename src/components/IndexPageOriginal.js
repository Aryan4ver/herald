import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MainSlide from './MainSlide';
import MobileTopNews from './MobileTopNews';
import TopNews from './TopNews';
import Twitter from './Twitter';
import Cafe from './Cafe';
import IdharUdhar from './IdharUdhar';
import ColumnOne from './ColumnOne';
import ColumnTwo from './ColumnTwo';
import ColumnThree from './ColumnThree';
import ColumnFour from './ColumnFour';
import SEO from './Seo';
import RightSide from './RightSide';
import ListingLoader from './ListingLoader';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          seo: [],
          mainslide: [],  
          topnews: [],
          cafe: [],
          idharUdhar: [],
          column_one: [],
          column_two: [],
          column_three: [],
          column_four: [],
          loading: false
        };
      }
        
      fetchFirst(url,tagCookie) {
        var that = this;
        if (url) {
          fetch('https://www.heraldgoa.in/api/'+url+'?tagCookie='+tagCookie,{
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
            that.setState({ seo: result.seo, mainslide: result.mainslide, topnews: result.topnews, cafe: result.cafe, idharUdhar: result.idharUdhar, column_one: result.column_one, column_two: result.column_two, column_three: result.column_three, column_four: result.column_four, loading: false });
          });
        }
      }
    
      componentWillMount() {
          const tagCookie = (cookies.get('heraldTags'))?cookies.get('heraldTags'):'';
          console.log(tagCookie);
          this.state.loading = true;
          this.fetchFirst("index-api.php",tagCookie);
          window.scrollTo(0, 0);
      }

    render() { 
      return (
          <div>
              <SEO seo={this.state.seo}/>
              <div className="news-content">
                  <div className="container">
                      <div className="col-6" id="main-col">
                          { (this.state.loading)?<ListingLoader />:'' }
                          { this.state.mainslide.length > 0 && <MainSlide mainslide={this.state.mainslide} /> }
                          { this.state.topnews.length > 0 && <MobileTopNews topnews={this.state.topnews} /> }

                          <div className="news-list">
                              <div className="col-6">
                                { this.state.column_one.length > 0 && <ColumnOne column_one={this.state.column_one} /> }
                              </div>
                              <div className="col-6">
                                { this.state.column_two.length > 0 && <ColumnTwo column_two={this.state.column_two} /> }
                              </div>
                          <div className="clear"></div>
                      </div>
                  </div>

                  <div className="col-3" id="main-col">
                      { (this.state.loading)?<ListingLoader />:'' }
                      { this.state.topnews.length > 0 && <TopNews topnews={this.state.topnews} /> }
                      
                      <Twitter />
                      
                      { this.state.cafe.length > 0 && <Cafe cafe={this.state.cafe} /> }

                      { this.state.idharUdhar.length > 0 && <IdharUdhar idharUdhar={this.state.idharUdhar} /> }

                      { this.state.column_three.length > 0 && <ColumnThree column_three={this.state.column_three} /> }
                  </div>
                  <div className="col-3" id="main-col">
                    <RightSide />
                    { this.state.column_four.length > 0 && <ColumnFour column_four={this.state.column_four} /> }
                  </div>
                <div className="clear"></div>
              </div>
          </div>
        </div> 
      );
    }
}
  
export default IndexPage;