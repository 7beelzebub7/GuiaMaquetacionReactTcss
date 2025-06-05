import React from "react";
import { Link } from "react-router-dom";

export default function HawkingC(){
  return(
    <>
    <div>
        <div className="flex flex-col md:flex-row">
            <div className="w-30 m-6 pt-2 pl-7">
                <img className="w-30 rounded-2xl items-center" src="images/iconoHawking.png" alt="" />
            </div>
            <div className="text-gray-100 pt-8">
                <h1 className="font-extrabold text-2xl">Stephen Hawking</h1>
                <p>Stephen Hawking fue un destacado científico británico que dejó una huella profunda en el estudio del universo.</p>
            </div>
        </div>

        <div className="m-7">
            <img src="images/hawkingSlider.avif" alt="" />
        </div>

        <div className="flex flex-col md:flex-row">
            <div className="text-gray-100 md:basis-2/3 p-6">
            <p>
                Reconocido por sus investigaciones sobre los agujeros negros y la cosmología, Stephen Hawking combinó una mente brillante con una capacidad única para divulgar ciencia. A pesar de haber sido diagnosticado con ELA a los 21 años, continuó trabajando durante décadas, desarrollando teorías como la radiación de Hawking, que transformaron nuestra comprensión del espacio-tiempo. También fue autor de libros populares como Una breve historia del tiempo, acercando la física teórica al público general. Su vida y obra son testimonio de perseverancia y genialidad.
            </p>
            </div>

            <div className="text-gray-100 md:basis-1/3 p-6">
                <p className="font-extralight">
                    En Estos enlaces encontrás datos curiosos sobre Stephen Hawking.
                </p>
                <Link to="/hawkingD">
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