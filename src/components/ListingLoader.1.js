import React from 'react';
import ReactDOM from 'react-dom';
import {Masonry} from 'masonic';

const items = []
for (let i = 0; i < 6; i++) {
  items.push({id: i})
}

const ListingLoader = () => {
    return (
        <Masonry items={items} columnWidth={292} render={() => {}}>
            {({index, data, width}) => (
                <div className="load-box">
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
        </Masonry>
    )
}

export default ListingLoader;