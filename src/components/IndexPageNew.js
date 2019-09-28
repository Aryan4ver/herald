import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MainSlide from './MainSlide';
import MobileTopNews from './MobileTopNews';
import TopNewsCarousel from './TopNewsCarousel';
import TopNews from './TopNews';
import Twitter from './Twitter';
import Cafe from './Cafe';
import IdharUdhar from './IdharUdhar';
import ColumnOne from './ColumnOne';
import ColumnTwo from './ColumnTwo';
import ColumnThree from './ColumnThree';
import ColumnFour from './ColumnFour';
import SEO from './Seo';
import IndexLayout from './IndexLayout';
import RightSide from './RightSide';
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
          column_five: [],
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
            that.setState({ seo: result.seo, mainslide: result.mainslide, topnews: result.topnews, cafe: result.cafe, idharUdhar: result.idharUdhar, column_one: result.column_one, column_two: result.column_two, column_three: result.column_three, column_four: result.column_four, column_five: result.column_five, loading: false });
          });
        }
      }
    
      componentWillMount() {
          const tagCookie = (cookies.get('heraldTags'))?cookies.get('heraldTags'):'';
          console.log(tagCookie);
          this.state.loading = true;
          this.fetchFirst("index-api2.php",tagCookie);
          window.scrollTo(0, 0);
      }

    render() { 
      return (
        <div>
          <SEO seo={this.state.seo}/>
          <div className="news-content">
            <div className="container">
              { this.state.topnews.length > 0 && <TopNewsCarousel topnews={this.state.topnews} />}
              <div className="top-spacer">
                { this.state.topnews.length > 0 && <MobileTopNews topnews={this.state.topnews} />}
                <div className="news-list">
                  <IndexLayout cafe={this.state.cafe}  idharUdhar={this.state.idharUdhar} data={this.state.column_five}/>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>  
      );
    }
}
  
export default IndexPage;