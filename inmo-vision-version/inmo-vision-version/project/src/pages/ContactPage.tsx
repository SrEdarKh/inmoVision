import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contacto | Inmo-Visión';
    window.scrollTo(0, 0);
  }, []);

  // Estados del formulario
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Manejar cambios
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  // Enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validar vacíos
    for (const key in form) {
      if (!form[key as keyof typeof form]) {
        setError("⚠️ Todos los campos son obligatorios.");
        return;
      }
    }

    try {
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "❌ Error al enviar el mensaje.");
        return;
      }

      setSuccess("✔️ Mensaje enviado correctamente. Te responderemos pronto.");

      // Limpiar formulario
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

    } catch (err) {
      console.error(err);
      setError("❌ Error al conectar con el servidor.");
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen">

      {/* HERO */}
      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              Ponte en contacto con nosotros
            </h1>
            <p className="text-xl text-primary-100">
              Estamos aquí para ayudarte. No dudes en escribirnos.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FORMULARIO */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ...información lateral igual... */}

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">

              <h2 className="text-2xl font-serif font-semibold mb-6">Envíanos un mensaje</h2>

              {error && <p className="text-red-600 mb-4">{error}</p>}
              {success && <p className="text-green-600 mb-4">{success}</p>}

              <form className="space-y-6" onSubmit={handleSubmit}>
                
                {/* Nombres */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nombre</label>
                    <input id="firstName" type="text" className="input" value={form.firstName} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Apellidos</label>
                    <input id="lastName" type="text" className="input" value={form.lastName} onChange={handleChange} />
                  </div>
                </div>

                {/* Contacto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Correo electrónico</label>
                    <input id="email" type="email" className="input" value={form.email} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Teléfono</label>
                    <input id="phone" type="tel" className="input" value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                {/* Asunto */}
                <div>
                  <label className="block text-sm font-medium mb-1">Asunto</label>
                  <input id="subject" type="text" className="input" value={form.subject} onChange={handleChange} />
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-medium mb-1">Mensaje</label>
                  <textarea id="message" rows={6} className="input" value={form.message} onChange={handleChange}></textarea>
                </div>

                {/* Checkbox */}
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" required />
                  <label className="text-sm">
                    Acepto la política de privacidad.
                  </label>
                </div>

                {/* Submit */}
                <div>
                  <button type="submit" className="btn btn-primary w-full sm:w-auto flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Mapa igual */}
    </div>
  );
};

export default ContactPage;
