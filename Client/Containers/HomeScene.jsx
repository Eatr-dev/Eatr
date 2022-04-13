import React from 'react';
import PropTypes from 'prop-types';

function HomeScene({ onClick }) {
  return (
    <div className="home-form">
      <form>
        <label htmlFor="location">Location: </label>
        <br />
        <input type="text" id="location" />
        <br />
        <label htmlFor="category">Category:</label>
        <br />
        <input type="text" id="category" />
        <br />
        <input type="submit" value="Submit" id="submit" onClick={onClick} />
      </form>
    </div>
  );
}
HomeScene.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HomeScene;
