import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import React, { useState, useEffect, useRef, useParams, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cardCharacters.scss";
import PropTypes, { func } from "prop-types";
import { Context } from "../store/appContext";

export const CardCharacter = props => {
	const { store, actions } = useContext(Context);

	var images = store.images;
	//fetch de people/...

	const [person, setPerson] = useState([]);

	useEffect(() => {
		const obtenerDatos = async () => {
			const data2 = await fetch(`https://www.swapi.tech/api/people/${props.uid}`);
			const users2 = await data2.json();
			setPerson(users2.result.properties);
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
						Name: <strong>{props.name}</strong>
					</h5>

					<p className="card-text" style={{ lineHeight: "1.5" }}>
						Gender: <strong>{person.gender}</strong>
					</p>
					<p className="card-text" style={{ lineHeight: "1.5" }}>
						Hair Color: <strong>{person.hair_color}</strong>
					</p>
					<p className="card-text" style={{ lineHeight: "1.5" }}>
						Eye Color: <strong>{person.eye_color}</strong>
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
CardCharacter.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	gender: PropTypes.string
};
