import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import PropTypes from "prop-types";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	var images = store.images;

	console.log("IMAGES", images);
	const { id } = useParams();
	console.log("ID", id);

	const [person, setPerson] = useState([]);

	const obtenerDatos = () => {
		// const data = await fetch(`https://www.swapi.tech/api/people/${id}`);
		// const users = await data.json();
		// setPerson(users.result.properties);

		fetch(`https://www.swapi.tech/api/people/${id}`)
			.then(response => response.json())
			.then(data => {
				console.log("PERSONA", data.result);
				setPerson(data.result.properties);
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
							onError={e =>
								(e.target.src =
									"https://d25nlln9isiu5y.cloudfront.net/wp-content/uploads/2020/08/18093730/Starwars-trilogia.jpg")
							}
						/>
						<div className="info col-4">
							<h1>{person.name}</h1>
							<p>Desception: A person.</p>
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
								NAME:
							</th>
							<th className="borderTable" scope="col">
								BIRTHDATE:
							</th>
							<th className="borderTable" scope="col">
								GENDER:
							</th>
							<th className="borderTable" scope="col">
								HEIGHT:
							</th>
							<th className="borderTable" scope="col">
								SKIN:
							</th>
							<th scope="col">MASS</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="rowStyle borderTable">{person.name}</th>
							<th className="rowStyle borderTable">{person.birth_year}</th>
							<th className="rowStyle borderTable">{person.gender}</th>
							<th className="rowStyle borderTable">{person.height}</th>
							<th className="rowStyle borderTable">{person.skin_color}</th>
							<th className="rowStyle">{person.mass}</th>
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
Demo.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string
};
