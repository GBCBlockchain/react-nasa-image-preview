import React, { Component } from 'react';
import ImgCard from "./Imagecard"
class Imagecontainer extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div className="row">
                {this.props.imgData.map(img => <ImgCard key={img.href} href={img.href} title={img.title} decr={img.desc} />) }
            </div>
        );
    };
};

export default Imagecontainer;