import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class MenuSection extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        section: []
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
          that.setState({ section: result.section });
        });
      }
    }  
    componentWillMount() {
        this.fetchFirst("section.php");
    }    
    render() { 
      return (
        <div>
            {this.state.section.map(post =>
                (post.CLICK=='Y' && post.PID == 0) ?<li key={post.ID}><Link to={`/${post.URL}`} params={{ q: post.URL }}>{post.NAME.toUpperCase()}</Link></li> : ''
            )}
        </div>
      );
    }
}
  
export default MenuSection;