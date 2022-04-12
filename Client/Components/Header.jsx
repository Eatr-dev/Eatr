import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Header({ onClick }) {
  const scene = useSelector((store) => store.setScene.sceneState);
  const hideFavorites = useSelector((store) => store.favs.favsList.length < 4);
  switch (scene) {
    case 'feed':
      return (
        <>
          <button id="back" onClick={onClick} type="button">Back</button>
          <h1>Eatr</h1>
          <button id="favorites" disabled={hideFavorites} onClick={onClick} type="button">Favorites</button>
        </>
      );
    case 'favorites':
      return (
        <>
          <button id="back" onClick={onClick} type="button">Back</button>
          <h1>Eatr</h1>
          <p>Congrats! Here are your liked options</p>
        </>
      );
    default:
      return (
        <h1>Eatr</h1>
      );
  }
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
