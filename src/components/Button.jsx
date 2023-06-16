import PropTypes from 'prop-types';
import '../sass/App.scss';

const Button = ({ icon, handleClick }) => {
  return (
    <div className='button_box'>
      <button 
        className='button' 
        onClick={handleClick}
      >
        {icon}
      </button>
      <div className='button_boxshadow'></div>
    </div>
  );
}

Button.propTypes = {
  icon: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;
