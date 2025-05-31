import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const { store } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand" style={{ cursor: "pointer" }}>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
							alt="Star Wars Logo"
							height="40"
						/>
					</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							id="favoritesDropdown"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favorites ({store.favorites.length})
						</button>
						<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
							{store.favorites.length === 0 ? (
								<li className="dropdown-item text-muted">No favorites yet</li>
							) : (
								store.favorites.map((fav, index) => (
									<li key={index} className="dropdown-item">
										{fav.name} <span className="text-secondary">({fav.type})</span>
									</li>
								))
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
