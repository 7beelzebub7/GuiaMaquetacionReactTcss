import React from "react";
import { Link } from "react-router-dom";
import Slider from "./componentes/Slider";

export default function Avances(){
    return(
        <>
        <div>
            <div className="flex">
                <div className="bg-gray-700 w-auto hidden md:block">
                    <div className="p-4 pt-6">
                        <div className="bg-gray-500 h-1 w-50"></div>
                    </div>
                    <div className="p-4 pt-6">
                        <div className="bg-gray-500 h-1 w-50"></div>
                    </div>
                    <div className="p-4 pt-6">
                        <div className="bg-gray-500 h-1 w-50"></div>
                    </div>
                    <div className="p-4 pt-6">
                        <div className="bg-gray-500 h-1 w-50"></div>
                    </div>
                    <div className="bg-orange-600 p-4 pt-6">
                        <div className="bg-gray-900 h-1 w-50"></div>
                    </div>
                    <div className="p-4 pt-6">
                        <div className="bg-gray-500 h-1 w-50"></div>
                    </div>
                    <div className="p-4 pt-6">
                        <div className="bg-gray-500 h-1 w-50"></div>
                    </div>
                    <div className="p-4 pt-6">
                        <div className="bg-gray-500 h-1 w-50"></div>
                    </div>
                    <div className="p-4 pt-6">
                        <div className="bg-gray-500 h-1 w-50"></div>
                    </div>
                    <div className="p-4 pt-6">
                        <div className="bg-gray-500 h-1 w-50"></div>
                    </div>
                    <div className="p-4 pt-6">
                        <div className="bg-gray-500 h-1 w-50"></div>
                    </div>
                    <div className="p-4 pt-6">
                        <div className="bg-gray-500 h-1 w-50"></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-center">
                        <div className="w-100">
                            <Slider />
                        </div>
                    </div>
                    

                    <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center p-2">
                            <div className="p-3">
                                <img className="w-30 rounded-2xl" src="images/iconoTesla.webp" alt="" />
                            </div>
                            <div className="justify-items-center p-2">
                                <Link to="/teslaA"><h1 className="text-gray-100 hover:text-orange-500 font-bold text-xl">Nikola Tesla</h1></Link>
                                <p className="text-gray-100">Aquí encontrarás los avances de Nikola Tesla</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center p-2">
                            <div className="p-3">
                                <img className="w-30 rounded-2xl" src="images/iconoEinstein.webp" alt="" />
                            </div>
                            <div className="justify-items-center p-2">
                                <Link to="/einsteinA"><h1 className="text-gray-100 hover:text-orange-500 font-bold text-xl">Albert Einstein</h1></Link>
                                <p className="text-gray-100">Aquí encontrarás los avances de Albert Einstein</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center p-2">
                            <div className="p-3">
                                <img className="w-30 rounded-2xl" src="images/iconoHawking.png" alt="" />
                            </div>
                            <div className="justify-items-center p-2">
                                <Link to="/hawkingA"><h1 className="text-gray-100 hover:text-orange-500 font-bold text-xl">Stephen Hawking</h1></Link>
                                <p className="text-gray-100">Aquí encontrarás los avances de Stephen Hawking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-gray-100 flex flex-col md:flex-row md:flex-wrap">
                <div className="md:basis-1/2 lg:basis-1/4 p-4">
                    <p>El desarrollo de la corriente alterna (CA) fue un avance crucial para la distribución eficiente de la electricidad. A finales del siglo XIX, Nikola Tesla perfeccionó esta tecnología, que permitió transportar energía eléctrica a largas distancias sin grandes pérdidas. Gracias a la corriente alterna, fue posible iluminar ciudades enteras y sentar las bases del sistema eléctrico moderno que utilizamos hoy en día</p>
                </div>
                <div className="md:basis-1/2 lg:basis-1/4 p-4">
                    <p>El descubrimiento de la gravedad cambió radicalmente nuestra comprensión del universo. Isaac Newton formuló la ley de la gravitación universal en el siglo XVII, explicando cómo los objetos se atraen entre sí. Más tarde, Albert Einstein amplió este conocimiento con su teoría de la relatividad general, demostrando que la gravedad es la curvatura del espacio-tiempo causada por la masa.</p>
                </div>
                <div className="md:basis-1/2 lg:basis-1/4 p-4">
                    <p>En 1953, James Watson y Francis Crick revelaron la estructura del ADN, una doble hélice que contiene la información genética de todos los seres vivos. Este descubrimiento revolucionó la biología y la medicina, permitiendo avances como la ingeniería genética, la identificación forense y la comprensión de enfermedades hereditarias.</p>
                </div>
                <div className="md:basis-1/2 lg:basis-1/4 p-4">
                    <p>El hallazgo de la penicilina por Alexander Fleming en 1928 marcó el inicio de la era de los antibióticos. Esta sustancia permitió combatir infecciones bacterianas que antes eran mortales, salvando millones de vidas. Desde entonces, la medicina ha avanzado enormemente en el tratamiento de enfermedades gracias a este descubrimiento fundamental.</p>
                </div>
            </div>

        </div>
        </>
    );
}