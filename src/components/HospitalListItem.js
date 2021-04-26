import React from 'react';
import { Link } from 'react-router-dom';

const HospitalListItem = ({ name }) => (
   // <Link className="list-item" to={`/edit/${id}`}>
    <div className="h-list_card ">
        <div>
            <h3 className="h-list-item__title">{name}</h3>
        </div>
        <ul>
            <li>Beds Available : 24</li>
            <li>Ventilators : 16</li>
        </ul>
   </div>
     
   // </Link>
);

export default HospitalListItem;
