import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {InlineShareButtons} from 'sharethis-reactjs';
import { DiscussionEmbed, CommentCount, CommentEmbed } from 'disqus-react';
import OtherNews from './OtherNews';
import MoreNews from './MoreNews';
import SEO from './Seo';
import RightSide from './RightSide';
import DetailLoader from './DetailLoader';
import Cookies from 'universal-cookie';
import Ads from './Ads';

const cookies = new Cookies();

const DisqusComments = (props) => {

  let ID = props.post.ID;
  let URL = (props.post.URL) ? 'https://www.heraldgoa.in/'+props.post.URL : 'https://www.heraldgoa.in/';
  let NAME = (props.post.NAME) ? props.post.NAME : '';  

  const threadConfig = {
      url: URL,
      identifier: ID,
      title: NAME,
  };

  return (
    <div className="comment-box"><DiscussionEmbed shortname="heraldgoa" config={threadConfig} /></div>
  );
};


const ShareButtons = (props) => {
  let URL = (props.post.URL) ? 'https://www.heraldgoa.in/'+props.post.URL : 'https://www.heraldgoa.in/';
  let IMAGE = (props.post.IMAGE) ? props.post.IMAGE : '';
  let STRAP = (props.post.STRAP) ? props.post.STRAP : '';
  let NAME = (props.post.NAME) ? props.post.NAME : '';

  console.log(IMAGE);

  return (
    <InlineShareButtons
                config={{
                  alignment: 'center',  // alignment of buttons (left, center, right)
                  color: 'social',      // set the color of buttons (social, white)
                  enabled: true,        // show/hide buttons (true, false)
                  font_size: 16,        // font size for the buttons
                  labels: 'cta',        // button labels (cta, counts, null)
                  language: 'en',       // which language to use (see LANGUAGES)
                  networks: [           // which networks to include (see SHARING NETWORKS)
                    'whatsapp',
                    'facebook',
                    'twitter',
                    'messenger',
                    'linkedin'
                  ],
                  padding: 12,          // padding within buttons (INTEGER)
                  radius: 4,            // the corner radius on each button (INTEGER)
                  show_total: true,
                  size: 40,             // the size of each button (INTEGER)
      
                  // OPTIONAL PARAMETERS
                  url: URL, // (defaults to current url)
                  image: IMAGE,  // (defaults to og:image or twitter:image)
                  description: STRAP,       // (defaults to og:description or twitter:description)
                  title: NAME,            // (defaults to og:title or twitter:title)
                  message: 'custom email text',     // (only for email sharing)
                  subject: 'custom email subject',  // (only for email sharing)
                  username: 'custom twitter handle' // (only for twitter sharing)
                }}
              />
  )};

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            details2: [],
            seo: [],
            othernews: [],
            morenews: [],
            section: props.match.params.section,
            news_title: props.match.params.news_title,
            id: props.match.params.id,
            adexists: false,
            loading: false
        };
    }  
    
    fetchFirst(url,s,n,id,tagCookie) {
        var that = this;
        const current = new Date();
        const nextYear = new Date();
        nextYear.setFullYear(current.getFullYear() + 1);

        if (url) {
          fetch('https://www.heraldgoa.in/api/'+url+'?s='+s+'&n='+n+'&id='+id+'&tagCookie='+tagCookie,{
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
            that.setState({ details: result.details, othernews: result.othernews, morenews: result.morenews, seo: result.seo, adexists:result.adexists, loading: false });
            cookies.set('heraldTags', result.tagcookie, { path: '/', maxAge: 2592000 });
            window.scrollTo(0, 0);
          });
        }
      }
    
    componentWillMount() {
      //cookies.remove('heraldTags', { path: '/' })
      const tagCookie = (cookies.get('heraldTags'))?cookies.get('heraldTags'):'';

      this.state.loading = true;
      this.fetchFirst("detail-api.php",this.state.section,this.state.news_title,this.state.id,tagCookie);
      window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
          this.state.loading = true;
          this.state.section = nextProps.match.params.section
          this.state.news_title = nextProps.match.params.news_title
          this.state.id = nextProps.match.params.id

          const tagCookie = (cookies.get('heraldTags'))?cookies.get('heraldTags'):'';

          this.fetchFirst("detail-api.php",this.state.section,this.state.news_title,this.state.id,tagCookie);
        }

      window.scrollTo(0, 0);
    }

    componentDidMount () {
      if(this.state.adexists=='Y')
      {
        //alert('hii');
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }

    handleArticleComments = () => {
      $('.comment-btn').hide();
      $('.comment-box').show();
    }

    render() { 
        let URL = '';
        return (
          <div>
            <SEO seo={this.state.seo}/>
            <div className="news-content" id="detail-page">
              <div className="container">
              <div className="col-9" id="main-col">
                { (this.state.loading)?<DetailLoader />:'' }
                {this.state.details.map(post =>
                  <div className="news-article" key={post.ID}> 
                    <span>{post.DATE.toUpperCase()}</span> <span className="time">&nbsp; | &nbsp; {post.TIME.toUpperCase()} IST</span>
                    <h2>{post.NAME}</h2>
                    <div className="clear"></div>
                    <div className="news-left-content"> 
                      {post.IMAGE && <img src={post.IMAGE} className="detail-img" alt="" /> }
                      <div className="mob-share-box">
                        { post.REPORTER && <div className="report"> <span>Report by</span><h5>{post.REPORTER.toUpperCase()}</h5></div> }
                        <div className="clear"></div>
                        { post.STRAP && <p>{post.STRAP}</p> }
                      </div>
                      {post.CONTENT && <div dangerouslySetInnerHTML={{ __html: post.CONTENT }} /> }
                      {this.state.adexists=='Y' && <Ads width={0} height={0} slot={3383907787} detail={1} /> }
                      {post.CONTENT2 && <div dangerouslySetInnerHTML={{ __html: post.CONTENT2 }} /> }
                    </div>
                    <div className="news-right-content"> 
                      { post.REPORTER && <div><span>Report by</span><h5>{post.REPORTER.toUpperCase()}</h5></div> }
                      { post.STRAP && <p>{post.STRAP}</p> }
                      <div className="share-fix">
                        <span className="shareit">Share this story</span>
                        <div className="desk-share">
                          <div className="addthis_inline_share_toolbox">
                           <ShareButtons post={post} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clear"></div>
                    <div className="share-list">
                      <div id="header">
                        <h3>Share this story</h3>
                      </div>
                      <ShareButtons post={post} />
                      <div id="header"></div>
                    </div>
                    <div className="clear"></div>
                    <div>
                      <button className="comment-btn" onClick={this.handleArticleComments}>Comment</button>
                    </div>
                    <DisqusComments post={post} /> 
                  </div>
                )}
                { this.state.morenews.length > 0 && <MoreNews morenews={this.state.morenews} /> }
                { this.state.othernews.length > 0 && <OtherNews othernews={this.state.othernews} /> }
                <div id="div-clmb-ctn-330031-1" style={{ float: 'left', 'minHeight':'2px', 'width':'100%' }} data-slot="330031" data-position="1" data-section="ArticleShow" data-ua="D" className="colombia"></div>
                <div id="div-clmb-ctn-330030-1" style={{ float: 'left', 'minHeight':'2px', 'width':'100%' }} data-slot="330030" data-position="1" data-section="ArticleShow" data-ua="M" className="colombia"></div>
                <div className="clear"></div>
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
  
export default DetailPage;