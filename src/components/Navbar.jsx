import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars Blog</span>
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
              Favoritos ({store.favorites.length})
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
			{store.favorites.length === 0 ? (
				<li className="dropdown-item text-muted">No hay favoritos</li>
			) : (
				store.favorites.map((fav, index) => (
				<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
					<span>{fav}</span>
					<button
					className="btn btn-sm btn-danger ms-2"
					onClick={() => dispatch({ type: "remove_favorite", payload: fav })}
					>
					❌
					</button>
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
