import React from "react";

export default function TeslaD(){
    return(
        <>
        <div>
            <div className="p-4">
                <img className="w-full" src="images/teslaD.jpg" alt="" />
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="p-4 md:basis-3/4">
                    <div className="flex flex-row">
                        <div className="md:basis-1/3">
                            <img className="w-70" src="images/iconoTesla.webp" alt="" />
                        </div>
                        <div className="text-gray-100 md:basis-1/2">
                            <h1 className="text-2xl font-bold">Datos curiosos sobre Nikola Tesla</h1>
                            <p>Nikola Tesla tenía una personalidad tan fascinante como sus inventos. Era obsesivo con la limpieza y evitaba tocar cualquier cosa que no estuviera perfectamente desinfectada, además de tener una fobia a los gérmenes. También tenía una memoria fotográfica extraordinaria y aseguraba que podía visualizar inventos completos en su mente antes de construirlos. Curiosamente, dormía solo dos horas al día y trabajaba incansablemente el resto del tiempo. Tesla también afirmaba haber recibido señales del espacio exterior, lo que lo llevó a creer en la posibilidad de vida en otros planetas, mucho antes de que fuera un tema común.</p>
                        </div>  
                    </div>
                
            </div>

            <div className="md:basis-1/4">
                <div className="p-4">
                    <div className="text-gray-100 flex">
                        <div className="bg-gray-600 w-20 h-20 rounded-2xl m-3"></div>
                        <div className="p-3">
                            <h1 className="font-bold text-xl">Texto</h1>
                            <p>Este es un parrafo pequeño el cual tiene un texto solo para rellenar</p>
                        </div>
                        
                    </div>
                    <div className="text-gray-100 flex">
                        <div className="bg-gray-600 w-20 h-20 rounded-2xl m-3"></div>
                        <div className="p-3">
                            <h1 className="font-bold text-xl">Texto</h1>
                            <p>Este es un parrafo pequeño el cual tiene un texto solo para rellenar</p>
                        </div>
                        
                    </div>
                    <div className="text-gray-100 flex">
                        <div className="bg-gray-600 w-20 h-20 rounded-2xl m-3"></div>
                        <div className="p-3">
                            <h1 className="font-bold text-xl">Texto</h1>
                            <p>Este es un parrafo pequeño el cual tiene un texto solo para rellenar</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>

            

        </div>
        </>
    );
}