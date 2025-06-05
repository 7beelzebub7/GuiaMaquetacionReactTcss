import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export default function Entrevistas(){
  return(
    <>
    <div>
      <div className="text-gray-100 flex md:flex-row p-5 pl-20">
        <div className="player-wraper justify-cente w-full h-95">
          <ReactPlayer url="https://www.youtube.com/watch?v=hAhBg9M97ho"
          className="react-player"
          playing={false}
          controls={true}
          width="100%"
          height="100%"/>
        </div>
        <div className="m-5 ">
          <h1 className="font-bold text-2xl">Las maravillas de la ciencia</h1>
        <p>Aquí encontrarás entrevistas o documentales donde podrás ver un poco cómo fué que avanzaron estos cientificos para el bien de todos nosotros</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex md:basis-2/3">
        <div className="m-5">
          <Link to="/teslaE">
            <img className="w-40 h-35 ml-6 rounded-2xl flex justify-center" src="images/iconoTesla.webp" alt="" />
          </Link>
          <h1 className="text-gray-100 font-bold text-xl flex justify-center mt-4">Nikola Tesla</h1>
          <p className="text-gray-100"> Documental sobre Nikola Tesla</p>
        </div>
        <div className="m-5 rounded-">
          <Link to="/einsteinE">
            <img className="w-40 h-40 ml-2 rounded-2xl" src="images/iconoEinstein.webp" alt="" />
          </Link>
          <h1 className="text-gray-100 font-bold text-xl flex justify-center">Albert Einstein</h1>
          <p className="text-gray-100">Entrevista Albert Einstein</p>
        </div>
        <div className="m-5 rounded-">
          <Link to="/hawkingE">
            <img className="w-40 h-40 ml-5 rounded-2xl" src="images/iconoHawking.png" alt="" />
          </Link>
          <h1 className="text-gray-100 font-bold text-xl flex justify-center">Stephen Hawking</h1>
          <p className="text-gray-100">Entrevista Stephen Hawking</p>
        </div>
      </div>

      <div className="text-gray-100 md:basis-1/3">
        <div>
          <h1 className="font-bold">Texto 1</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius accusamus illum saepe repellat debitis error aliquam dolores hic, tenetur ad aspernatur neque qui repudiandae officiis voluptatem, quisquam minima, consectetur facere.</p>
        </div>
        <div>
          <h1 className="font-bold">Texto 2</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt reprehenderit pariatur quos repudiandae inventore cumque vel deserunt ipsa deleniti qui dolore excepturi nostrum quisquam tempore eos sint, officiis porro.</p>
        </div>
        <div>
          <h1 className="font-bold">Texto 3</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis molestias nobis distinctio, nihil modi omnis sunt labore, unde, dicta consectetur! A, minima velit repellendus accusamus quidem dignissimos animi vel.</p>
        </div>
      </div>
      </div>
      
    </div>
    </>
  );
}