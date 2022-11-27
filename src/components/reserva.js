import './css/reserva.css';
import './css/main.css';
import { HacerReserva } from './formReserva';
import triangleBG from './Img/quienSomosBG.svg';

function Reserva(){
    return (
        <div className="heightBg" style={{ backgroundImage: `url(${triangleBG})` }}>
            <div className="col contenido">
                <div>
                    <HacerReserva/>
                </div>
                
            </div>
        </div>
      
        
    )
}

export default Reserva