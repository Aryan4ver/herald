import React from 'react';
import FontAwesome from 'react-fontawesome';

const SearchBox = () => (
    <div className="search-box">
            <FontAwesome name="caret-up" className="fa fa-caret-up" aria-hidden="true"></FontAwesome>
			<input type="search" className="txtsearch" name="search-bar" id="search-bar" />
			<button type="submit" className="sub-btn">
				<FontAwesome name="search" className="fa fa-search" aria-hidden="true"></FontAwesome>
			</button>
    </div>
);

export default SearchBox;