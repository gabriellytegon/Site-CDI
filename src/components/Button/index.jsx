import { Button } from "./Button";
export { Button };

const App = () => {
    return (
      <div>
        <Button label="Botão Azul Escuro" color="light" backgroundColor="#0108F8" />
        <Button label="Botão Azul Claro" color="light" backgroundColor="#E4E5FF" border={2} borderColor="#0108F8" />
      </div>
    );
  };
  
  export default App;