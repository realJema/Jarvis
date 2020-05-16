import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';
import "../App.css"


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
          response: 'default',
          inputValue: 'nothing', 
        };
    }

    GetData(e) {
        e.preventDefault()
        var url = 'http://127.0.0.1:5000/api/execute';
        axios.post(url, {
            params: {
              instructions: this.state.inputValue,
            }
          })
        .then((res) => {
            this.setState({ 
                response: res.data,
            }) 
        }) 
    }
     
    updateInputValue(e) {
        this.setState({
          inputValue: e.target.value
        });
    }

    render() {
        return (
            <div className="about">
                <img src={require('./jema-white.PNG')} className="Jema-logo" alt="jema-image" />
                <p>{this.state.response}</p>
                <input value={this.state.inputValue} onChange={this.updateInputValue.bind(this)}/>
                <br/>
                <button onClick={this.GetData.bind(this)}>Click Me</button>
                <div className="footer">
                    <span>Created by realJema </span> 
                    <Link to= "/">Link to Home</Link>
                </div>
            </div>
        )
    }
}

export default About