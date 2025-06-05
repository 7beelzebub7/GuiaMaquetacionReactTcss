import React from "react";
import Slider from "./componentes/Slider";

export default function Inicio(){
  return(
    <>
    <div className="bg-gray-900">
        <main className="mt-11"><Slider /></main>

          {/* Contenedor responsive principal */}
          <div className="flex flex-col md:flex-row justify-between px-5 mt-7 gap-6">
            {/* Bloque izquierdo */}
            <div className="md:basis-1/2">
              <div className="bg-gray-700 flex flex-col w-full md:w-[500px] p-4 rounded-2xl">
                <div className="bg-orange-500 w-full h-[5px] mb-4"></div>
                <div className="text-gray-50 mb-2">
                  <p>
                    Bienvenidos a mi página web, aquí encontrarás información sobre algunos de los científicos más famosos, algunos de sus avances y descubrimientos.
                  </p>
                </div>
                <div className="flex mb-2">
                  <div className="bg-gray-400 w-[100px] h-[10px] ml-2"></div>
                  <div className="bg-gray-500 w-[100px] h-[10px] ml-2"></div>
                  <div className="bg-gray-600 w-[100px] h-[10px] ml-2"></div>
                </div>
                <div className="text-gray-50">
                  <p>
                    También encontrarás documentales de cada uno de ellos y sus descubrimientos, así como entrevistas... o por lo menos a los que esperaron que hubiera cómo grabarlas.
                  </p>
                </div>
              </div>
            </div>

            {/* Bloque derecho */}
            <div className="md:basis-1/2">
              <div className="bg-gray-700 rounded-2xl p-4">
                <div className="flex flex-col w-full md:w-[500px] text-gray-50">
                  <p className="mb-2">
                    Espero que esta sea para ti una experiencia agradable y enriquecedora ya que no hay nada mejor que conocer un poco de cómo fué que llegamos hasta donde estamos.
                  </p>
                  <div className="flex gap-3 mt-3">
                    <div className="bg-gray-400 w-[70px] h-[70px]"></div>
                    <div className="bg-gray-400 w-[70px] h-[70px]"></div>
                    <div className="bg-gray-400 w-[70px] h-[70px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
    </>
  );
}