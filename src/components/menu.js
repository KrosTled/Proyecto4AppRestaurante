import NavBar from './navBar.js';
import './css/Menu.css'
import menuBG from './Img/Menu.svg'
import bgCards from './Img/bgCards.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, CardBody, CardTitle, CardText,CardSubtitle} from 'reactstrap';

import {pizzas, pastas} from './elementosMenu.js';

function PizzasElement(){
    return (
        pizzas.map((element) => (
            <Card
        style={{
          width: '18rem',
          height: '20rem',
          backgroundImage: `url(${bgCards})` 
        }}
        key={element.id}
        className='cardFromArray'
      >
        <CardBody>
          <CardTitle tag="h5">
            {element.nombre}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            ingredientes
          </CardSubtitle>
          <CardText>
            {element.ingredientes}
          </CardText>
        </CardBody>
        </Card>
        ))   
  )
}

function PastasElement(){
    return (
        pastas.map((element) => (
            <Card
        style={{
          width: '18rem',
          height: '20rem',
          backgroundImage: `url(${bgCards})`
        }}
        key={element.id}
        className='cardFromArray'
      >
        <CardBody>
          <CardTitle tag="h5">
            {element.nombre}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            ingredientes
          </CardSubtitle>
          <CardText>
            {element.ingredientes}
          </CardText>
        </CardBody>
        </Card>
        ))   
  )
}

function Menu(){
    return (
    <div>
        <NavBar/>   
        <div className='bgHeigtMenu' style={{ backgroundImage: `url(${menuBG})` }} >
            <div className='menuElements'>
                <Container>
                    <h2 className='menuTitulo'>Pizzas</h2>
                    <div className='menuArrayCards'>
                        <PizzasElement/>  
                    </div>
                    <h2 className='menuTitulo'>Pastas</h2>
                    <div className='menuArrayCards'>
                        <PastasElement/>  
                    </div>
                </Container> 
            </div>  
        </div>
    </div>
  )
}

export default Menu