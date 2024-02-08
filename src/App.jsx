import React, { useEffect, useState } from 'react';
import BarChart from './echarts/BarChart';

const App = () => {
  
  const api_key = '72f2602705857f26f6ed003ef0ac9218';
  const [ciudad, setCiudad] = useState('Puebla');
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const getGeocodingData = async(ciudad, pais, limite) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=${limite}&appid=${ api_key }`;
    try {
      const response = await fetch(url);
      //console.log(response);
      const data = await response.json();
      console.log(data);
      setCiudad( data[0].name );
      setLat( data[0].lat );
      setLon( data[0].lon );  
    } catch (error) {
      console.log(error);
    }
  }

  const getWheatherData = async (latitud, longitud) => {
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${api_key}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = () => {
    alert("Hiciste una busqueda con el texto: " + ciudad);
    getGeocodingData(ciudad, 'MX', 2);
    getWheatherData(lat, lon);
  }

  useEffect(() => {
    getGeocodingData('Atlixco', 'MX', 2);
    getWheatherData(lat, lon);
  }, []);
  

  return (
    <>
      <div className='row'>
        <div className='col-xs-12 col-md-8 col-lg-6'>

          <div className='card card-primary'>
            <div className='card-header'>
              <h3 className='card-title'>Clima de la ciudad de { ciudad }</h3>
            </div>
            <div className='card-body'>
              <p>Lorem ipsum
              </p>
            </div>
            <div className='card-footer'>
              <button className='btn bg-orange btn-lg float-right'>Aceptar</button>
              <button className='btn btn-secondary'>Cancelar</button>
            </div>
          </div>

        </div>

        <div className='col-xs-12 col-md-8 col-lg-6'>

          <div className="alert alert-danger alert-dismissible">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            <h5><i className="icon fas fa-ban"></i> Alert!</h5>
            Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my
            entire
            soul, like these sweet mornings of spring which I enjoy with my whole heart.
          </div>

        </div>

      </div>

      <div className='row'>
        <div className='col-12'>

          <BarChart labels={["Mujeres", "Hombres", "Compañeres"]} serie={[54, 32, 9]} />

        </div>
        <div className='col-12'>

          <BarChart labels={["Frutas", "Verduras", "Lacteos", "Carnes"]} serie={[100, 200, 50, 30]} />

        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <div className="input-group input-group-md">
            <input type="text" className="form-control" placeholder='Nombre de la Ciudad' value={ ciudad } onChange={ (e) => setCiudad( e.target.value ) } />
              <span className="input-group-append">
                <button type="button" className="btn btn-info btn-lg" onClick={()=> handleSearch() }>Buscar</button>
              </span>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App;