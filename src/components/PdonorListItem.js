import React from 'react';
import { Link } from 'react-router-dom';

const PdonorListItem = ( { address} ) => (
   // <Link className="list-item" to={`/edit/${id}`}>
    <div>
        <div>
            <h3 className="list-item__title">{address}</h3>
        </div>
   </div>
     
   // </Link>
);

export default PdonorListItem;
