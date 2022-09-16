import React from 'react';
import ReactDOM from 'react-dom/client';


import {Rutas} from './Routers/Rutas.js'
import { Habitaciones } from './Habitaciones/Habitaciones.js';

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Habitaciones></Habitaciones>
  
);


