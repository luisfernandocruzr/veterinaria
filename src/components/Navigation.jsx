import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    
    <nav>
            <div className='capa2'></div>
            <Link to={`/menu/`}></Link>

      <div className='nav'>
    <div className='compraFlor'>
          <Link to="/productos">Citas</Link>
        <br />
        </div>
        <div className='ventaFlor'>  
          <Link to="/editar">Medicamentos</Link>
        </div>
        <div className='contactos'>
          <Link to="/agregar"> Accesorios </Link>
        </div> 
        <div className='contactos'>
          <Link to="/menu"> menu </Link>
        </div> 
      </div>
      <div><br />
      <h3>Veterinaria "Mejor Amigo", le ofrece un servicio de calidad </h3>
      <h3>donde se atiende de la mejor manera a su mascota.</h3>
      <br />
      <br />
      </div>
    </nav>

  );
}

export default Navigation;
