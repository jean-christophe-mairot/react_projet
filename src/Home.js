import React, { Component, Fragment } from "react";
import Form from "./components/Form";
import PlanesTable from "./components/PlanesTable";

export default class Home extends React.Component {
	render() {
		return (
			<Fragment>
				<h1>Home</h1>
				<Form />
				<PlanesTable />
			</Fragment>
		);
	}
}
