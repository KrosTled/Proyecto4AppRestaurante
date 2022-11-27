import './css/inicio.css';
import './css/main.css';
import layered from './Img/inicio.svg';
import pizza from './Img/Pizza.jpg';
import Reserva from './reserva';
import QuienesSomos from './quienesSomos';
import Fotter from './fotter';
import NavBar from './navBar.js';

function InicioComp(){
    return (
        <div className='heightBg' style={{ backgroundImage: `url(${layered})` }} >
            <div className='col contenido'>
                <div className="">
                    <div className="row">
                        <div className="col imgZone">
                            <div className="imgContainer">
                                <img className='imgInicio' src={pizza} alt="pizza"/>
                            </div>
                        </div>
                        <div className="col iniText">
                            <h2>Fribonachi</h2>
                            <p>Contamos con un excelente equipo de chefs talentosos que se capacitan en nuestras dos cocinas, 
                                donde podemos personalizar cada plato para adaptarlo a una ocasión especial. Contamos con un hermoso y elegante 
                                interior que está diseñado para complementar el encantador ambiente dentro del restaurante, brindando un ambiente 
                                agradable. Centrado en ofrecer un menú de auténtica cocina italiana, puede estar seguro de probar los platos favoritos 
                                de Italia, elaborados con los productos de temporada más frescos y en un ambiente cálido y acogedor.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}
function Inicio(){
    return(
        <div>
            <NavBar/>
            <InicioComp/>
            <QuienesSomos/>
            <Reserva/>
            <Fotter/>
        </div>
    )
}

export default Inicio