import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import React, { useState, useEffect, useRef, useParams, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cardCharacters.scss";
import PropTypes, { func } from "prop-types";
import { Context } from "../store/appContext";

export const CardStarship = props => {
	const { store, actions } = useContext(Context);

	var images = store.images;
	//fetch de people/...

	const [starship, setStarship] = useState([]);

	useEffect(() => {
		const obtenerDatos = async () => {
			const data2 = await fetch(`https://www.swapi.tech/api/starships/${props.uid}`);
			const users2 = await data2.json();
			setStarship(users2.result.properties);
		};
		obtenerDatos();
	}, []);

	return (
		<React.Fragment>
			<div className="card cardPlanets">
				<img
					className="card-img-top"
					src="https://d25nlln9isiu5y.cloudfront.net/wp-content/uploads/2020/08/18093730/Starwars-trilogia.jpg"
					onError={e =>
						(e.target.src =
							"https://d25nlln9isiu5y.cloudfront.net/wp-content/uploads/2020/08/18093730/Starwars-trilogia.jpg")
					}
				/>
				<div className="card-body">
					<h5 className="card-title">
						Model: <strong>{props.model}</strong>
					</h5>

					<p className="card-text" style={{ lineHeight: "1.5" }}>
						Manufacturer: <strong>{starship.manufacturer}</strong>
					</p>
					<p className="card-text" style={{ lineHeight: "1.5" }}>
						Cost in credits: <strong>{starship.cost_in_credits}</strong>
					</p>
					<p className="card-text" style={{ lineHeight: "1.5" }}>
						Maximum atmosphering speed: <strong>{starship.max_atmosphering_speed}</strong>
					</p>
					<div className="d-flex buttonsDiv">
						<Link to={`/demo/${props.uid}`}>
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
		</React.Fragment>
	);
};

CardStarship.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string,
	uid: PropTypes.string,
	manufacturer: PropTypes.string,
	max_atmosphering_speed: PropTypes.string
};
