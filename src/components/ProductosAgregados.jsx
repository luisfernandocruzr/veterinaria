import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const PharmacyComponent = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [nuevoMedicamento, setNuevoMedicamento] = useState({
    nombre: '',
    dosis: '',
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
    setNuevoMedicamento({ nombre: '', dosis: '', precio: '' });
  };

  const editarMedicamento = (index) => {
    setEdicionMedicamento(index);
    setNuevoMedicamento(medicamentos[index]);
  };

  const guardarEdicion = () => {
    setMedicamentos((prevMedicamentos) => {
      const nuevosMedicamentos = [...prevMedicamentos];
      nuevosMedicamentos[edicionMedicamento] = nuevoMedicamento;
      return nuevosMedicamentos;
    });
    setEdicionMedicamento(null);
    setNuevoMedicamento({ nombre: '', dosis: '', precio: '' });
  };

  const eliminarMedicamento = (index) => {
    setMedicamentos((prevMedicamentos) => {
      const nuevosMedicamentos = [...prevMedicamentos];
      nuevosMedicamentos.splice(index, 1);
      return nuevosMedicamentos;
    });
  };

  return (
    <div>
      <div className='capa2'></div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>

            <Link to={`/citas/`}></Link>
            <h3>Agregar Citas</h3>
      <form>
        <input
          type="text"
          name="medicamento"
          value={nuevoMedicamento.nombre}
          onChange={handleChange}
          placeholder="mascota"
        />
        <input
          type="text"
          name="contenido"
          value={nuevoMedicamento.dosis}
          onChange={handleChange}
          placeholder="dd/mm/aaaa"
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

      <h2>Citas Programadas</h2>
      <table className='table table-striped table-dark'>
        <thead>
          <tr>
            <th>Mascota</th>
            <th>Fecha</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {medicamentos.map((medicamento, index) => (
            <tr key={index}>
              <td>{medicamento.nombre}</td>
              <td>{medicamento.dosis}</td>
              <td>{medicamento.precio}</td>
              <td>
                {edicionMedicamento === index ? (
                  <button onClick={guardarEdicion}>Guardar</button>
                ) : (
                  <>
                    <button className='btn btn-outline-primary' onClick={() => editarMedicamento(index)}>
                      Editar
                    </button>
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

export default PharmacyComponent;
