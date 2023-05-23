import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import AgregarBebida from './components/AgregarBebida';
import ProductosAgregados from './components/ProductosAgregados';
import PharmacyComponent from './components/PharmacyComponent';

function App() {
 
  return (
    <Router>
      <div className='inicio'>
        <h1>Veterinaria "Mejor Amigo"</h1>
        <Navigation />
        <Switch>
          <Route path="/agregar">
            <AgregarBebida />
          </Route>
          <Route path="/editar">
            < PharmacyComponent  />
          </Route>
          <Route path="/productos">
            <ProductosAgregados />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
