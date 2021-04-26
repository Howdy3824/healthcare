import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceListItem = ( props ) => (
   // <Link className="list-item" to={`/edit/${id}`}>
    <div>
        <div>
            <h3 className="list-item__title">{props.experience}</h3>
        </div>
   </div>
     
   // </Link>
);

export default ExperienceListItem;
