
import { Link } from "react-router-dom";
import { useContext } from "react";

import useGlobalReducer from "../hooks/useGlobalReducer";
import { createContext } from "react";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/">
					<img
					src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
					alt="STAR WARS"
					width="120"
					/>
				</Link>
				<div className="ml-auto">

					<button
						className="btn btn-warning dropdown-toggle"
						type="button"
						id="favoritesDropdown"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						data-bs-auto-close="false"
					> 
						Favorites —— {store.favorites.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown" data-bs-auto-close="outside" >
           				 {store.favorites.length === 0 ? (
             				 <li className="dropdown-item text-muted">No favorites yet</li>
           					 ) :  store.favorites.map(( favorite, index) => (
							<li key={index} className="d-flex justify-content-between align-items-center mb-2 px-3"> {favorite.name}
							<button
							className="btn btn-sm btn-danger ms-2"
							onClick={() => dispatch({ type: "REMOVE_FAVORITE", payload: favorite })}	 >
							[ ✕ ]
						  </button>
						</li>))}
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
						<Link to="/favorites" className="dropdown-item text-center">
							See All
						</Link>
						</li>
					</ul>



					{/* <Link to="/single/:theId">Single</Link> */}

					
				</div>

			</div>
		</nav>
	);
};



