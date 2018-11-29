import React, { Component } from 'react';

const Imgcard = function(props) {
    return (
        <div className="card col-3">
            <img src={props.href} alt={props.title} className="card-img-top"/>
        </div>
    );
};

export default Imgcard;