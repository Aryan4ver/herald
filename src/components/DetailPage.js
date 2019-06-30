import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            section: props.match.params.section,
            news_title: props.match.params.news_title,
            id: props.match.params.id
        };
    }  
    
    fetchFirst(url,s,n,id) {
        var that = this;
        if (url) {
          fetch('http://126.0.0.100/herald2016/api/'+url+'?s='+s+'&n='+n+'&id='+id,{
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
              console.log(result.details);
            that.setState({ details: result.details });
          });
        }
      }
    
    componentWillMount() {
        this.fetchFirst("detail-api.php",this.state.section,this.state.news_title,this.state.id);
    }

    render() { 
        return (
          <div className="news-content" id="detail-page">
            <div className="container">
            <div className="col-9" id="main-col">

            {this.state.details.map(post =>
              <div className="news-article" key={post.ID}> 
                <span>{post.DATE.toUpperCase()}</span> <span className="time">&nbsp; | &nbsp; {post.TIME.toUpperCase()} AM IST</span>
              <h2></h2>
              <div className="clear"></div>
              <div className="news-left-content"> 
                {post.IMAGE && <img src={post.IMAGE} className="detail-img" alt="" /> }
                <div className="mob-share-box">

                  { post.REPORTER && <div className="report"> <span>Report by</span><h5>{post.REPORTER.toUpperCase()}</h5></div> }
                  
                  <a className="a2a_dd" href="https://www.addtoany.com/share"> <img src="img/icons/share.png" alt=""/> </a>
                  <div className="clear"></div>
                  { post.STRAP && <p>{post.STRAP}</p> }
                </div>
                {post.CONTENT && <div dangerouslySetInnerHTML={{ __html: post.CONTENT }} /> }
              </div>
              <div className="news-right-content"> 
                { post.REPORTER && <div><span>Report by</span><h5>{post.REPORTER.toUpperCase()}</h5></div> }
                { post.STRAP && <p>{post.STRAP}</p> }
                <span className="shareit">Share this story</span>
                <div className="addthis_inline_share_toolbox"></div>
              </div>
              <div className="clear"></div>
            </div>
            )}

            <div className="comment-box"> <img src="/img/comment-test.jpg" width="100%" /> </div>
            <div className="mob-top-news">
              <div className="news-box-small p-reset" id="small">
                <div className="news-banner bck-reset">
                  <div className="tag top">top news</div>
                </div>
                <div className="news-content-box">
                  <ul>
                    <li><a href="#">WATERS RISE as Cyclone Vayu moves across Arabian Sea</a></li>
                    <li><a href="#">Strong winds bring trees crashing LED light fishing, bull trawling boost fish catch: Experts</a></li>
                    <li><a href="#">‘Locals support turtle protection activities’</a></li>
                    <li><a href="#">Cuncolim MLA will never join BJP: Cong unit</a></li>
                    <li><a href="#">Opa officials heave sigh of relief Parra farmers’ petition hearing on June 14</a></li>
                    <li><a href="#">‘Negligence led’ to declaration of land at Benaulim as enemy property</a></li>
                    <li><a href="#">Bicholim mamlatdar reviews monsoon preparedness </a></li>
                  </ul>
                </div>
              </div>
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
  
export default DetailPage;