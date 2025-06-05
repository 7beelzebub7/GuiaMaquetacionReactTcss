import React from "react";
import { Menu, X } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";



export default function Navbar(){
const [menuOpen, setMenuOpen] = useState(false);
const [query, setQuery] = useState('');
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);
  const navigate = useNavigate(); // 🧭 Aquí obtenemos la función para redirigir

  const sugerencias = [
    { texto: "Entrevista Einstein", pagina: "./entrevistas/EinsteinE" },
    { texto: "Documental sobre Isac Newton y la gravedad", pagina: "/cientificos" },
    { texto: "Documental sobre Nikola Tesla", pagina: "/cientificos" },
    { texto: "Entrevista Albert Einstein", pagina: "/entrevistas" },
    { texto: "Entrevista Stephen Hawking", pagina: "/entrevistas" },
    { texto: "Documental sobre Marie Curie", pagina: "/cientificos" },
  ];

  const filtradas = sugerencias.filter(item =>
    item.texto.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (ruta) => {
    setQuery('');
    setMostrarSugerencias(false);
    navigate(ruta); // ✅ Aquí redirigimos con React Router
    setMenuOpen(false);
  };
    return(
        <>
        <div >
            <nav className="bg-gray-800 text-orange-400 px-4 py-2 flex items-center justify-between relative">
                {/* Barra de búsqueda */}
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                    <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setMostrarSugerencias(true);
          }}
          className="w-full px-3 py-1 rounded-md text-black bg-orange-600 placeholder-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {mostrarSugerencias && query.length > 0 && (
          <div className="absolute bg-white text-black mt-1 w-full rounded-md shadow-md z-50">
            {filtradas.length > 0 ? (
              filtradas.map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => handleSelect(item.pagina)}
                >
                  {item.texto}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-500">Sin resultados</div>
            )}
          </div>
        )}
                </div>

        {/* Botón hamburguesa */}
                <div className="sm:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>

        {/* Menú principal */}
                <div className={`${
          menuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 absolute sm:static top-full left-0 w-full sm:w-auto bg-gray-800 sm:bg-transparent px-4 sm:px-0 z-40`}>
                    <Link to="/" className="hover:text-gray-300">Inicio</Link>
                    <Link to="/cientificos" className="hover:text-gray-300">Cientificos</Link>
                    <Link to="/entrevistas" className="hover:text-gray-300">Entrevistas</Link>
                    <Link to="/conclusiones" className="hover:text-gray-300">Conclusiones</Link>
                </div>
            </nav>         
            <hr />
            <Outlet />
        </div>
        </>
    );
}