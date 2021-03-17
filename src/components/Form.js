import React, { Component } from "react";
import DataList from "./DataList";

const url = "http://localhost:3000/php/ajax.php";
 
export default class Form extends Component {
	state = {
		searchPlane: "",
		form: null,
	};

	componentDidMount() {
		this.setState({
			form:document.querySelector("form")
		})
		console.log("componentdidmount");
	}

	// fonction pour recup ce qui est ecrit dans l'input
	handleChange = (e) => {
		// console pour voir la value dans l'input
		console.log(e.target.value);
		//change d'etat
		this.setState({
			searchPlane: e.target.value,
		});
		console.log(this.state.form);
		this.fetchData;
	};

	fetchData = () => {
		resultDiv.innerHTML = "";
		dataList.innerHTML = "";
		if (search.value !== "") {
		const formData = new FormData(form);
	
		//On communique avec le script passé en 1er argument sous forme de caractère
		fetch("", //./php/ajax.php
		//2ème argument de fetch, le corps de notre requête, dans notre cas on précise la méthode "POST" et le body (les données) soit le formData
		{
		method: "POST",
		body: formData
		})
		//Nous recevons une Response du serveur, nous retournons une Promise résolue qui contiendra les données parsées en JSON, soit un objet JS
		.then(response => response.json())
		//Nous recevons ENFIN nos données comme un objet JS
		.then(planes => {
			//on manipule nos données
			console.log(planes);
			planes.forEach((plane) => {
				// affichage des option
				let createOption = document.createElement("option");
				console.log(createOption);
				// attribution d'une classe
				createOption.className = "classOption";
				// ajoute un contenu à l'option
				createOption.innerHTML = plane.plane_name;
				//insére dans dataList
				dataList.appendChild(createOption);

				// ici le code de dessous
			});
	
		})
		.catch(e => {
			console.error(e);
			resultDiv.innerHTML = `<p>Désolé, nous avons rencontré une erreur dans le système</p>`;
		});
		}

		
	};

	render() {
		return (
			<div className="flex">
				<div className="searchBar">
					<form action="" method="POST">
						<label htmlFor="search"></label>
						<input
							type="search"
							list="planesDcs"
							autoComplete="off"
							name="search"
							id="search"
							placeholder="Quel avions ?"
							onChange={this.handleChange}
						/>
						<DataList />
						<button
							className="btn"
							type="submit"
							id="validate"
							value="validate"
						></button>
					</form>
				</div>
			</div>
		);
	}
}
