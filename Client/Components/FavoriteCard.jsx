import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function FavoriteCard({ index }) {
  const business = useSelector((store) => store.favs.favsList[index]);
  const { location } = business;
  const formattedPhone = `(${business.phone.slice(1, 4)}) ${business.phone.slice(4, 7)}-${business.phone.slice(7, 11)}`;
  const formattedAddress = `${location.address1} ${location.address2}\n${location.city}, ${location.state} ${location.zip_code}`;

  return (
    <article className="favorite-card">
      <img src={business.image_url} alt="restaurant's main profile pic" />
      <section className="favorites-business-info">
        <h3>{business.name}</h3>
        <address>
          <p>{formattedAddress}</p>
          <a href={`tel:+${business.phone}`}>{formattedPhone}</a>
        </address>
      </section>
    </article>
  );
}
FavoriteCard.propTypes = {
  index: PropTypes.number.isRequired,
};
export default FavoriteCard;
