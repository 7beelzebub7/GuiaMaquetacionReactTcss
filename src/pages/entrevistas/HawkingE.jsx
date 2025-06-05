import React from "react";
import ReactPlayer from "react-player";

export default function HawkingE(){
  return(
    <>
    <h1></h1>
        <div>
    
          <div className="text-gray-100 m-5">
            <h1 className="text-2xl font-bold">Entrevista Stephen Hawking</h1>
            <p>Neil deGrasse Tyson entrevista a Stephen Hawking y le consulta qué preguntas le haría a Isaac Newton si pudiera conversar con él.</p>
          </div>
    
          <div className="flex flex-col items-center h-170 m-4">
            <ReactPlayer url="https://www.youtube.com/watch?v=8xHkQXJoyv4"
                      className="react-player"
                      playing={false}
                      controls={true}
                      width="100%"
                      height="100%"/>
          </div>
    
          <div className="text-gray-100 flex flex-col md:flex-row">
            <div className="p-9 md:basis-2/4">
              <h1 className="font-extrabold text-xl">Descripción</h1>
              <p>En esta entrevista, el reconocido físico Stephen Hawking comparte sus pensamientos sobre diversos temas científicos y filosóficos. A través de una conversación profunda, Hawking aborda cuestiones relacionadas con el universo, la física teórica y su visión personal sobre el cosmos. La entrevista ofrece una visión única de la mente de uno de los científicos más influyentes del siglo XX.</p>
            </div>
            <div className="p-9 md:basis-2/4">
              <h1></h1>
              <p>
                Además de sus contribuciones científicas, Hawking reflexiona sobre su vida personal y las experiencias que lo llevaron a convertirse en una figura icónica en el mundo de la ciencia. Esta entrevista es una oportunidad invaluable para conocer más sobre su perspectiva y legado.
              </p>
            </div>
          </div>
    
        </div>
    </>
  );
}