import React from 'react';
import { Link } from "react-router-dom"
import logo from './logo.svg';
// import './App.css';

// Bootstrap css 
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { ArrowRight, ArrowDownLeft, ArrowsAngleExpand, Gear, X } from 'react-bootstrap-icons';

function App() {
  return (
		<div className="App">
			<nav class="navbar">
				<div class="container-fluid">
					<a class="navbar-brand">
						<Gear />
					</a>
					<form class="d-flex">
						<a class="navbar-brand">
							<ArrowsAngleExpand />
						</a>
						<a class="navbar-brand">
							<ArrowDownLeft />
						</a>
						<a class="navbar-brand">
							<X />
						</a>
					</form>
				</div>
      </nav>
      <h3>Hi! How can I help?</h3>
      <div class="footer">
        <div class="options">

          <button type="button" class="btn btn-outline-secondary">
            Weather
          </button>
          <button type="button" class="btn btn-outline-secondary">
            Toss a coin
          </button>
          <button type="button" class="btn btn-outline-secondary">
            What can you do? 
          </button>
        </div>
				<input class="userInput" type="text" placeholder="Ask me anything..." />
			</div>
		</div>
  );
}

export default App;
