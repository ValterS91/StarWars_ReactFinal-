import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import React, { useRef, useContext, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { SplitButton } from "primereact/splitbutton";
import { Toast } from "primereact/toast";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const toast = useRef(null);

	const deleteFavorites = () => {
		toast.current.show({ severity: "success", summary: "Delete", detail: "Data Deleted" });
	};

	return (
		<nav className="navbar navbar-light">
			<img
				className="starWarsImg"
				src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
				width="10%"
				style={{ marginLeft: "4em" }}
			/>
			<Toast ref={store.favorites.toast} />
			<div className="splitButtonDiv justify-content-end">
				<SplitButton label="favorite" icon="pi pi-heart" model={store.favorites} />
			</div>
		</nav>
	);
};
