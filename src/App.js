import React from 'react';
import { useState } from 'react';

// Bootstrap css
import { Gear, X, BoxArrowDownLeft, BoxArrowUpRight, ChevronLeft, ChevronRight, XSquare } from 'react-bootstrap-icons';

function App() {
	const [input, setInput] = useState('');
	const [container, setContainer] = useState('<h2>Jema</h2><h3>Hi! How can I help?</h3>');

	// execute this when the user presses enter
	function Inputpassed() {
		setContainer('<h4 className="input-displayed">' + input + '</h4>');
		setInput(''); // clear user input
	}

	function googleSearch(query){
		// regular javascript works too
		// This is going to open the users request in a google search on webvieww
		var display = document.querySelector('.main-container');
		var search = document.querySelector('.browser-window'); // gets webview  through class
		search.src = 'https://google.com/search?q=' + query.replace(/ /g, '+');

		setTimeout(() => {
			display.classList.toggle('hide-container');
			search.classList.toggle('hide-container'); // displays webview by removing the class which hides it
		}, 2000);
	}

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			Inputpassed();
		}
	};

	return (
		<div className="App">
			<nav className="navbar"> 
				<div className="container-fluid">
					<form className="d-flex">
						<a className="navbar-brand">
							<ChevronLeft />
						</a>
						<a className="navbar-brand">
							<ChevronRight />
						</a>
						<a className="navbar-brand">
							<Gear />
						</a>
					</form>
					<form className="d-flex">
						<a className="navbar-brand">
							<BoxArrowUpRight />
						</a>
						<a className="navbar-brand">
							<BoxArrowDownLeft />
						</a>
						<a className="navbar-brand" style={{ marginRight: '0' }}>
							<XSquare />
						</a>
					</form>
				</div>
			</nav>
			<div className="main-container" dangerouslySetInnerHTML={{ __html: container }}></div>
				<div className="options">
					<button type="button" className="btn btn-outline-secondary">
						Weather
					</button>
					<button type="button" className="btn btn-outline-secondary">
						Toss a coin
					</button>
					<button type="button" className="btn btn-outline-secondary">
						What can you do?
					</button>
				</div>
			<div className="footer">
				<input
					className="userInput"
					type="text"
					placeholder="Ask me anything..."
					onKeyDown={handleKeyDown}
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</div>
		</div>
	);
}

export default App;
