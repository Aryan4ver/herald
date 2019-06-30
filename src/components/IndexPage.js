import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MainSlide from './MainSlide';
import TopNews from './TopNews';
import Twitter from './Twitter';
import Cafe from './Cafe';
import IdharUdhar from './IdharUdhar';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          mainslide: [],  
          topnews: [],
          cafe: [],
          idharUdhar: []
        };
      }  
      fetchFirst(url) {
        var that = this;
        if (url) {
          fetch('http://126.0.0.100/herald2016/api/'+url,{
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
            that.setState({ mainslide: result.mainslide, topnews: result.topnews, cafe: result.cafe, idharUdhar: result.idharUdhar });
          });
        }
      }
    
      componentWillMount() {
          this.fetchFirst("index-api.php");
      }

    render() { 
        return (
            <div className="news-content">
                <div className="container">
                    <div className="col-6" id="main-col">

                        { this.state.mainslide.length > 0 && <MainSlide mainslide={this.state.mainslide} /> }

                        <div className="news-list">
                            <div className="col-6">
                                <div className="news-box-small" id="small">
                                    <div className="news-banner"> 
                                        <Link to="#"><img src="img/news4.jpg" className="news-img"/></Link>
                                        <div className="tag top">GOA</div>
                                    </div>
                                    <Link to="#"> 
                                        <div className="news-content-box">
                                            <h2>MMC holds urgent meeting on measures to control fire​</h2>
                                            <p>aced with the continuous outbreaks of fire at Sonsoddo and a barrage from the Deputy Chief Minister Vijai Sardessai who even accused them of merely </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="news-box-small" id="small">
                                    <div className="news-banner"> 
                                        <Link to="#"><img src="img/news4.jpg" className="news-img"/></Link>
                                        <div className="tag top">GOA</div>
                                    </div>
                                    <Link to="#"> 
                                        <div className="news-content-box">
                                            <h2>MMC holds urgent meeting on measures to control fire​</h2>
                                            <p>aced with the continuous outbreaks of fire at Sonsoddo and a barrage from the Deputy Chief Minister Vijai Sardessai who even accused them of merely </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        <div className="clear"></div>
                    </div>
                </div>

                <div className="col-3" id="main-col">
                    { this.state.topnews.length > 0 && <TopNews topnews={this.state.topnews} /> }
                    
                    <Twitter />
                    
                    { this.state.cafe.length > 0 && <Cafe cafe={this.state.cafe} /> }

                    { this.state.idharUdhar.length > 0 && <IdharUdhar idharUdhar={this.state.idharUdhar} /> }
                </div>
            </div>
        </div> 
      );
    }
}
  
export default IndexPage;