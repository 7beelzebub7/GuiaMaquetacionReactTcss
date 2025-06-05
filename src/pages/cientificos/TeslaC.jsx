import React from "react";
import { Link } from "react-router-dom";

export default function TeslaC(){
  return(
    <>
    <div>
        <div className="flex flex-col md:flex-row">
            <div className="w-30 m-6 pt-2 pl-7">
                <img className="w-30 rounded-2xl items-center" src="images/iconoTesla.webp" alt="" />
            </div>
            <div className="text-gray-100 pt-8">
                <h1 className="font-extrabold text-2xl">Nikola Tesla</h1>
                <p>Nikola Tesla fue un inventor e ingeniero visionario cuya influencia en la tecnología moderna sigue siendo fundamental.</p>
            </div>
        </div>

        <div className="m-7">
            <img src="images/teslaSlider.jpg" alt="" />
        </div>

        <div className="flex flex-col md:flex-row">
            <div className="text-gray-100 md:basis-2/3 p-6">
            <p>
                Conocido por sus contribuciones al desarrollo de la corriente alterna, Nikola Tesla fue un pionero en el campo de la electricidad y la ingeniería. Nacido en el siglo XIX, ideó inventos y conceptos adelantados a su tiempo, muchos de los cuales sentaron las bases para la tecnología inalámbrica y la transmisión de energía. Aunque no siempre recibió el reconocimiento merecido en vida, su legado ha crecido con el tiempo, convirtiéndolo en una figura icónica de la innovación y la creatividad científica.
            </p>
            </div>

            <div className="text-gray-100 md:basis-1/3 p-6">
                <p className="font-extralight">
                    En Estos enlaces encontrás datos curiosos sobre Nikola Tesla.
                </p>
                <Link to="/teslaD">
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