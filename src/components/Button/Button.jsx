import './style.css'

const Button = ({ label, color, backgroundColor, border, borderColor }) => {
    const styles = {
      button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 20px',
        borderRadius: '1px',
        cursor: 'pointer',
        color: color,
        backgroundColor: backgroundColor,
        border: border ? `${border}px solid ${borderColor}` : 'none',
      },
    };
  
    return (
      <button style={styles.button}>{label}</button>
    );
  };
  
  export default Button;
