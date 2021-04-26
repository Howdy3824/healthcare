import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceListItem = ( { experience, name} ) => (
   // <Link className="list-item" to={`/edit/${id}`}>
    <div className="e-list_card">
        <div>
            <h3 className="exp-list-item__title">{experience}...</h3>
        </div>
        <div className="author">
            <h3>- {name}</h3>
        </div>
   </div>
     
   // </Link>
);


export default ExperienceListItem;
