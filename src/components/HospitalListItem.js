import React from 'react';
import { Link } from 'react-router-dom';

const HospitalListItem = ({ pital ,r}) => (
   // <Link className="list-item" to={`/edit/${id}`}>
    <div className="h-list_card ">
        <div>
            <h3 className="h-list-item__title">{pital.name}</h3>
        <ul>
            <li>Address : {r.address}</li>
        </ul>
        </div>
        <div className="dist">{pital.location.distance} mts away</div>
   </div>
     
   // </Link>
);

export default HospitalListItem;
