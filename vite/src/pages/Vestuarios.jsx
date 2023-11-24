import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Nav from "../components/Nav";
import { Button } from "@nextui-org/react";
import { AiOutlineSend } from "react-icons/ai";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Vestuarios() {
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
                5. Vestuarios y/o Area de Descanso o para Cambiarse
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
                    style={{
                      marginTop: "15px",
                      "@media (max-width: 767px)": {
                        marginTop: "0",
                      },
                    }}
                    for="fecha_horario_visita"
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
                1. Indique el Estado de vestuarios y Areas de Descanso
              </p>

              <Accordion
                variant="bordered"
                style={{ border: "1px solid #DCDCDC" }}
              >
                <AccordionItem
                  key="1"
                  aria-label="1.1 El espacio para cambiarse se encuentra en buenas condiciones de conservación"
                  title="1.1 El espacio para cambiarse se encuentra en buenas condiciones de conservación"
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
                        "EspacioBuenasCondiciones"
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
                  {responses["EspacioBuenasCondiciones"] ===
                    "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "EspacioBuenasCondiciones"
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
                  aria-label="1.2 Cuenta con duchas"
                  title="1.2 Cuenta con duchas"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "CuentaConDuchas")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["CuentaConDuchas"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "CuentaConDuchas"
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
                  aria-label="1.3 Las duchas tienen agua caliente"
                  title="1.3 Las duchas tienen agua caliente"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "DuchasAguaCaliente")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["DuchasAguaCaliente"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "DuchasAguaCaliente"
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
                  aria-label="1.4 Las duchas tienen cortina"
                  title="1.4 Las duchas tienen cortina"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "DuchasConCortina")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["DuchasConCortina"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "DuchasConCortina"
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
                  aria-label="1.5 Cuenta con Calefacción"
                  title="1.5 Cuenta con Calefacción"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "CuentaConCalefaccion")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["CuentaConCalefaccion"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "CuentaConCalefaccion"
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
                  key="6"
                  aria-label="1.6 Cuenta con Aire Acondicionado"
                  title="1.6 Cuenta con Aire Acondicionado"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "CuentaConAireAcondicionado")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["CuentaConAireAcondicionado"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "CuentaConAireAcondicionado"
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
                  key="7"
                  aria-label="1.7 Cuenta con Espejo y Bachas"
                  title="1.7 Cuenta con Espejo y Bachas"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "CuentaConEspejoBachas")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["CuentaConEspejoBachas"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "CuentaConEspejoBachas"
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
                  key="8"
                  aria-label="1.8 Las condiciones de limpieza del lugar son buenas"
                  title="1.8 Las condiciones de limpieza del lugar son buenas"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "CondicionesLimpiezaBuenas")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["CondicionesLimpiezaBuenas"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "CondicionesLimpiezaBuenas"
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
                  key="9"
                  aria-label="1.9 La iluminación es suficiente"
                  title="1.9 La iluminación es suficiente"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "IluminacionSuficiente")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["IluminacionSuficiente"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "IluminacionSuficiente"
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
                  key="10"
                  aria-label="1.10 Todas las luminarias cuentan con su adecuada protección anti-caída"
                  title="1.10 Todas las luminarias cuentan con su adecuada protección anti-caída"
                >
                  <select
                    id="options"
                    style={{
                      width: "calc(100% - 5px)",
                      marginLeft: "3px",
                      marginBottom: "5px",
                    }}
                    onChange={(e) =>
                      handleSelectChange(e, "LuminariasProteccionAntiCaida")
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Selecciona una opción</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    <option value="Noverificar">No se pudo verificar</option>
                    <option value="Noaplica">No aplica</option>
                  </select>
                  {responses["LuminariasProteccionAntiCaida"] === "No" && (
                    <>
                      <textarea
                        onChange={(e) =>
                          handleCommentChange(
                            e,
                            "LuminariasProteccionAntiCaida"
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

export default Vestuarios;
