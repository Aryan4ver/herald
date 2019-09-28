import React from 'react';
import ReactDOM from 'react-dom';

import Columns from './Columns'

const items = []
for (let i = 0; i < 6; i++) {
  items.push({id: i})
}

const queries = [{
    columns: 2,
    query: 'min-width: 300px'
  }, {
    columns: 3,
    query: 'min-width: 768px'
  }]

const ListingLoader = () => {
    return (
        <Columns gap="20px" queries={queries}>
            {items.map(post =>
                <div className="load-box" key={post.id}>
                    <div className="img-box">
                        <div className="img-sub gradient"></div>
                    </div>
                    <div className="con-box">
                        <div className="con-sub gradient"></div>
                        <div className="con-sub2 gradient"></div>
                        <div className="con-sub2 gradient"></div>
                    </div>
                </div>
            )}
        </Columns>
    )
}

export default ListingLoader;