import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Inicio from "./pages/Inicio";
import Cientificos from "./pages/Cientificos";
import Entrevistas from "./pages/Entrevistas";
import Conclusiones from "./pages/Conclusiones";
import EinsteinC from "./pages/cientificos/EinsteinC";
import TeslaC from "./pages/cientificos/TeslaC";
import HawkingC from "./pages/cientificos/HawkingC";
import TeslaE from "./pages/entrevistas/TeslaE"
import EinsteinE from "./pages/entrevistas/EinsteinE"
import HawkingE from "./pages/entrevistas/HawkingE";
import HawkingD from "./pages/datosCuriosos/HawkingD";
import EinsteinD from "./pages/datosCuriosos/EinsteinD";
import TeslaD from "./pages/datosCuriosos/TestlaD";
import Avances from "./pages/Avances";
import TeslaA from "./pages/avances/TeslaA";
import EinsteinA from "./pages/avances/EinsteinA"
import HawkingA from "./pages/avances/HawkingA"


export default function App(){
  return(
    <>
    <div className="bg-gray-900">
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/cientificos" element={<Cientificos/>}/>
          <Route path="/entrevistas" element={<Entrevistas/>}/>
          <Route path="/conclusiones" element={<Conclusiones/>}/>

          <Route path="/einsteinC" element={<EinsteinC/>}/>
          <Route path="/teslaC" element={<TeslaC/>}/>
          <Route path="/hawkingC" element={<HawkingC/>}/>

          <Route path="/teslaE" element={<TeslaE/>}/>
          <Route path="/einsteinE" element={<EinsteinE/>}/>
          <Route path="/hawkingE" element={<HawkingE/>}/>

          <Route path="/hawkingD" element={<HawkingD/>}/>
          <Route path="/einsteinD" element={<EinsteinD/>}/>
          <Route path="/teslaD" element={<TeslaD/>}/>

          <Route path="/avances" element={<Avances/>}/>

          <Route path="/teslaA" element={<TeslaA/>}/>
          <Route path="/einsteinA" element={<EinsteinA/>}/>
          <Route path="/hawkingA" element={<HawkingA/>}/>
        </Route>
      </Routes>
    </div>
    </>
  );
}