import React from "react";

export default function EinsteinD(){
    return(
        <>
        <div>
            <div className="p-4">
                <img className="w-full" src="images/einsteinD.webp" alt="" />
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="p-4 md:basis-3/4">
                    <div className="flex flex-row">
                        <div className="md:basis-1/3">
                            <img className="w-70" src="images/iconoEinstein.webp" alt="" />
                        </div>
                        <div className="text-gray-100 md:basis-1/2">
                            <h1 className="text-2xl font-bold">Datos curiosos sobre Albert Einstein</h1>
                            <p>Albert Einstein no solo fue un genio de la física, sino también una figura llena de curiosidades. Por ejemplo, no habló hasta los cuatro años y sus padres temieron que tuviera dificultades de aprendizaje. A pesar de su enorme inteligencia, era pésimo recordando fechas y detalles cotidianos. Además, rechazó la presidencia de Israel en 1952, afirmando que no tenía la habilidad necesaria para tratar con personas. Otra curiosidad es que su cerebro fue preservado tras su muerte sin el consentimiento de su familia, y posteriormente fue estudiado por científicos con la esperanza de entender su genialidad.</p>
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