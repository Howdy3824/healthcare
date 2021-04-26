import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const HospitalListItem = ({ name }) => (
   // <Link className="list-item" to={`/edit/${id}`}>
    <div>
        <div>
            <h3 className="list-item__title">{name}</h3>
        </div>
   </div>
     
   // </Link>
);

export default HospitalListItem;
