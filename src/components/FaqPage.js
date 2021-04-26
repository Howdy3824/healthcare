import React from 'react';

var data = require('../assets/faq.json');

export default () => {
    return(
    <div className="content-container">
        { data.map((faq,index)=> {
            return <div className="faq_card" key={index}>
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
    
