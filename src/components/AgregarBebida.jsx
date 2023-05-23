import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const AgregarBebida = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [nuevoMedicamento, setNuevoMedicamento] = useState({
    nombre: '',
    precio: ''
  });
  const [edicionMedicamento, setEdicionMedicamento] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevoMedicamento((prevMedicamento) => ({
      ...prevMedicamento,
      [name]: value
    }));
  };

  const agregarMedicamento = () => {
    setMedicamentos((prevMedicamentos) => [
      ...prevMedicamentos,
      nuevoMedicamento
    ]);
    setNuevoMedicamento({ nombre: '', precio: '' });
  };

  const guardarEdicion = () => {
    setMedicamentos((prevMedicamentos) => {
      const nuevosMedicamentos = [...prevMedicamentos];
      nuevosMedicamentos[edicionMedicamento] = nuevoMedicamento;
      return nuevosMedicamentos;
    });
    setEdicionMedicamento(null);
    setNuevoMedicamento({ nombre: '',  precio: '' });
  };
  const eliminarMedicamento = (index) => {
    setMedicamentos((prevMedicamentos) => {
      const nuevosMedicamentos = [...prevMedicamentos];
      nuevosMedicamentos.splice(index, 1);
      return nuevosMedicamentos;
    });
  };


  return (
    
    <div className='formu'>

          <div className='capa'></div>

          <h3>Accesorios para Mascota</h3>
      <form>
        <input
          type="text"
          name="nombre"
          value={nuevoMedicamento.nombre}
          onChange={handleChange}
          placeholder="Accesorio"
        />
        
        <input
          type="text"
          name="precio"
          value={nuevoMedicamento.precio}
          onChange={handleChange}
          placeholder="Precio"
        />
        <button className='btn btn-success' type="button" onClick={agregarMedicamento}>
          Agregar
        </button>
      </form>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>

            <Link to={`/agregar/`}></Link>

      <h2>Accesorios para Mascota</h2>
      <table  className='table table-striped table-dark'>
        <thead>
          <tr>
            <th>Accesorio</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {medicamentos.map((medicamento, index) => (
            <tr key={index}>
              <td>{medicamento.nombre}</td>
              <td>{medicamento.precio}</td>
              <td>
                {edicionMedicamento === index ? (
                  <button className='"btnagregar btn-outline-secondary"' onClick={guardarEdicion}>Guardar</button>
                ) : (
                  <>
                   <button className='btn btn-outline-danger' onClick={() => eliminarMedicamento(index)}>
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default AgregarBebida;
