import React from "react";

export default function TeslaA(){
  return(
    <>
    <div className="flex">
      <div className="bg-gray-800 text-gray-100">
        <div className="p-5">
          <img className="rounded-2xl w-100" src="images/teslaA.jpg" alt="" />
          <h1 className="font-bold text-2xl">Corriente Alterna y Redes Eléctricas</h1>
          <p>Nikola Tesla revolucionó la forma en que usamos la electricidad gracias al desarrollo de la corriente alterna (CA), un sistema que permitió transportar energía a largas distancias de manera eficiente. Este avance fue crucial para el establecimiento de redes eléctricas modernas y superó en funcionalidad al sistema de corriente directa propuesto por Edison. La CA permitió alimentar ciudades completas y sentó las bases del suministro eléctrico mundial actual.</p>
        </div>
        <div className="p-5">
          <img className="rounded-2xl w-100" src="images/teslaA2.jpg" alt="" />
          <h1 className="font-bold text-2xl">Innovaciones en Radiofrecuencia y Energía Inalámbrica</h1>
          <p>Además de la corriente alterna, Tesla trabajó en tecnologías como la radiofrecuencia, el control remoto y la transmisión inalámbrica de energía. Fue uno de los primeros en experimentar con la transferencia de electricidad sin cables, un concepto que aún hoy inspira desarrollos tecnológicos. Su visión futurista lo llevó a patentar más de 300 inventos, muchos de ellos adelantados a su tiempo.</p>
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