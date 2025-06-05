import React from "react";
import { Link } from "react-router-dom";

function Cientificos(){
    return(
        <>
        <div className="">
            {/* esta es la sección que va a ir fija arriba y ocupa todo el ancho*/}
            <div className="flex bg-gray-500 justify-center">
                <div  className=" w-[120px] h-[120px] mt-6">
                    <img className="rounded-2xl shadow-2xl" src="images/cIconGrande.jpg" alt="" />
                </div>
                <div className="ml-12 mt-9 text-gray-100">
                    <div>
                        <h1 className="font-extrabold text-2xl">
                            Científicos</h1>
                    </div>
                    <p>
                        En este lugar encontrarás cositas maravillosass
                    </p>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
                {/* Sección izquierda - 2/3 */}
                <div className="bg-gray-900 md:basis-2/3">
                    <div>
                    <div className="flex flex-col items-center">
                        <img
                        className="m-2 rounded-2xl shadow-2xl"
                        src="images/Cslider.jpg"
                        alt=""
                        />
                        <p className="text-gray-100 m-7">
                        Los científicos son impresionantes, ¿no lo crees? Sin ellos lo que
                        conocemos hoy en día no sería posible: los avances tecnológicos, la
                        electricidad, incluso el dispositivo en el que estás viendo esto no
                        existiría.
                        </p>

                        <Link to="/avances">
                            <h1 className="font-bold text-gray-100 hover:text-orange-500">Click aquí para ver los avances tecnológicos de estos cientificos</h1>
                        </Link>
                    </div>
                    </div>
                    <div className="flex flex-row justify-evenly items-center my-10">
                    <div className="bg-gray-500 w-[80px] h-[80px]"></div>
                    <div className="bg-gray-500 w-[80px] h-[80px]"></div>
                    <div className="bg-gray-500 w-[80px] h-[80px]"></div>
                    <div className="bg-gray-500 w-[80px] h-[80px]"></div>
                    </div>
                </div>

                {/* Sección derecha - 1/3 */}
                <div className="md:basis-1/3 bg-gray-800 p-4">
                    <div>
                    {/* Científico 1 */}
                    <div className="text-gray-100 flex mb-6">
                        <img className="w-28 h-28 rounded-2xl m-2" src="images/iconoEinstein.webp" alt="" />
                        <div className="mt-7 ml-5">
                            <Link to="/einsteinC"><h1 className="font-bold text-xl">Albert Einstein</h1></Link>
                        <p>Físico que revolucionó la ciencia con la teoría de la relatividad</p>
                        </div>
                    </div>
                    {/* Científico 2 */}
                    <div className="text-gray-100 flex mb-6">
                        <img className="w-28 h-28 rounded-2xl m-2" src="images/iconoTesla.webp" alt="" />
                        <div className="mt-7 ml-5">
                        <Link to="/teslaC" ><h1 className="font-bold text-xl">Nikola Tesla</h1></Link>
                        
                        <p>Inventor que revolucionó la electricidad con la corriente alterna</p>
                        </div>
                    </div>
                    {/* Científico 3 */}
                    <div className="text-gray-100 flex">
                        <img className="w-28 h-28 rounded-2xl m-2" src="images/iconoHawking.png" alt="" />
                        <div className="mt-7 ml-5">
                        <Link to="/hawkingC"><h1 className="font-bold text-xl">Stephen Hawking</h1></Link>
                        
                        <p>Físico que estudió los agujeros negros y el origen del universo</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Cientificos;