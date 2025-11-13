
import React, { useState } from 'react';

// Using a separate component for the form itself to encapsulate state
const RSVPForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    attending: "Yes, I’ll be there!",
    allergies: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfMbHNgmNvXz8QtqJuSt26huMrsAl2_EkgHk63H-flSg3ZCgQ/formResponse";

    const data = new FormData();
    
    // Send only the user-visible fields, as the hidden validation fields were causing errors.
    data.append("entry.1498135098", form.name);
    data.append("entry.44151106", form.email);
    data.append("entry.180535622", form.contact);
    data.append("entry.623019881", form.attending);
    data.append("entry.1953483038", form.allergies);
    data.append("entry.2606285", form.message);

    try {
      await fetch(formUrl, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      setStatus("success");
      setForm({
        name: "",
        email: "",
        contact: "",
        attending: "Yes, I’ll be there!",
        allergies: "",
        message: "",
      });
      // Clear status message after 5 seconds for better UX
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl max-w-2xl w-full space-y-5 border border-gray-200"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="w-full bg-white/70 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#F0B429] transition duration-300"
        aria-label="Full Name"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email Address"
        type="email"
        className="w-full bg-white/70 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#F0B429] transition duration-300"
        aria-label="Email Address"
      />
      <input
        name="contact"
        value={form.contact}
        onChange={handleChange}
        placeholder="Contact Number"
        required
        className="w-full bg-white/70 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#F0B429] transition duration-300"
        aria-label="Contact Number"
      />

      <label htmlFor="attending-select" className="block text-sm text-gray-600 pt-2">Will you be attending?</label>
      <select
        id="attending-select"
        name="attending"
        value={form.attending}
        onChange={handleChange}
        className="w-full bg-white/70 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#F0B429] transition duration-300"
      >
        <option>Yes, I’ll be there!</option>
        <option>Sorry, I can’t make it.</option>
      </select>

      <input
        name="allergies"
        value={form.allergies}
        onChange={handleChange}
        placeholder="Do you have any food allergies?"
        className="w-full bg-white/70 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#F0B429] transition duration-300"
        aria-label="Food allergies"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message for the couple..."
        rows={3}
        className="w-full bg-white/70 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#F0B429] transition duration-300"
        aria-label="Message for the couple"
      />

      <button
        type="submit"
        className="w-full bg-[#F0B429] hover:bg-[#D4A225] text-[#6D4C41] font-semibold py-3 rounded-lg transition-transform transform hover:scale-105 duration-300 disabled:opacity-50 disabled:scale-100"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Submit RSVP"}
      </button>

      <div className="min-h-[68px]">
        {status === "success" && (
          <p role="status" aria-live="polite" className="text-green-700 bg-green-100 p-3 rounded-lg text-center mt-2">Thank you! Your RSVP has been recorded 🎉</p>
        )}
        {status === "error" && (
          <p role="status" aria-live="polite" className="text-red-700 bg-red-100 p-3 rounded-lg text-center mt-2">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  );
};


export const RSVPSection: React.FC = () => {
  return (
    <section id="rsvp" className="py-20 md:py-28">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-[#6D4C41]">Kindly Respond</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl">Please let us know if you can make it by January 6, 2026. We can't wait to celebrate with you!</p>
        <RSVPForm />
      </div>
    </section>
  );
};
