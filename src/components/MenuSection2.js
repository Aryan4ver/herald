import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const handleSideMenuClose = () => {
  $(".menu-tab").slideToggle(300);
};

const SubMenu = (props) => {
  return (
    props.children.map(post =>
      <li key={post.ID}><Link to={(post.CLICK=='Y')?`/${post.URL}`:'#'} onClick={handleSideMenuClose}>{post.NAME}</Link></li>
    )
  );
};

class MenuSection2 extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        section: []
      };
    } 
   
    handleSideMenuClose = () => {
      $(".menu-tab").slideToggle(300);
    };

    handleSideMenuDropDown = (id) => {
      $('#DROP_'+id).slideToggle();
      $('#FONTAWESOME_'+id).toggleClass('fa-plus fa-minus');
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
          (post.CHILDREN !== 0) ? <li key={post.ID} className="has-dropdown" onClick={() => this.handleSideMenuDropDown(post.ID)}><Link to={(post.CLICK=='Y')?`/${post.URL}`:'#'} onClick={this.handleSideMenuClose} target="_self"><span>{post.NAME.toUpperCase()}</span></Link><FontAwesome id={`FONTAWESOME_${post.ID}`} name="plus" aria-hidden="true"></FontAwesome><ul className="dropdown" id={`DROP_${post.ID}`}><SubMenu children={post.CHILDREN} /></ul></li> : <li key={post.ID}><Link to={(post.CLICK=='Y')?`/${post.URL}`:'#'} onClick={this.handleSideMenuClose} target="_self">{post.NAME.toUpperCase()}</Link></li>
        )
      );
    }
}
  
export default MenuSection2;