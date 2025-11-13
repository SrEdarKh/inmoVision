import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Regístrate | Inmo-Visión";
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !telephone || !email || !password) {
      setError("⚠️ Todos los campos son obligatorios.");
      return;
    }

    try {
      // const API = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api/";fetch(`${API}register`, {
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, telephone, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || " Error en el registro.");
        return;
      }

      alert(" Registro exitoso. Ahora puedes iniciar sesión.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(" Error al conectar con el servidor.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Llena tus datos para crear una cuenta
        </h1>
        <form onSubmit={handleSubmit} className="bg-white space-y-4">
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
              Número de celular
            </label>
            <input
              type="tel"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
            />
          </div>

          <p className="text-xs text-center text-gray-500">
            Al registrarte, aceptas nuestros{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Términos y condiciones
            </a>, la{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Política de privacidad
            </a> y la{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Política de cookies
            </a>.
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Registrarte
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
