import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = "Inicio sesión | Inmo-Visión";
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== "usuario@ejemplo.com") {
      setError("⚠️ Revisa el dato o ingresa el teléfono asociado a tu cuenta.");
    } else {
      setError("");
      alert("Inicio de sesión exitoso ✅");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4">Inicia Sesión</h1>
        <p className="text-lg mb-6">
          Por favor, inicia sesión con tu e-mail o crea una cuenta para continuar.
        </p>

        {/* Formulario*/}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg "
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail o teléfono
            </label>
            <input
              type="text"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm ${
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              }`}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mt-6"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mt-6"
          >
            Iniciar Sesión
          </button>
          <p className="text-sm text-center mt-6">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Crea una
            </Link>
          </p>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">o</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google */}
        <button
          className="flex items-center justify-center w-full border border-gray-300 py-2 px-4 rounded-md shadow-sm hover:bg-gray-100 transition"
        >
         <span className="text-2xl mr-2">
            <FcGoogle />
          </span>
          <span className="text-gray-700 font-medium">
            Iniciar sesión con Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
