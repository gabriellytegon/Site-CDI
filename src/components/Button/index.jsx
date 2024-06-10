import './style.css'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Button = ({buttonText, link, option, fontSize}) => {
    return (
      <Link
        target="_blank" 
        rel='noreferrer'
        id='button'
        to={link}
        className={option == 0 ? 'button1' : option == 1 ? 'button2' : ''}
        style={{fontSize: fontSize}}
      >
        {buttonText}
      </Link>
    );
  };
  
  export default Button;