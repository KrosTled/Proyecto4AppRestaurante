import React from "react";
import { COLECCION, saveData, readData } from './dataReader.js';
import './css/main.css';
import './css/reserva.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormGroup , Button, Col, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Card, CardBody, CardHeader, CardTitle, CardText} from 'reactstrap';
const nombre = React.createRef();
const email = React.createRef();
const fecha = React.createRef();

function HacerReserva() {

  const [reserva ,setReserva] = React.useState([]);

  const addReserva = async () => {
    await saveData(COLECCION, nombre.current.value,email.current.value, fecha.current.value,tiempo)
    .then(() => {
      readData(COLECCION)
        .then((data) => {
          setReserva(data);
        });
    })
    .catch((e) => {
      console.log(e);
    });
    setVisible(true)
  }

  const [tiempo ,setTiempo] = React.useState("14:00");
  function cambiarHora(string){
    setTiempo(string)
  }


  const [dropdown ,setDropdown] = React.useState(false);
  function dropdownChange(){
    setDropdown(!dropdown)
  }

  const [visible ,setVisible] = React.useState(false);
  // function visibilidad(){
    // setVisible(true)
  // }

  return (
    <div className="formulario">
      {visible? <Card
      className="my-2"
      color="dark"
      inverse
      >
      <CardHeader>
        Se completo su reserva
      </CardHeader>
      <CardBody>
        <CardTitle tag="h5">
          Lo esperamos el {fecha.current.value} a las {tiempo}
        </CardTitle>     
      </CardBody>
      </Card>: ''}
      
      
      <form>
        
        <Col>
          <FormGroup>
            <label className="labelForm">Nombre del reservante</label>
            <input className="form-control" ref={nombre} type="text" rows={3} placeholder="Nombre Apellido"></input>
          </FormGroup>
          <FormGroup>
            <label className="labelForm">Email</label>
            <input className="form-control" ref={email} type="text" rows={3} placeholder="example@gmail.com"></input>
          </FormGroup>
          <FormGroup>
            <label className="labelForm">Fecha</label>
            <input className="form-control" ref={fecha} type="date"></input>
          </FormGroup>
          <div className="menuHora">
            <FormGroup>
              <label className="labelForm">Hora</label>
              {/* <input ref={hora} type="time" rows={3} placeholder="tu xtuit anónimo"></input> */}
              <Dropdown isOpen={dropdown} toggle={dropdownChange} direction="right">
                <DropdownToggle> Hora de reserva: {tiempo} </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => cambiarHora("14:00")}>14:00</DropdownItem>
                    <DropdownItem onClick={() => cambiarHora("16:00")}>16:00</DropdownItem>
                    <DropdownItem onClick={() => cambiarHora("18:00")}>18:00</DropdownItem>
                    <DropdownItem onClick={() => cambiarHora("20:00")}>20:00</DropdownItem>
                    <DropdownItem onClick={() => cambiarHora("22:00")}>22:00</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </FormGroup>
          </div>
          
          
          
          
          <Button color="primary" onClick={() => addReserva()}> Reservar!</Button>
        </Col>
        
        
      </form>
    </div>
  );

}

export { HacerReserva };