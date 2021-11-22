import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import "../../styles/cardPlanets.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CardPlanets = props => {
	const { store, actions } = useContext(Context);
	//fetch de people/...

	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		const obtenerDatos = async () => {
			const data2 = await fetch(`https://www.swapi.tech/api/planets/${props.uid}`);
			const users2 = await data2.json();
			setPlanets(users2.result.properties);
		};
		obtenerDatos();
	}, []);

	return (
		<div className="card cardPlanets">
			<img
				className="card-img-top"
				src="https://d25nlln9isiu5y.cloudfront.net/wp-content/uploads/2020/08/18093730/Starwars-trilogia.jpg"
				//alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">
					Name: <strong>{props.name}</strong>
				</h5>

				<p className="card-text" style={{ lineHeight: "1.5" }}>
					Population: <strong>{planets.population}</strong>
				</p>
				<p className="card-text" style={{ lineHeight: "1.5" }}>
					Diameter: <strong>{planets.diameter}</strong>
				</p>
				<div className="d-flex buttonsDiv">
					<Link to={`/demoPlanets/${props.uid}`}>
						<button className=" buttonBlue " type="button" href="#">
							{"Learn more!"}
						</button>
					</Link>

					<button
						type="button"
						className="buttonHeart ml-auto mr-5 "
						onClick={() => actions.addFavorites(props.name)}>
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};
CardPlanets.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string
};
