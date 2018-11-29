import React, { Component } from 'react';

class Searchform extends Component {
    constructor(props) {
     super(props);
     this.state = {
         searchterm: ""
     };
     this.handleChange = this.handleChange.bind(this);
     this.handleSearch = this.handleSearch.bind(this);
    }
    handleChange(event) {
        this.setState({searchterm: event.target.value})
    }
    handleSearch(event) {
        event.preventDefault()
        console.log(this.state.searchterm)
        this.props.onSearch(this.state.searchterm)
    }
    render() {
        return (
            <form className="form-inline mx-auto" style={{width: "50%"}}>
            <div className="form-group mb-2 mr-4 mt-4">
                <input type="text" className="form-control"
                       value={this.state.value} name="search" onChange={this.handleChange}/>
            </div>
                <div className="form-group mt-4">
                    <button className="btn btn-primary mb-2" type="submit" onClick={this.handleSearch}>Search</button>
                </div>
            </form>
        );
    }
};

export default Searchform;

