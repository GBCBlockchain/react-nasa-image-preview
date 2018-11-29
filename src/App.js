import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import Searchform from "./components/Searchform"
import ImageContainer from "./components/Imagecontainer"
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            nasaImages: []
        };
    }
    fetchData(search) {
        const url = `https://images-api.nasa.gov/search?q=${search}&media_type=image`
         // const that = this
        fetch(url)
            .then(response => response.json())
            .then(data => data["collection"]["items"].map((item) => { return {
                title: item['data'][0]['title'],
                desc: item['data'][0]['description'],
                href: item['links'][0]['href']
            }}))
            .then((data) => {
                this.setState({nasaImages: data});
            })
    }
  render() {
        return (
      <div>
        <Navbar />
        <div className="container">
            <Searchform onSearch={this.fetchData.bind(this)}/>
            <ImageContainer imgData={this.state.nasaImages} />
        </div>
      </div>
    );
  }
}

export default App;
