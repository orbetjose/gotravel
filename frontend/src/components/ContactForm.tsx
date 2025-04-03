import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const domain = import.meta.env.VITE_WP_DOMAIN;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    console.log("Enviando formulario", formData);

    try {
      const response = await fetch(`${domain}wp-json/contact-form/v1/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al enviar el formulario");

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" }); 
    } catch (err) {
      setError("No se pudo enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md ml-auto p-4 font-object-regular">

      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          onChange={handleChange}
          value={formData.name}
          className="w-full px-2 pt-2 pb-4 border border-charged-blue rounded text-right"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          onChange={handleChange}
          value={formData.email}
          className="w-full px-2 pt-2 pb-4 border border-charged-blue rounded text-right"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = target.value.replace(/\D/g, "");
          }}
          value={formData.phone}
          className="w-full px-2 pt-2 pb-4 border border-charged-blue rounded text-right"
          required
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          onChange={handleChange}
          value={formData.message}
          className="w-full px-2 pt-2 pb-4 h-[154px] border border-charged-blue rounded text-right"
          required
        />
        <button
          type="submit"
          className="bg-charged-blue text-white px-4 py-2 rounded block w-full text-center text-base"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {success ? (
        <p className="text-green-500 text-center mt-4">¡Mensaje enviado con éxito!</p>
      ) : null}
      {error ? <p className="text-red-500">{error}</p> : null}
    </div>
  );
}
