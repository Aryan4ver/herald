import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import salvattore from 'salvattore';

class ListingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: [],
            section: props.match.params.section,
            parent_section: props.match.params.parent_section
        };
    }  
    
    fetchFirst(url,s,p) {
        var that = this;
        if (url) {
          fetch('http://126.0.0.100/herald2016/api/'+url+'?s='+s+'&p='+p,{
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
              console.log(result.listing);
            that.setState({ listing: result.listing });
          });
        }
      }
    
    componentWillMount() {
        this.fetchFirst("listing-api.php",this.state.section,this.state.parent_section);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.section !== this.props.match.params.section) {
          this.state.section = nextProps.match.params.section
          this.state.parent_section = nextProps.match.params.parent_section
          this.fetchFirst("listing-api.php");
        }
    }

    render() { 
        return (
          <div className="news-content" id="list-news-page">
            <div className="container">
              <div className="col-9" id="list-col">
                <div className="list-news-box" id="grid" data-columns>
                  
                  {this.state.listing.map(post =>
                    <div className="news-box-small" id="small" key={post.ID}>
                    {(post.IMAGE && <div className="news-banner"><Link to={post.URL}><img src={post.IMAGE} className="news-img" /></Link></div>)}
                    <Link to={post.URL}>
                      <div className="news-content-box">
                        {(post.NAME && <h2>{post.NAME}</h2>)}
                        {(post.STRAPLINE && <p>{post.STRAPLINE}</p>)}
                      </div>
                    </Link> 
                  </div>
                  )}
                  <div className="clear"></div>
                </div>
              </div>
              <div className="col-3">
              <div className="news-box-small p-right" id="small">
                <div className="news-banner"> <a href="#"><img src="/img/epaper.jpg" className="news-img"/></a> </div>
                <a href="#">
                <div className="news-content-box">
                  <h2>Daily Edition </h2>
                  <p>May 29 2019</p>
                </div>
                </a> </div>
              <div className="news-box-small p-right" id="small"> <img src="/img/adv2.jpg" className="news-img"/> </div>
              <div className="news-box-small p-right" id="small">
                <div className="news-banner"> <a href="#" ><img src="/img/citizen.jpg" className="news-img"/></a> </div>
                 <a href="#">
                <div className="news-content-box">
                  <h2>Citizen Journalist​</h2>
                  <p>aced with the continuous outbreaks of fire at Sonsoddo </p>
                </div>
                </a> </div>
              <div className="news-box-small p-right" id="small">
                <div className="news-banner" id="inbox"> <img src="/img/inbox.jpg" className="news-img"/> <a href="#" className="inbox-btn">Get oHeraldo in your inbox</a> </div>
                <div className="news-content-box">
                  <h2>Subscribe Newsletter ​</h2>
                  <p>Subscribe to our newsletter that you can receive at 7am, every morning</p>
                </div>
              </div>
              <div className="news-box-small p-right" id="small"> <img src="/img/adv2.jpg" className="news-img"/> </div>
              <div className="news-box-small p-right" id="small">
                <div className="news-banner"> <a href="#"><img src="/img/newspaper.jpg" className="news-img"/></a> </div>
                <a href="#">
                <div className="news-content-box">
                  <h2>Online Classifieds​</h2>
                  <p>Book Your advertisements ONLINE</p>
                </div>
                </a> </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      );
    }
}
  
export default ListingPage;