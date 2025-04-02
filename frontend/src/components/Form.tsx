"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://tu-dominio.com/wp-json/forminator/v1/form/ID_DEL_FORMULARIO/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form_data: formData }),
      });

      if (!response.ok) throw new Error("Error al enviar el formulario");

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
    } catch (err) {
      setError("No se pudo enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Contáctanos</h2>
      {success ? <p className="text-green-500">¡Mensaje enviado con éxito!</p> : null}
      {error ? <p className="text-red-500">{error}</p> : null}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={formData.name} className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Correo" onChange={handleChange} value={formData.email} className="w-full p-2 border rounded" required />
        <textarea name="message" placeholder="Mensaje" onChange={handleChange} value={formData.message} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
