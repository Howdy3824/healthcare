import React from 'react';
import { startLogout } from '../actions/auth';
import { Link } from 'react-router-dom';

var data = require('../assets/faq.json');
console.log(data);

export default () => {
    return(
     
    <div className="content-container">
        <div className="faq_card">
            <div>
                <h2>Q. {data[1]["q"]}?</h2>
            </div>
            <div>
                <h3>A. {data[1]["a"]}</h3>
            </div>
        </div>
        <div className="faq_card">
            <div>
                <h2>Q. {data[2]["q"]}?</h2>
            </div>
            <div>
                <h3>A. {data[2]["a"]}</h3>
            </div>
        </div>
        <div className="faq_card">
            <div>
                <h2>Q. {data[3]["q"]}?</h2>
            </div>
            <div>
                <h3>A. {data[3]["a"]}</h3>
            </div>
        </div>
        <div className="faq_card">
            <div>
                <h2>Q. {data[4]["q"]}?</h2>
            </div>
            <div>
                <h3>A. {data[4]["a"]}</h3>
            </div>
        </div>
    </div>
    
    );
};
    
