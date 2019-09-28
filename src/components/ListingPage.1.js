import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SEO from './Seo';
import MasonicData from './MasonicData';
import RightSide from './RightSide';
import ListingLoader from './ListingLoader';

class ListingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: [],
            page: 1,
            seo: [],
            section: props.match.params.section,
            parent_section: props.match.params.parent_section,
            loading: false
        };
    }  
    
    fetchFirst(url,s,p,page) {
        var that = this;
        if (url) {
          fetch('https://www.heraldgoa.in/api/'+url+'?s='+s+'&p='+p+'&page='+page,{
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

    fetchSecond(url,s,p,page) {
      var that = this;
      if (url) {
        fetch('https://www.heraldgoa.in/api/'+url+'?s='+s+'&p='+p+'&page='+page,{
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
          that.setState({ listing: that.state.listing.concat(result.listing), page: result.page, seo: result.seo, loading: false });
        });
      }
    }

    componentWillMount() {
        this.state.loading = true;
        this.fetchFirst("listing-api2.php",this.state.section,this.state.parent_section, this.state.page);
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.section !== this.props.match.params.section) {
          this.state.loading = true;
          this.state.section = nextProps.match.params.section
          this.state.parent_section = nextProps.match.params.parent_section
          this.state.page = 1
          this.fetchFirst("listing-api2.php",this.state.section,this.state.parent_section, this.state.page);
          window.scrollTo(0, 0);
        }
    }

    /*loadMore = () => {
        window.scrollTo(0, 0);
        this.fetchSecond("listing-api2.php",this.state.section,this.state.parent_section, this.state.page);
    };*/

    loadMore = () => {
      this.state.loading = true;
      this.fetchSecond("listing-api2.php",this.state.section,this.state.parent_section, this.state.page);
      /*setTimeout(() => {
          this.fetchSecond("listing-api2.php",this.state.section,this.state.parent_section, this.state.page); 
          console.log(this.state.listing);
      }, 2500);*/
    };

    render() { 
        return (
          <div>
            <SEO seo={this.state.seo}/>
            <div className="news-content" id="list-news-page">
              <div className="container">
                <div className="col-9" id="list-col">
                  <MasonicData listing={this.state.listing} />
                  { (this.state.loading)?<ListingLoader />:'' }
                  <p><button className="submit-btn" onClick={() => this.loadMore()}>Load More</button></p> 
                </div>
                <div className="col-3 last-col">
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