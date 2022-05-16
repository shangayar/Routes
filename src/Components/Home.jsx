import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function Home() {
  return (
    <>
      <h2> Prueba Router</h2>
      <Router>
         <Route path="/">
            <h3>Home</h3>
          </Route>
          <Route path="/acerca">
            <h3>Acerca</h3>
          </Route>
          <Route path="/contacto">
            <h3>Contacto</h3>
          </Route>
      </Router>
    </>
  );
}

export default Home