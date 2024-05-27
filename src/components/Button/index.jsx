import './style.css'

// eslint-disable-next-line react/prop-types
const Button = ({buttonText, link, option, width, fontSize}) => {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel='noreferrer'
        id='button'
        className={option == 0 ? 'button1' : option == 1 ? 'button2' : ''}
        style={{width: width, fontSize: fontSize}}
      >
        {buttonText}
      </a>
    );
  };
  
  export default Button;