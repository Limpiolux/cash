import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Nav from "../components/Nav";
import { Button } from "@nextui-org/react";
import { AiOutlineSend } from "react-icons/ai";
import { Accordion, AccordionItem } from "@nextui-org/react";

function BasicoSeguridad() {
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
    const formattedFechaHoraVisita = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}hs`;
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
      <Nav />
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8  px-4 mx-auto max-w-screen-md">
              <h2
                class="mb-4 text-4xl tracking-tight font-medium text-center text-gray-900 dark:text-white"
                style={{ marginTop: "-25px" }}
              >
                6. Básico de Seguridad
              </h2>
              <p class="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                RG 4.4.6-02 - Versión 15
              </p>

              <div class="grid md:grid-cols-2 md:gap-6">
                <div>
                  <label
                    style={{
                      marginTop: "15px",
                      "@media (max-width: 767px)": {
                        marginTop: "0",
                      },
                    }}
                    for="servicio_prestado"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Servicio Prestado
                  </label>
                  <input
                    autocomplete="off"
                    onChange={(e) => handleInputChange(e, "ServicioPrestado")}
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Servicio Prestado"
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      marginTop: "15px",
                      "@media (max-width: 767px)": {
                        marginTop: "0",
                      },
                    }}
                    for="unidad_negocio"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Unidad de Negocio
                  </label>
                  <input
                    autocomplete="off"
                    onChange={(e) => handleInputChange(e, "UnidadNegocio")}
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Unidad de Negocio"
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      marginTop: "15px",
                      "@media (max-width: 767px)": {
                        marginTop: "0",
                      },
                    }}
                    for="preventor"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Preventor
                  </label>
                  <input
                    autocomplete="off"
                    onChange={(e) => handleInputChange(e, "Preventor")}
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Preventor"
                    required
                  />
                </div>
                <div>
                  <label
                    for="fecha_horario_visita"
                    style={{
                      marginTop: "15px",
                      "@media (max-width: 767px)": {
                        marginTop: "0",
                      },
                    }}
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Fecha y Horario de Visita
                  </label>
                  <input
                    onChange={(e) => handleInputChange(e, "FechaHorario")}
                    type="datetime-local"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Unidad de Negocio"
                    required
                  />
                </div>
              </div>

              <p
                class=" font-normal	 text-black dark:text-gray-400 sm:text-xl"
                style={{
                  marginTop: "20px",
                  marginLeft: "7px",
                  marginBottom: "10px",
                }}
              >
                1. Personal
              </p>

              <Accordion
                variant="bordered"
                style={{ border: "1px solid #DCDCDC" }}
              >
                <AccordionItem
                  key="1"
                  aria-label="1.1 Cumple con las instrucciones de limpieza y seguridad establecidas"
                  title="1.1 Cumple con las instrucciones de limpieza y seguridad establecidas"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(
                        e,
                        "CumpleInstruccionesLimpiezaSeguridad"
                      )
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["CumpleInstruccionesLimpiezaSeguridad"] ===
                    "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "CumpleInstruccionesLimpiezaSeguridad"
                          )
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="1.2 Posee conocimientos sobre el Analisis de Tarea Segura"
                  title="1.2 Posee conocimientos sobre el Analisis de Tarea Segura"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "ConocimientoAnalisisTareaSegura")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["ConocimientoAnalisisTareaSegura"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "ConocimientoAnalisisTareaSegura"
                          )
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="1.3 Sabe como proceder en caso de accidente"
                  title="1.3 Sabe como proceder en caso de accidente"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "ProcedimientoEnCasoDeAccidente")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["ProcedimientoEnCasoDeAccidente"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "ProcedimientoEnCasoDeAccidente"
                          )
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="1.4 Conoce los impactos ambientales que se generan durante su trabajo"
                  title="1.4 Conoce los impactos ambientales que se generan durante su trabajo"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "ConocimientoImpactosAmbientales")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["ConocimientoImpactosAmbientales"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "ConocimientoImpactosAmbientales"
                          )
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="1.5 Utiliza los elementos de protección personal para realizar las tareas que lo requieren"
                  title="1.5 Utiliza los elementos de protección personal para realizar las tareas que lo requieren"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "UsoElementosProteccionPersonal")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["UsoElementosProteccionPersonal"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "UsoElementosProteccionPersonal"
                          )
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
              <p
                class=" font-normal	 text-black dark:text-gray-400 sm:text-xl"
                style={{
                  marginTop: "20px",
                  marginLeft: "7px",
                  marginBottom: "10px",
                }}
              >
                2. Ambiente de Trabajo
              </p>
              <Accordion
                variant="bordered"
                style={{ border: "1px solid #DCDCDC" }}
              >
                <AccordionItem
                  key="1"
                  aria-label="2.1 Las condiciones de luminosidad son adecuadas"
                  title="2.1 Las condiciones de luminosidad son adecuadas"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "CondicionesLuminosidad")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["CondicionesLuminosidad"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "CondicionesLuminosidad")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="2.2 El estado de los lockers es adecuado"
                  title="2.2 El estado de los lockers es adecuado"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) => handleSelectChange(e, "EstadoLockers")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["EstadoLockers"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "EstadoLockers")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="2.3 El estado del pañol / Taller / Deposito u oficina para el personal se encuentra en buenas condiciones"
                  title="2.3 El estado del pañol / Taller / Deposito u oficina para el personal se encuentra en buenas condiciones"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "EstadoPanolTallerOficina")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["EstadoPanolTallerOficina"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "EstadoPanolTallerOficina")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="2.4 Todos los peligros se encuentran identificados"
                  title="2.4 Todos los peligros se encuentran identificados"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "PeligrosIdentificados")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["PeligrosIdentificados"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "PeligrosIdentificados")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="2.5 Todo impacto ambiental se encuentra identificado"
                  title="2.5 Todo impacto ambiental se encuentra identificado"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "ImpactoAmbientalIdentificado")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["ImpactoAmbientalIdentificado"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "ImpactoAmbientalIdentificado")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="6"
                  aria-label="2.6 Los extintores del  servicio se encuentran OK"
                  title="2.6 Los extintores del  servicio se encuentran OK"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "ExtintoresServiciosOk")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["ExtintoresServiciosOk"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "ExtintoresServiciosOk")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
              <p
                class=" font-normal	 text-black dark:text-gray-400 sm:text-xl"
                style={{
                  marginTop: "20px",
                  marginLeft: "7px",
                  marginBottom: "10px",
                }}
              >
                3. Señalizacion
              </p>
              <Accordion
                variant="bordered"
                style={{ border: "1px solid #DCDCDC" }}
              >
                <AccordionItem
                  key="1"
                  aria-label="3.1 Se cuenta con conos o letreros de piso humedo"
                  title="3.1 Se cuenta con conos o letreros de piso humedo"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "ConosLetrerosPisoHumedo")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["ConosLetrerosPisoHumedo"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "ConosLetrerosPisoHumedo")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="3.2 Las zonas de trabajo se encuentran debidamente señalizadas o demarcadas"
                  title="3.2 Las zonas de trabajo se encuentran debidamente señalizadas o demarcadasZ"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "ZonasTrabajoSeñalizadas")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["ZonasTrabajoSeñalizadas"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "ZonasTrabajoSeñalizadas")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="3.3 Se encuentra el Cartel de la ART presente en el pañol"
                  title="3.3 Se encuentra el Cartel de la ART presente en el pañol"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) => handleSelectChange(e, "CartelArtPresente")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["CartelArtPresente"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "CartelArtPresente")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="3.4 Se encuentra el Cartel con los Nros. Telefónicos de Emergencias"
                  title="3.4 Se encuentra el Cartel con los Nros. Telefónicos de Emergencias"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "CartelEmergenciasTelefonicas")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["CartelEmergenciasTelefonicas"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "CartelEmergenciasTelefonicas")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="3.5 Se encuentra el Cartel de la Política del SGI"
                  title="3.5 Se encuentra el Cartel de la Política del SGI"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) => handleSelectChange(e, "CartelPoliticaSgi")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["CartelPoliticaSgi"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "CartelPoliticaSgi")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="6"
                  aria-label="3.6 Se encuentra el Cartel Indicador de Punto de Encuentro"
                  title="3.6 Se encuentra el Cartel Indicador de Punto de Encuentro"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "CartelPuntoEncuentro")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["CartelPuntoEncuentro"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "CartelPuntoEncuentro")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="7"
                  aria-label="3.7 Se encuentra el Cartel de Metas/Objetivos del SGI"
                  title="3.7 Se encuentra el Cartel de Metas/Objetivos del SGI"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "CartelMetasObjetivosSgi")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["CartelMetasObjetivosSgi"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "CartelMetasObjetivosSgi")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="8"
                  aria-label="3.8 Los peligros del servicio se encuentran señalizados y/o protegidos (ej: tableros electricos, cables, etc.)"
                  title="3.8 Los peligros del servicio se encuentran señalizados y/o protegidos (ej: tableros electricos, cables, etc.)"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "PeligrosServicioSeñalizados")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["PeligrosServicioSeñalizados"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "PeligrosServicioSeñalizados")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
              <p
                class=" font-normal	 text-black dark:text-gray-400 sm:text-xl"
                style={{
                  marginTop: "20px",
                  marginLeft: "7px",
                  marginBottom: "10px",
                }}
              >
                4. Productos
              </p>
              <Accordion
                variant="bordered"
                style={{ border: "1px solid #DCDCDC" }}
              >
                <AccordionItem
                  key="1"
                  aria-label="4.1 Los productos se encuentran rotulados, tapados y dentro de su apropiado medio de contencion"
                  title="4.1 Los productos se encuentran rotulados, tapados y dentro de su apropiado medio de contencion"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "ProductosRotuladosTapados")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["ProductosRotuladosTapados"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "ProductosRotuladosTapados")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="4.2 Se utilizan únicamente recipientes autorizados"
                  title="4.2 Se utilizan únicamente recipientes autorizados"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "RecipientesAutorizados")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["RecipientesAutorizados"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "RecipientesAutorizados")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="4.3 Los productos cuentan con su hoja de seguridad correspondiente"
                  title="4.3 Los productos cuentan con su hoja de seguridad correspondiente"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "HojaSeguridadCorrespondiente")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["HojaSeguridadCorrespondiente"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "HojaSeguridadCorrespondiente")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="4.4 Los productos se encuentran almacenados en sus adecuadas bateas de contención"
                  title="4.4 Los productos se encuentran almacenados en sus adecuadas bateas de contención"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "ProductosAlmacenadosEnBateas")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["ProductosAlmacenadosEnBateas"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "ProductosAlmacenadosEnBateas")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="4.5 Se encuentra en el servicio el Kit Antiderrame"
                  title="4.5 Se encuentra en el servicio el Kit Antiderrame"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "KitAntiderramePresente")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["KitAntiderramePresente"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "KitAntiderramePresente")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
              </Accordion>

              <p
                class=" font-normal	 text-black dark:text-gray-400 sm:text-xl"
                style={{
                  marginTop: "20px",
                  marginLeft: "7px",
                  marginBottom: "10px",
                }}
              >
                5. Elementos de proteccion personal
              </p>
              <Accordion
                variant="bordered"
                style={{ border: "1px solid #DCDCDC" }}
              >
                <AccordionItem
                  key="1"
                  aria-label="5.1 Todo el personal del servicio cuenta con el uniforme y ropa de trabajo adecuada"
                  title="5.1 Todo el personal del servicio cuenta con el uniforme y ropa de trabajo adecuada"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "PersonalConUniforme")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["PersonalConUniforme"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "PersonalConUniforme")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="5.2 Se encuentran en el servicio los Elementos de Protección necesarios para realizar las tareas"
                  title="5.2 Se encuentran en el servicio los Elementos de Protección necesarios para realizar las tareas"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "ElementosProteccionPresentes")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["ElementosProteccionPresentes"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(e, "ElementosProteccionPresentes")
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="5.3 Los Elementos de Proteccion se encuentran en buenas condiciones de uso"
                  title="5.3 Los Elementos de Proteccion se encuentran en buenas condiciones de uso"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "ElementosProteccionBuenEstado")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["ElementosProteccionBuenEstado"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "ElementosProteccionBuenEstado"
                          )
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="5.4 Existe suficiente cantidad de los Elementos de Proteccion para todo el personal que lo requiere"
                  title="5.4 Existe suficiente cantidad de los Elementos de Proteccion para todo el personal que lo requiere"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(
                        e,
                        "SuficienteCantidadElementosProteccion"
                      )
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["SuficienteCantidadElementosProteccion"] ===
                    "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "SuficienteCantidadElementosProteccion"
                          )
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="5.5 Se encuentra en el servicio el Botiquín de primeros auxilios"
                  title="5.5 Se encuentra en el servicio el Botiquín de primeros auxilios"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "BotiquinPrimerosAuxiliosPresente")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["BotiquinPrimerosAuxiliosPresente"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "BotiquinPrimerosAuxiliosPresente"
                          )
                        }
                        style={{
                          width: "calc(100% - 5px)",
                          marginLeft: "3px",
                        }}
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escribe un comentario..."
                      ></textarea>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
              <div class="mb-6" style={{ marginTop: "10px" }}>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dirección de correo
                </label>
                <input
                  autocomplete="off"
                  onChange={(event) => handleInputChange(event, "email")}
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="@limpiolux.com.ar"
                  required
                />
              </div>
              <Button
                onClick={handleShowJSON}
                color="primary"
                style={{ backgroundColor: "#0075a9", marginTop: "1px" }}
              >
                <AiOutlineSend /> Enviar
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default BasicoSeguridad;
