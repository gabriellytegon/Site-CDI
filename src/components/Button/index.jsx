import './style.css'
import { Button } from "./Button";
export { Button };

const Button = () => {
    return (
      <div>
        <Button1 label="Botão Azul Escuro" color="light" backgroundColor="#0108F8" />
        <Button2 label="Botão Azul Claro" color="light" backgroundColor="#E4E5FF" border={2} borderColor="#0108F8" />
      </div>
    );
  };
  
  export default Button;