import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceListItem = ( { experience, name,email} ) => (
   // <Link className="list-item" to={`/edit/${id}`}>
    <div className="e-list_card">
        <div>
            <h3 className="exp-list-item__title">{experience}...</h3>
        </div>
        <div className="author">
            <ul>
                <li>- {name}</li>
                <li>Contact: {email}</li>
            </ul>
        </div>
   </div>
     
   // </Link>
);


export default ExperienceListItem;
