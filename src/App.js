import React, { useEffect } from 'react';
import axios from 'axios';
import Header from './componentes/Header';
import Aside from './componentes/Aside';
import Contenido from './componentes/Contenido';
import Footer from './componentes/Footer';

const App = () => {
  useEffect(() => {
    // Llamada a la API usando Axios en el montaje del componente
    axios.get('https://api.uautonoma.cl/uavistas-banner/uwmcsno')
      .then(response => {
        console.log('Respuesta del servidor:', response.data);
        // Realiza las acciones necesarias con la respuesta del servidor
      })
      .catch(error => console.error('Error al realizar la solicitud:', error));
  }, []); // El segundo parámetro del useEffect asegura que se ejecute solo una vez al montar el componente

  return (
    <div>
      <Header />
      <Aside />
      <Contenido />
      <Footer />
    </div>
  );
};

export default App;
