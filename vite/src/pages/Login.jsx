import React, { useState, useEffect } from 'react';
import { AiOutlineLogin } from "react-icons/ai";
import { useHistory } from 'react-router-dom';

function Home() {
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('IsLoggingIn') === 'true';
        if (isAuthenticated) {
          history.push('/dashboard');
        }
      }, []);
    
  const backgroundImageUrl = "https://i.ibb.co/9svRGCZ/limpiolux-login.webp";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setError(null);

    try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mail: email,
            contraseña: password,
          }),
        });
      
        if (response.ok) {
          const data = await response.json();
          console.log('Inicio de sesión exitoso:', data);
      
          // Guardar datos del usuario en localStorage
          localStorage.setItem('user', JSON.stringify({
            mail: data.mail,
            nombre: data.nombre,
          }));
      
          // Marcar como "logueado"
          localStorage.setItem('IsLoggingIn', 'true');
          
          // Redirigir a la página de dashboard
          history.push('/dashboard');
          window.location.href = '/dashboard';
        } else {
          console.error('Error en el servidor:', response.status, response.statusText);
          const errorData = await response.json();
          setError(errorData.error || 'Error desconocido');
          setIsLoggingIn(false);
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setError('Error al conectarse al servidor');
        setIsLoggingIn(false);
      }
  };

  return (
    <>
   <div class="bg-white dark:bg-gray-900">
    <div class="flex justify-center h-screen">
    <div className="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                <div>
                    <h2 class="text-2xl font-bold text-white sm:text-3xl">CASH - Visita de servicios</h2>

                    <p class="max-w-xl mt-3 text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                        autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                        molestiae
                    </p>
                </div>
            </div>
        </div>

        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div class="flex-1">
                <div class="text-center">
                    <div class="flex justify-center mx-auto">
                        <img class="w-auto h-7 sm:h-8" src="limpiolux-icon.svg" alt=""/>
                    </div>

                    <p class="mt-3 text-gray-500 dark:text-gray-300">Entrá en tu cuenta</p>
                </div>

                <div class="mt-8">
                    <form>
                        <div>
                            <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Direccíon de Mail</label>
                            <input value={email}
          onChange={(e) => setEmail(e.target.value)}type="email" name="email" id="email" placeholder="ejemplo@limpiolux.com.ar" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
                                <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">¿Contraseña olvidada?</a>
                            </div>

                            <input value={password}
          onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Escribe tu contraseña" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-6">
            <button
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="w-full flex items-center justify-center px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              <AiOutlineLogin className="mr-2" /> Entrar
            </button>
          </div>
          {error && <p className="mt-3 text-red-500">{error}</p>}

                    </form>

                    <p class="mt-6 text-sm text-center text-gray-400">¿Todavía no tienes cuenta? <a href="#" class="text-blue-500 focus:outline-none focus:underline hover:underline">Envíanos un mensaje</a>.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
}

export default Home;
