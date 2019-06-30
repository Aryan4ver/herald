import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        posts: []
      };
    }  
    fetchFirst(url) {
      var that = this;
      if (url) {
        fetch('http://126.0.0.100/herald2016/api/section.php',{
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
            console.log(result);
          that.setState({ posts: result.section });
  
          console.log(that.state.posts);
        });
      }
    }  
    componentWillMount() {
  
        this.fetchFirst("reactjs");
  
    }    
    render() {
  
      return (
        <div className="App">
          <header className="App-header">
            <img src="img/logo.jpg" className="App-logo" alt="logo" />
            <h1 className="App-title">React AJAX Example</h1>
          </header>
          <p className="App-intro">
            <ul>
              {this.state.posts.map(post =>
                <li key={post.ID}>{post.NAME}</li>
              )}
            </ul>          
          </p>
        </div>
      );
    }
  }
  
  //export default App;

  ReactDOM.render(<App />, document.getElementById('app'));