import React from 'react';
import propTypes from 'prop-types';

export default function Character({ img, name, species }) {
  return (
    <dl>
      <dt>Img</dt>
      <dd>{img}</dd>

      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Species</dt>
      <dd>{species}</dd>
    </dl>
  );
}

Character.propTypes = {
  img: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  species: propTypes.string.isRequired
};
