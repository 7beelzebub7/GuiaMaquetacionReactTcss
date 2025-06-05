import React from "react";
import { Link } from "react-router-dom";

export default function EinsteinC(){
  return(
    <>
    <div>
        <div className="flex flex-col md:flex-row">
            <div className="w-30 m-6 pt-2 pl-7">
                <img className="w-30 rounded-2xl items-center" src="images/iconoEinstein.webp" alt="" />
            </div>
            <div className="text-gray-100 pt-8">
                <h1 className="font-extrabold text-2xl">Alber Einstein</h1>
                <p>Albert Einstein es uno de los científicos más influyentes del siglo XX, conocido por sus aportes revolucionarios a la física.</p>
            </div>
        </div>

        <div className="m-7">
            <img src="images/einsteinSlider.jpg" alt="" />
        </div>

        <div className="flex flex-col md:flex-row">
            <div className="text-gray-100 md:basis-2/3 p-6">
            <p>
                Albert Einstein fue un físico teórico alemán reconocido por desarrollar la teoría de la relatividad, una de las bases fundamentales de la física moderna. Nacido en 1879, revolucionó la forma en que entendemos el tiempo, el espacio y la gravedad, especialmente con su famosa ecuación E=mc². Además de sus contribuciones científicas, fue un pensador comprometido con causas sociales y políticas, defendiendo la paz y los derechos humanos. Su genialidad y su imagen se han convertido en símbolos universales del intelecto humano.
            </p>
            </div>

            <div className="text-gray-100 md:basis-1/3 p-6">
                <p className="font-extralight">
                    En Estos enlaces encontrás datos curiosos sobre Alber Einstein.
                </p>
                <Link to="/einsteinD">
                    <div className="flex justify-center">
                        <div className="bg-gray-600 w-20 h-20 m-2 rounded-2xl shadow-2xl"></div>
                        <div className="bg-gray-600 w-20 h-20 m-2 rounded-2xl shadow-2xl"></div>
                        <div className="bg-gray-600 w-20 h-20 m-2 rounded-2xl shadow-2xl"></div>
                    </div>
                </Link>
            </div>
        </div>
        
    </div>
    </>
  );
}