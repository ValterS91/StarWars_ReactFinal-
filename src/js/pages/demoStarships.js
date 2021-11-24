import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import PropTypes from "prop-types";

export const DemoStarships = props => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

	const [starships, setStarships] = useState([]);

	const obtenerDatos = () => {
		// const data = await fetch(`https://www.swapi.tech/api/people/${id}`);
		// const users = await data.json();
		// setPerson(users.result.properties);

		fetch(`https://www.swapi.tech/api/Starships/${id}`)
			.then(response => response.json())
			.then(data => {
				console.log("STARSHIP", data.result);
				setStarships(data.result.properties);
			});
	};

	useEffect(() => {
		obtenerDatos();
	}, []);

	return (
		<div className="container-fluid">
			<div className="containerAll mt-3 row">
				<div className="colImg col-8">
					<div className="containerInfo">
						<img
							className="imgInfo"
							src="https://d25nlln9isiu5y.cloudfront.net/wp-content/uploads/2020/08/18093730/Starwars-trilogia.jpg"
							//alt="Card image cap"
						/>
						<div className="info col-4">
							<h1>{planetas.name}</h1>
							<p>Descrption: A starship.</p>
							<div className="imgDecal" />
						</div>
					</div>
				</div>
			</div>
			<div className="descriptionList">
				<table className="table table-striped">
					<thead>
						<tr>
							<th className="borderTable" scope="col">
								ROTATION PERIOD
							</th>
							<th className="borderTable" scope="col">
								ORBITAL PERIOD
							</th>
							<th className="borderTable" scope="col">
								GRAVITY
							</th>
							<th className="borderTable" scope="col">
								CLIMATE
							</th>
							<th scope="col">TERRAIN</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="rowStyle borderTable">{planetas.rotation_period}</th>
							<th className="rowStyle borderTable">{planetas.orbital_period}</th>
							<th className="rowStyle borderTable">{planetas.gravity}</th>
							<th className="rowStyle borderTable">{planetas.climate}</th>
							<th className="rowStyle">{planetas.terrain}</th>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="d-flex justify-content-center">
				<Link to="/">
					<button className="btn btn-secondary">Back home</button>
				</Link>
			</div>
		</div>
	);
};
