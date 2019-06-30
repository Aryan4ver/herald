import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';

const TopNews = (props) => (
  <div>
    <li key={props.topnews.ID}><Link to={`/${props.topnews.URL}`} params={{ q: props.topnews.URL }}>{props.topnews.NAME}</Link></li>
  </div>
);

class IndexPage2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topnews: []
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
        //console.log(result.topnews);
        that.setState({ topnews: result.topnews });
      });
    }
  }

  componentWillMount() {
      this.fetchFirst("index-api.php");
  }

  render() { 
    return (
			    <div className="news-box-small p-reset" id="small">
			        <div className="news-banner bck-reset">
				        <div className="tag top">top news</div>
			        </div>
              <div className="news-content-box">
                <BrowserRouter>
				        <ul>
                  {this.state.topnews.map(post =>
                    <TopNews topnews={post} />
                  )}
                  
                      </ul>
                      </BrowserRouter>  
                    </div>
                </div>
    );
  }
}
  //export default App;

ReactDOM.render(<IndexPage2 />, document.getElementById('app'));