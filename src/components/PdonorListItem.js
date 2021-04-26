import React from 'react';
import { Link } from 'react-router-dom';

const PdonorListItem = ( { name ,phone,email,address } ) => (
   // <Link className="list-item" to={`/edit/${id}`}>
    <div className="p-list_card">
        <div>
            <h3 className="list-item__title">{name}</h3>
        </div>
        <ul>
            <li>Phone : <span>{phone}</span></li>
            <li>Email : <span>{email}</span></li>
            <li>Address : <span>{address}</span></li>
        </ul>
   </div>
     
   // </Link>
);

export default PdonorListItem;