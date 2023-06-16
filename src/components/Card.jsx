import PropTypes from 'prop-types';
import "../sass/Card.scss";

const Card = ({ name, img }) => {
  return (
    <div className='card'>
      <p className='card_name'>{name}</p>
      <div className='card_circle'></div>
      <img className='card_img' src={img} alt='Pokemon Img' />
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
