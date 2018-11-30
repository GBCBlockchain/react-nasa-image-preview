import React, { Component } from 'react';

const Imgcard = function(props) {
    return (
        <div className="card col-3">
            <div className="card-img-top" style={{ 
                        width: '100%', 
                        height: '150px',
                        backgroundImage: `url(${props.href})`, 
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'contain' }} >
            </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>

                </div>   
        </div>
    );
};

export default Imgcard;