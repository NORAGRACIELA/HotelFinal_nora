import { Routes, Route, Link } from "react-router-dom";

import { Home } from "../Home/Home.js";
import { Menu } from "../Menu/Menu.js";

export function Rutas(){

    return (
        <div>
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      );

}