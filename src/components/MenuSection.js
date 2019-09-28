import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const SubMenu = (props) => {
  return (
    props.children.map(post =>
      <li key={post.ID}><Link to={(post.CLICK=='Y')?`/${post.URL}`:'#'} target="_self">{post.NAME}</Link></li>
    )
  );
};

class MenuSection extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        section: []
      };
    } 
    
    handleMouseHover = (id) => {
      $('#DROP2_'+id).slideToggle(300);
    };

    handleMouseOut = (id) => {
      $('#DROP2_'+id).slideToggle();
    };
    
    fetchFirst(url) {
      var that = this;
      if (url) {
        fetch('https://www.heraldgoa.in/api/'+url,{
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
        this.state.section.map(post =>
          (post.CHILDREN !== 0) ? <li key={post.ID} className='has-list' onMouseEnter={() => this.handleMouseHover(post.ID)} onMouseLeave={() => this.handleMouseOut(post.ID)}><Link to={(post.CLICK=='Y')?`/${post.URL}`:'#'} target="_self">{post.NAME.toUpperCase()}<FontAwesome name="chevron-down" aria-hidden="true"></FontAwesome></Link><ul className="list" id={`DROP2_${post.ID}`}><SubMenu children={post.CHILDREN} /></ul></li> : <li key={post.ID}><Link to={(post.CLICK=='Y')?`/${post.URL}`:'#'} target="_self">{post.NAME.toUpperCase()}</Link></li>
        )
      );
    }
}
  
export default MenuSection;