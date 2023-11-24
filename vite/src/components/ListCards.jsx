import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";

function ListCards() {
  return (
    <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Lista de Verificación de Visitas a los{" "}
              <span style={{ color: "#0075A9" }}>Servicios</span>
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Formularios para completar al momento de realizar la visita a los
              servicios.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
            <div class="flex flex-col overflow-hidden rounded-lg border md:flex-row">
              <a
                href="/"
                class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
              >
                <img
                  src="https://www.losandes.com.ar/resizer/UL57aA-ovu_UMAQKgoLZcADStgs=/1023x1363/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MVTGEMJQGVSTIZRRMJTGEMJRMM.jpg"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2 p-4 lg:p-6">
                <span class="text-sm text-gray-400">Tipo de Relevamiento:</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="/"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    1. Documentación del Servicio
                  </a>
                </h2>

                <p class="text-gray-500">RG 4.4.6-02</p>
                <p class="text-gray-500">Versión 15</p>

                <div>
                  <a
                    href="/"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Ir al formulario
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden rounded-lg border md:flex-row">
              <a
                href="/carteleria"
                class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
              >
                <img
                  src="https://pbs.twimg.com/media/D6ip11LW0AAWXwI.jpg:large"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2 p-4 lg:p-6">
                <span class="text-sm text-gray-400">Tipo de Relevamiento:</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="/carteleria"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    2. Cartelería del Servicio
                  </a>
                </h2>

                <p class="text-gray-500">RG 4.4.6-02</p>
                <p class="text-gray-500">Versión 15</p>
                <div>
                  <a
                    href="/carteleria"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Ir al formulario
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden rounded-lg border md:flex-row">
              <a
                href="/productos"
                class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
              >
                <img
                  src="https://norteonline.com.ar/wp-content/uploads/2021/10/Visita-empresa-Limpiolux-5.jpg"
                  loading="lazy"
                  alt="Photo by Magicle"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2 p-4 lg:p-6">
                <span class="text-sm text-gray-400">Tipo de Relevamiento</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="/productos"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    3. Almacenamiento de Productos
                  </a>
                </h2>

                <p class="text-gray-500">RG 4.4.6-02</p>
                <p class="text-gray-500">Versión 15</p>
                <div>
                  <a
                    href="/productos"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Ir al formulario
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-col overflow-hidden rounded-lg border md:flex-row">
              <a
                href="/maquinas"
                class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
              >
                <img
                  src="https://pbs.twimg.com/media/D6ip12SW4AAUA6J?format=jpg&name=large"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2 p-4 lg:p-6">
                <span class="text-sm text-gray-400">Tipo de Relevamiento:</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="/maquinas"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    4. Máquinas de Limpieza
                  </a>
                </h2>

                <p class="text-gray-500">RG 4.4.6-02</p>
                <p class="text-gray-500">Versión 15</p>
                <div>
                  <a
                    href="/maquinas"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Ir al formulario
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-col overflow-hidden rounded-lg border md:flex-row">
              <a
                href="/vestuarios"
                class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
              >
                <img
                  src="https://pbs.twimg.com/media/D8uYuAhWkAEF8z8.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2 p-4 lg:p-6">
                <span class="text-sm text-gray-400">Tipo de Relevamiento:</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="/vestuarios"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    5. Vestuarios y/o Area de Descanso o para Cambiarse
                  </a>
                </h2>

                <p class="text-gray-500">RG 4.4.6-02</p>
                <p class="text-gray-500">Versión 15</p>
                <div>
                  <a
                    href="/vestuarios"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Ir al formulario
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-col overflow-hidden rounded-lg border md:flex-row">
              <a
                href="/basicoseguridad"
                class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
              >
                <img
                  src="https://pbs.twimg.com/media/D6ip3LeW4AAJGrP.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2 p-4 lg:p-6">
                <span class="text-sm text-gray-400">Tipo de Relevamiento:</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="/basicoseguridad"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    6. Basico de Seguridad
                  </a>
                </h2>

                <p class="text-gray-500">RG 4.4.6-02</p>
                <p class="text-gray-500">Versión 15</p>
                <div>
                  <a
                    href="/basicoseguridad"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Ir al formulario
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCards;
