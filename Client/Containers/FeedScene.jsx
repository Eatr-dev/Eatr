import React from 'react';
import { useDispatch } from 'react-redux';

import { getNextActionCreator, addToFavActionCreator } from '../Actions/actions.js';

import RestaurantCard from '../Components/RestaurantCard.jsx';

function FeedScene() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.id === 'like') {
      // dispatch action to add to favorites
      dispatch(addToFavActionCreator());
      // dispatch aciton to get next restaurant
      dispatch(getNextActionCreator());
    } else {
      dispatch(getNextActionCreator());
    }
  };

  return (
    <>
      <RestaurantCard />
      <button
        onClick={handleClick}
        id="dislike"
        type="button"
      >
        X
      </button>

      <button
        onClick={handleClick}
        id="like"
        type="button"
      >
        ✓
      </button>
    </>
  );
}

export default FeedScene;
