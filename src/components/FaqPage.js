import React from 'react';
import { startLogout } from '../actions/auth';
import { Link } from 'react-router-dom';

var data = require('../assets/faq.json');
console.log(data);

export default () => {
    return(
     
    <div className="content-container">
        { data.map((faq)=> {
            return <div className="faq_card">
            <div>
                <h2>Q. {faq["q"]}?</h2>
            </div>
            <div>
                <h3>A. {faq["a"]}</h3>
            </div>
        </div>
        })}
    </div>
    
    );
};
    
