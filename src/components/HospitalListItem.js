import React from 'react';
import { Link } from 'react-router-dom';

const HospitalListItem = ({ name ,location}) => (
   // <Link className="list-item" to={`/edit/${id}`}>
    <div className="h-list_card ">
        <div>
            <h3 className="h-list-item__title">{name}</h3>
        <ul>
            <li>Beds Available : 24</li>
            <li>Ventilators : 16</li>
        </ul>
        </div>
        <div className="dist">{location.distance} mts</div>
   </div>
     
   // </Link>
);

export default HospitalListItem;
