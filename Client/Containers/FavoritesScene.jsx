import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteCard from '../Components/FavoriteCard.jsx';

function FavoritesScene() {
  const favsList = useSelector((store) => store.favs.favsList);
  const favoriteCards = [];
  for (let i = 0; i < favsList.length; i++) {
    const uniqueId = `favorite${favsList[i].id}`;
    favoriteCards.push(<FavoriteCard index={i} key={uniqueId} />);
  }
  return (
    <>
      {favoriteCards}
    </>
  );
}
export default FavoritesScene;
