import React, { useState, useRef, useEffect } from 'react';
import '../Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const favoritesRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsFavoritesOpen(false);
    if (!isSearchOpen) {
      setSearchQuery('');
    }
  };

  const toggleFavorites = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
    setIsSearchOpen(false);
  };

  const search = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        favoritesRef.current &&
        !favoritesRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
        setIsFavoritesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sw-navbar">
      <div className="navbar-container">
        <div className="navbar-top">
          <a href="/" className="logo">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
              alt="STAR WARS"
              width="120"
            />
          </a>

          <div className="navbar-right">
            <div className={`search-container ${isSearchOpen ? 'open' : ''}`} ref={searchRef}>
              <form onSubmit={search}>
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search Star Wars"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <div className="search-icons">
                  {isSearchOpen && (
                    <button
                      type="button"
                      className="search-close"
                      onClick={toggleSearch}
                      aria-label="Close search"
                    >
                      <FontAwesomeIcon icon={faTimes} className="fa-icon" />
                    </button>
                  )}
                  <button
                    type={isSearchOpen ? 'submit' : 'button'}
                    className={`search-toggle ${isSearchOpen ? 'open' : ''}`}
                    onClick={!isSearchOpen ? toggleSearch : undefined}
                    aria-label={isSearchOpen ? 'Search' : 'Open search'}
                  >
                    <FontAwesomeIcon icon={faSearch} className="fa-icon" />
                  </button>
                </div>
              </form>
            </div>

            <div className="favorites-container" ref={favoritesRef}>
              <button
                className={`favorites-toggle ${isFavoritesOpen ? 'active' : ''}`}
                onClick={toggleFavorites}
              >
                Favorites
                <FontAwesomeIcon icon={faChevronDown} className="fa-icon dropdown-arrow" />
              </button>
              {isFavoritesOpen && (
                <div className="favorites-dropdown">
                  <div className="favorites-dropdown-item">Favorite Item 1</div>
                  <div className="favorites-dropdown-item">Favorite Item 2</div>
                  <div className="favorites-dropdown-item">Favorite Item 3</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
