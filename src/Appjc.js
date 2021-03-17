// import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import React from "react";
// donnée qui interesse le component ci dessous
state = {
	clients: [
		{ id: 1, nom: "jc mairot" },
		{ id: 2, nom: "mag mairot" },
		{ id: 3, nom: "jeo mairot" },
	],
};

class App extends React.Component {
	//dans le render un seul element racine donc une seul div
	render() {
		const title = "liste des clients";
		const element = <li>test variable</li>;
		// map crée un tableau transformé tres importante
		//dans l'idée c la même chose qu'une foreach
		//pour chaque client il génère un li
		//fonction fléché
		const elements = this.state.clients.map((client) => (
			<li>
				{client.nom} <button>x</button>
			</li>
		));

		return (
			<div>
				{/* variable title  */}
				<h1>{title}</h1>
				<ul>
					{elements}

					{/* <li>
						jc mairot <button>x</button>
					</li>
					<li>
						mag mairot <button>x</button>
					</li>
					<li>
						jeo mairot <button>x</button>
					</li> */}
				</ul>
				<form>
					<input type="text" placeholder="ajout client"></input>
					<button>comfirmer</button>
				</form>
			</div>
		);
	}
}

//*************************************************************************** */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
