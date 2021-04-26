import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceListItem = ( { experience, name} ) => (
   // <Link className="list-item" to={`/edit/${id}`}>
    <div className="list_card">
        <div>
            <h3 className="list-item__title">{experience}</h3>
        </div>
        <div>
            <h3>{name}</h3>
        </div>
   </div>
     
   // </Link>
);


export default ExperienceListItem;
