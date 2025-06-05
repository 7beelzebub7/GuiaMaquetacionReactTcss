import React from "react";

export default function HawkingD(){
    return(
        <>
        <div>
            <div className="p-4">
                <img className="w-full" src="images/hawkingD.jpg" alt="" />
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="p-4 md:basis-3/4">
                    <div className="flex flex-row">
                        <div className="md:basis-1/3">
                            <img className="w-70" src="images/iconoHawking.png" alt="" />
                        </div>
                        <div className="text-gray-100 md:basis-1/2">
                            <h1 className="text-2xl font-bold">Datos curiosos sobre Stephen Hawking</h1>
                            <p>A pesar de ser diagnosticado con esclerosis lateral amiotrófica (ELA) a los 21 años y recibir una esperanza de vida de solo dos años, Stephen Hawking vivió más de cinco décadas con la enfermedad. A lo largo de su vida, desarrolló un estilo de comunicación único a través de un sintetizador de voz, el cual eligió conservar con acento estadounidense, aunque era británico. Era un gran entusiasta del humor negro y de la cultura pop: participó en series como The Simpsons, Star Trek y The Big Bang Theory. Además, fue partidario de la exploración espacial y llegó a advertir públicamente sobre los riesgos de la inteligencia artificial y el contacto con civilizaciones extraterrestres.</p>
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