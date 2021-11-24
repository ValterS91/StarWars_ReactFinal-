import React, { useContext, useState, useEffect, useMemo } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { CardCharacter } from "../component/cardCharacters";
import { CardPlanets } from "../component/cardPlanets";
import { CardStarship } from "../component/cardStarships";
import { ModalContent } from "../component/modal";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [starships, setStarships] = useState([]);

	const obtenerPersonajes = () => {
		fetch("https://www.swapi.tech/api/people?page=1&limit=100")
			.then(response => response.json())
			.then(data => {
				setCharacters(data.results);
			});
	};

	const obtenerPlanetas = () => {
		fetch("https://www.swapi.tech/api/planets?page=1&limit=100")
			.then(response => response.json())
			.then(data => {
				setPlanets(data.results);
			});
	};
	const obtenerStarships = () => {
		fetch("https://www.swapi.tech/api/starships?page=1&limit=100")
			.then(response => response.json())
			.then(data => {
				setCharacters(data.results);
			});
	};

	useEffect(() => {
		obtenerPersonajes();
		obtenerPlanetas();
		obtenerStarships();
	}, []);

	useEffect(
		() => {
			if (store.modalActive == true) {
				actions.changeModal();
			}
		},
		[store.modalActive]
	);

	console.log("CHARACTERS", characters);
	console.log("PLANETS", planets);
	console.log("STARSHIPS", starships);

	return (
		<div className="Home">
			{store.modalActive ? <ModalContent /> : null}
			<div className="characters">
				<h1>Characters</h1>
				<div className="scrollmenu">
					{characters.map(item => (
						<span key={item.uid}>
							<CardCharacter name={item.name} uid={item.uid} />
						</span>
					))}
				</div>
			</div>
			<div className="planets">
				<h1>Planets</h1>
				<div className="scrollmenu">
					{planets.map(item => (
						<span key={item.uid}>
							<CardPlanets name={item.name} uid={item.uid} />
						</span>
					))}
				</div>
			</div>
			<div className="starships">
				<h1>Starships</h1>
				<div className="scrollmenu">
					{planets.map(item => (
						<span key={item.uid}>
							<CardStarship name={item.name} uid={item.uid} />
						</span>
					))}
				</div>
			</div>
		</div>
	);
};
