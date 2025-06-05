import React from "react";
import ReactPlayer from "react-player";

export default function TeslaE(){
  return(
    <>

    <div>

      <div className="text-gray-100 m-5">
        <h1 className="text-2xl font-bold">Documental Nikola Testla</h1>
        <p>Este es un documental sobre nikola tesla, no se pudo agregar una entrevista ya que para entonces solo se podían hacer entrevistas por escrito.</p>
      </div>

      <div className="flex flex-col items-center h-170 m-4">
        <ReactPlayer url="https://www.youtube.com/watch?app=desktop&v=z1DojYMycZY&utm_source=chatgpt.com"
                  className="react-player"
                  playing={false}
                  controls={true}
                  width="100%"
                  height="100%"/>
      </div>

      <div className="text-gray-100 flex flex-col md:flex-row">
        <div className="p-9 md:basis-2/4">
          <h1 className="font-extrabold text-xl">Descripción</h1>
          <p>Este documental profundiza en la vida y legado de Nikola Tesla, explorando sus innovaciones en la corriente alterna, la transmisión inalámbrica de energía y otros inventos que transformaron el mundo moderno. Además, aborda los desafíos que enfrentó, como la falta de reconocimiento y las dificultades económicas.</p>
        </div>
        <div className="p-9 md:basis-2/4">
          <h1></h1>
          <p>
            ofrece una visión profunda de la vida y legado de Nikola Tesla, destacando sus innovaciones en la corriente alterna, la transmisión inalámbrica de energía y otros inventos que transformaron el mundo moderno. A través de entrevistas con expertos, análisis detallados de sus inventos y recreaciones de momentos clave, el documental explora cómo Tesla superó numerosos desafíos, incluyendo la falta de reconocimiento y las dificultades económicas, para convertirse en una figura icónica de la innovación y la creatividad científica. Además, se abordan aspectos menos conocidos de su vida personal y profesional, proporcionando una comprensión más completa de este visionario inventor.
          </p>
        </div>
      </div>

    </div>
    </>
  );
}