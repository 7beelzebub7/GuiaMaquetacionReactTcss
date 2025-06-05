import React from "react";

export default function HawkingA(){
  return(
    <>
    <div className="flex">
      <div className="bg-gray-800 text-gray-100">
        <div className="p-5">
          <img className="rounded-2xl w-100" src="images/hawkingA.jpg" alt="" />
          <h1 className="font-bold text-2xl">Radiación de Hawking y Agujeros Negros</h1>
          <p>Stephen Hawking es conocido por sus investigaciones sobre los agujeros negros. Propuso que, contrario a lo que se pensaba, estos cuerpos no son completamente oscuros: emiten una radiación conocida como radiación de Hawking, debido a efectos cuánticos cerca del horizonte de eventos. Este descubrimiento unió conceptos de la relatividad y la mecánica cuántica, dos pilares de la física moderna.</p>
        </div>
        <div className="p-5">
          <img className="rounded-2xl w-100" src="images/hawkingA2.jpg" alt="" />
          <h1 className="font-bold text-2xl">Origen del Universo y Divulgación Científica</h1>
          <p>También desarrolló teorías sobre el origen del universo, defendiendo que este no necesita de un creador para existir, sino que puede surgir espontáneamente debido a las leyes de la física. Su trabajo ayudó a formular una visión más completa del Big Bang y del comportamiento del cosmos en sus etapas más tempranas. Además, divulgó estos temas complejos en libros como Una breve historia del tiempo, acercando la ciencia al público general.</p>
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