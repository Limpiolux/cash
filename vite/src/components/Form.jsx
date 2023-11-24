import { Accordion, AccordionItem } from "@nextui-org/react";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { AiOutlineSend } from "react-icons/ai";
import { Input } from "@nextui-org/react";

function Form() {
    const [responses, setResponses] = useState({});
    const [comments, setComments] = useState({});
    const [formData, setFormData] = useState({
        ServicioPrestado: "",
        UnidadNegocio: "",
        Preventor: "",
        FechaHorario: "",
    });

    const handleSelectChange = (event, key) => {
        const { value } = event.target;
        setResponses({ ...responses, [key]: value });
    };

    const handleCommentChange = (event, key) => {
        const { value } = event.target;
        setComments({ ...comments, [key]: value });
    };

    const handleInputChange = (event, key) => {
        const { value } = event.target;
        setFormData({ ...formData, [key]: value });
    };

    const handleShowJSON = () => {
        // Regular expression for email validation
        const fechaHoraVisita = formData.FechaHorario;
    // Crear una instancia de Date a partir de la cadena de fecha y hora
    const date = new Date(fechaHoraVisita);

    // Formatear la fecha y hora como "dd-MM-yyyy-HH:mmhs"
    const formattedFechaHoraVisita = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}hs`;
        // Get the email value from formData
        const email = formData.email;
        for (const key in formData) {
            if (formData[key] === "") {
              alert("Por favor, completa todos los campos de formulario.");
              return; // Stop further execution
            }
          }
          for (const key in responses) {
            if (responses[key] === "Selecciona una opción") {
              alert("Por favor, selecciona una opción válida en los selects.");
              return; // Stop further execution
            }
          }
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        // Check if the email matches the regex pattern
        if (!emailRegex.test(email)) {
          // If the email is invalid, display an error message or perform the desired action.
          alert("Dirección de correo inválido");
          return; // Stop further execution
        }
      
        // Check if any select has the default "Selecciona una opción" value

      
        // Check if the form data inputs and text areas are not empty

      
        const jsonData = {
            formData: {
                ...formData,
                FechaHorario: formattedFechaHoraVisita,
            },
            responses,
            comments,
        };
        alert(JSON.stringify(jsonData, null, 2));
      };
      

    return (
        <>

            <section class="bg-white dark:bg-gray-900">
                <div class="py-8  px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-medium text-center text-gray-900 dark:text-white">Formulario de verificación de visitas a <span className="font-medium text-center text-white-900 dark:text-white" style={{ color: "#0075a9" }}>Servicios</span></h2>
                    <p class="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Tipo de Relevamiento: 6. Basico de Seguridad.</p>

                    

                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div>
                            <label for="servicio_prestado" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Servicio Prestado</label>
                            <input autocomplete="off" onChange={(e) => handleInputChange(e, "ServicioPrestado")} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Servicio Prestado" required />
                        </div>
                        <div>
                            <label for="unidad_negocio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unidad de Negocio</label>
                            <input autocomplete="off" onChange={(e) => handleInputChange(e, "UnidadNegocio")} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Unidad de Negocio" required />
                        </div>
                        <div>
                            <label for="preventor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preventor</label>
                            <input autocomplete="off" onChange={(e) => handleInputChange(e, "Preventor")} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Preventor" required />
                        </div>
                        <div>
                            <label for="fecha_horario_visita" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha y Horario de Visita</label>
                            <input onChange={(e) => handleInputChange(e, "FechaHorario")} type="datetime-local" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Unidad de Negocio" required />
                        </div>
                    </div>

                    <p class=" font-light text-black dark:text-gray-400 sm:text-xl" style={{ marginTop: "20px", marginLeft: "7px", marginBottom: "10px" }}>1. Personal</p>
                    <div class="accordion-group accordion-group-bordered">
                        <div class="accordion">
                            <input type="checkbox" id="accordion-1" class="accordion-toggle" />
                            <label for="accordion-1" class="accordion-title">1.1 Cumple con las instrucciones de limpieza y seguridad establecidas</label>
                            <span class="accordion-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                            </span>
                            <div class="accordion-content">
                                <div class="min-h-0">
                                    <select id="options" style={{ width: 'calc(100% - 5px)', marginLeft: "3px", marginBottom: "5px" }} onChange={(e) => handleSelectChange(e, 'CumpleInstruccionesLimpiezaSeguridad')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Selecciona una opción</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                        <option value="Noverificar">No se pudo verificar</option>
                                        <option value="Noaplica">No aplica</option>
                                    </select>
                                    {responses['CumpleInstruccionesLimpiezaSeguridad'] === 'No' && (
                                        <>

                                            <textarea onChange={(e) => handleCommentChange(e, 'CumpleInstruccionesLimpiezaSeguridad')} style={{ width: 'calc(100% - 5px)', marginLeft: "3px" }} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe un comentario..."></textarea>

                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div class="accordion">
                            <input type="checkbox" id="accordion-2" class="accordion-toggle" />
                            <label for="accordion-2" class="accordion-title">1.2 Posee conocimientos sobre el Analisis de Tarea Segura</label>
                            <span class="accordion-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                            </span>
                            <div class="accordion-content">
                                <div class="min-h-0">
                                    <select id="options" style={{ width: 'calc(100% - 5px)', marginLeft: "3px", marginBottom: "5px" }} onChange={(e) => handleSelectChange(e, 'ConocimientoAnalisisTareaSegura')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Selecciona una opción</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                        <option value="Noverificar">No se pudo verificar</option>
                                        <option value="Noaplica">No aplica</option>
                                    </select>
                                    {responses['ConocimientoAnalisisTareaSegura'] === 'No' && (
                                        <>

                                            <textarea onChange={(e) => handleCommentChange(e, 'ConocimientoAnalisisTareaSegura')} style={{ width: 'calc(100% - 5px)', marginLeft: "3px" }} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe un comentario..."></textarea>

                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div class="accordion">
                            <input type="checkbox" id="accordion-3" class="accordion-toggle" />
                            <label for="accordion-3" class="accordion-title">1.3 Sabe como proceder en caso de accidente</label>
                            <span class="accordion-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                            </span>
                            <div class="accordion-content">
                                <div class="min-h-0">
                                    <select id="options" style={{ width: 'calc(100% - 5px)', marginLeft: "3px", marginBottom: "5px" }} onChange={(e) => handleSelectChange(e, 'ProcedimientoEnCasoDeAccidente')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Selecciona una opción</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                        <option value="Noverificar">No se pudo verificar</option>
                                        <option value="Noaplica">No aplica</option>
                                    </select>
                                    {responses['ProcedimientoEnCasoDeAccidente'] === 'No' && (
                                        <>

                                            <textarea onChange={(e) => handleCommentChange(e, 'ProcedimientoEnCasoDeAccidente')} style={{ width: 'calc(100% - 5px)', marginLeft: "3px" }} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe un comentario..."></textarea>

                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div class="accordion">
                            <input type="checkbox" id="accordion-4" class="accordion-toggle" />
                            <label for="accordion-4" class="accordion-title">1.4 Conoce los impactos ambientales que se generan durante su trabajo</label>
                            <span class="accordion-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                            </span>
                            <div class="accordion-content">
                                <div class="min-h-0">
                                    <select id="options" style={{ width: 'calc(100% - 5px)', marginLeft: "3px", marginBottom: "5px" }} onChange={(e) => handleSelectChange(e, 'ConocimientoImpactosAmbientales')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Selecciona una opción</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                        <option value="Noverificar">No se pudo verificar</option>
                                        <option value="Noaplica">No aplica</option>
                                    </select>
                                    {responses['ConocimientoImpactosAmbientales'] === 'No' && (
                                        <>

                                            <textarea onChange={(e) => handleCommentChange(e, 'ConocimientoImpactosAmbientales')} style={{ width: 'calc(100% - 5px)', marginLeft: "3px" }} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe un comentario..."></textarea>

                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div class="accordion">
                            <input type="checkbox" id="accordion-5" class="accordion-toggle" />
                            <label for="accordion-5" class="accordion-title">1.5 Utiliza los elementos de protección personal para realizar las tareas que lo requieren</label>
                            <span class="accordion-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                            </span>
                            <div class="accordion-content">
                                <div class="min-h-0">
                                    <select id="options" style={{ width: 'calc(100% - 5px)', marginLeft: "3px", marginBottom: "5px" }} onChange={(e) => handleSelectChange(e, 'UsoElementosProteccionPersonal')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Selecciona una opción</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                        <option value="Noverificar">No se pudo verificar</option>
                                        <option value="Noaplica">No aplica</option>
                                    </select>
                                    {responses['UsoElementosProteccionPersonal'] === 'No' && (
                                        <>

                                            <textarea onChange={(e) => handleCommentChange(e, 'UsoElementosProteccionPersonal')} style={{ width: 'calc(100% - 5px)', marginLeft: "3px" }} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe un comentario..."></textarea>

                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-6" style={{ marginTop: "10px" }}>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección de correo</label>
                        <input autocomplete="off" onChange={(event) => handleInputChange(event, 'email')}  type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@limpiolux.com.ar" required />
                    </div>
                    <Button onClick={handleShowJSON} color="primary" style={{ backgroundColor: "#0075a9", marginTop: "1px" }}>
                        <AiOutlineSend /> Enviar
                    </Button>


                </div>

            </section>

        </>
    );
}

export default Form;
