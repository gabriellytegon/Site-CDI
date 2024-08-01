import Button from "../Button";
import "./style.css"

const Bigcard = ({ cardtitle, text, button_text, breakrow = false, link}) => {
    return (
        <div id="bigcard">
            <div className="cardtitle">
            <h1 className={breakrow ? 'breakrow': ''}>{cardtitle}</h1>
            </div>

            <div className="text-area">
                <p>{text}</p>
            </div>

            <div className="button-area">
                <Button                     //chama o componente button
                    buttonText={button_text}
                    fontSize={13}
                    option={0}
                    link={link}
                />
            </div>
        </div>
    )
}
export default Bigcard;