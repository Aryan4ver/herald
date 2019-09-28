import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SEO from './Seo';

class ObituariesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            obituary: [],
            previous: [],
            today: [],
            next: [],
            seo: [],
            loading: false
        };
    }

    fetchFirst(url,d) {
        var that = this;
        if (url) {
          fetch('https://www.heraldgoa.in/api/'+url+'?d='+d,{
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
            that.setState({ obituary: result.obituary, previous:result.previous, today: result.today, next:result.next, seo:result.seo, loading: false });
          });
        }
      }

    componentWillMount() {
        this.state.loading = true;
        this.fetchFirst("obituaries-api.php",this.state.today);
    }

    handleClick = (date) => {
        this.state.loading = true;
        this.fetchFirst("obituaries-api.php",date);
    };

    render() { 
        return (
            <div>
                <SEO seo={this.state.seo}/>
                <div className="news-content" id="adver-page">
                    <div className="container">
                        <div className="ad-box">
                            <div className="tag-inner">Obituaries</div>
                            <div className="obi-box"> 
                                {this.state.previous && <img src="/img/left.png" className="left-arrow" onClick={() => this.handleClick(this.state.previous)} /> }
                                <input type="text" className="inputbox obi-datetab" value={this.state.today} disabled />
                                {this.state.next && <img src="/img/right.png" className="right-arrow" onClick={() => this.handleClick(this.state.next)} /> }
                                <div className="clear"></div>
                                <img src={this.state.obituary} width="100%"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ObituariesPage;