import React from 'react';
import FontAwesome from 'react-fontawesome'; 
import { Redirect } from 'react-router-dom';

export default class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			search_text: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ redirect: true });
		this.setState({ search_text: event.target.elements.search.value });

		event.target.elements.search.value = '';
	}

	render() {
	 
		if (this.state.redirect)
		{
			this.setState({ redirect: false });
			return <Redirect to={`/search/${this.state.search_text}`} />;
		}

	  return (
		<div className="pos">
			<div className="search-box">
				<FontAwesome name="caret-up" aria-hidden="true"></FontAwesome>
				<form className="add-option" onSubmit={this.handleSubmit}>
					<input className="txtsearch" type="search" name="search" />
					<button type="submit" className="sub-btn">
						<FontAwesome name="search" aria-hidden="true"></FontAwesome>
					</button>
				</form>
			</div>
		</div>
	  );
	}
} // */