import './css/main.css';
import './css/quienesSomos.css';
import chef from './Img/Chef.jpg';
import triangleBG from './Img/quienSomosBG.svg';

function QuienesSomos(){
    return (
        <div className="QScont heightBg" style={{ backgroundImage: `url(${triangleBG})` }}>
            <div className="custom-shape-divider-top-1669140888">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="col contenido">
                <div className="row">
                    <div className="col QStext">
                        <h2>Somos Fribonachi</h2>
                        <p>Nosotros empezamos en el negocio el año 1976 luego de la apertura de nuestro primer local, en la actualidad llevamos una de los restaurantes de comida italiana más grande de toda la región del Bio-Bio, dado nuestro servicio y calidad culinaria lo que nos han dado diferentes premio, tanto por mantener la tradición de las recetas de antaño la cual nos permite caracterizar nos tanto en el sabor y textura de las pastas como la masa de nuestras pizzas, y nuestro sistema de negocio por temporadas nos permite el uso de un menú versátil lo que nos permite innovar y seguir creando platillos.</p>
                    </div>
                    <div className="col QSimg">
                        <img className='imgInicio' src={chef} alt="pizza"/>
                    </div>
                </div>         
            </div>  
        </div>
          
    )
}
export default QuienesSomos