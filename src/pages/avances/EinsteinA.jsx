import React from "react";

export default function EinsteinA(){
  return(
    <>
    <h1>Einstein Avances</h1>
    <div className="flex">
      <div className="bg-gray-800 text-gray-100">
        <div className="p-5">
          <img className="rounded-2xl w-100" src="images/einsteinA.webp" alt="" />
          <h1 className="font-bold text-2xl">Teoría de la Relatividad Especial y E=mc²</h1>
          <p>Albert Einstein transformó la física con su teoría de la relatividad especial, publicada en 1905, que introdujo la famosa ecuación E=mc², demostrando que la masa y la energía son equivalentes. Esto cambió por completo la comprensión del espacio y el tiempo, y fue la base para desarrollos posteriores en física teórica y nuclear.</p>
        </div>
        <div className="p-5">
          <img className="rounded-2xl w-100" src="images/einsteinA2.webp" alt="" />
          <h1 className="font-bold text-2xl">Relatividad General y Curvatura del Espacio-Tiempo</h1>
          <p>En 1915, presentó su teoría de la relatividad general, que describe cómo la gravedad no es una fuerza como pensaba Newton, sino una curvatura del espacio-tiempo provocada por la masa. Esta teoría ha sido comprobada en múltiples experimentos y observaciones, y es fundamental para tecnologías como el GPS. Einstein también contribuyó al efecto fotoeléctrico, lo que le valió el Premio Nobel de Física en 1921..</p>
        </div>
      </div>

      <div className="bg-gray-700 text-gray-100 hidden md:block">
        <div className="p-4">
          <h1 className="font-bold text-xl">Texto</h1>
          <p>Este parrafo contiene texto de relleno, ya que no supe qué más agregar</p>
        </div>
        <div className="p-4">
          <h1 className="font-bold text-xl">Texto</h1>
          <p>Este parrafo contiene texto de relleno, ya que no supe qué más agregar</p>
        </div>
        <div className="p-4">
          <h1 className="font-bold text-xl">Texto</h1>
          <p>Este parrafo contiene texto de relleno, ya que no supe qué más agregar</p>
        </div>
        <div className="p-4">
          <h1 className="font-bold text-xl">Texto</h1>
          <p>Este parrafo contiene texto de relleno, ya que no supe qué más agregar</p>
        </div>
      </div>
    </div>
    </>
  );
}