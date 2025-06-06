import React from "react";
import ReactPlayer from "react-player";

export default function EinsteinE(){
  return(
    <>
        <div>
    
          <div className="text-gray-100 m-5">
            <h1 className="text-2xl font-bold">Entrevista Albert Einstein</h1>
            <p>Esta es una entrevista a Albert Einstein En la cual habla sobre su famosa ecuación E=mc².</p>
          </div>
    
          <div className="flex flex-col items-center h-170 m-4">
            <ReactPlayer url="https://www.youtube.com/watch?v=5KMxGqJKYB8"
                      className="react-player"
                      playing={false}
                      controls={true}
                      width="100%"
                      height="100%"/>
          </div>
    
          <div className="text-gray-100 flex flex-col md:flex-row">
            <div className="p-9 md:basis-2/4">
              <h1 className="font-extrabold text-xl">Descripción</h1>
              <p>En este valioso documento audiovisual, Albert Einstein explica de manera sencilla y directa el significado de su famosa ecuación E=mc², una de las fórmulas más conocidas de la física moderna. El video permite escuchar la voz real del científico, lo cual lo convierte en una experiencia única tanto para entusiastas de la ciencia como para historiadores. A través de sus propias palabras, Einstein expone la relación entre la energía y la masa, un concepto que transformó por completo nuestra comprensión del universo y sentó las bases para aplicaciones científicas de enorme impacto, como la energía nuclear.</p>
            </div>
            <div className="p-9 md:basis-2/4">
              <h1></h1>
              <p>
                Además de su contenido científico, el video también transmite la forma en que Einstein se expresaba y reflexionaba sobre sus descubrimientos, mostrando su humildad, claridad y compromiso con el conocimiento. Escuchar directamente a Einstein permite una conexión más personal con su figura, más allá de los libros o retratos históricos. Este tipo de material audiovisual no solo preserva su legado intelectual, sino que también humaniza al genio, revelando aspectos de su personalidad y pensamiento que rara vez se capturan en los textos escritos.
              </p>
            </div>
          </div>
    
        </div>
    </>
  );
}