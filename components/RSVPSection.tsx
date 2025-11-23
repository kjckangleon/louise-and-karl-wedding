
import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'rsvp_submitted_karl_louise';

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
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (submitted) {
      setHasSubmitted(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfMbHNgmNvXz8QtqJuSt26huMrsAl2_EkgHk63H-flSg3ZCgQ/formResponse";

    const data = new FormData();
    
    // Send only the user-visible fields
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
      localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
      setHasSubmitted(true);

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

  const handleSubmitAgain = () => {
    setHasSubmitted(false);
    // We don't clear localStorage here so that if they refresh, it remembers they submitted before.
    // Only this session allows a new submission.
  };

  if (hasSubmitted && status === 'idle') {
    return (
      <div className="bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl max-w-2xl w-full text-center border border-gray-200 flex flex-col items-center animate-fade-in">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-serif text-[#6D4C41] mb-4">You're on the list!</h3>
        <p className="text-gray-600 mb-8 max-w-md text-lg">
            You have already submitted an RSVP. Do you want to submit again?
        </p>
        <button
            onClick={handleSubmitAgain}
            className="px-8 py-3 bg-[#F0B429] text-[#6D4C41] font-semibold rounded-full shadow-lg hover:bg-[#D4A225] transition-transform transform hover:scale-105 duration-300"
        >
            Submit Another Response
        </button>
      </div>
    );
  }

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
        className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 transform
          ${status === 'success' 
              ? 'bg-green-500 text-white scale-105' 
              : 'bg-[#F0B429] hover:bg-[#D4A225] text-[#6D4C41] hover:scale-105'
          } 
          ${status === 'loading' ? 'scale-100' : ''}
          disabled:opacity-75 disabled:cursor-not-allowed`}
        disabled={status === "loading" || status === "success"}
      >
        {status === 'loading'
          ? 'Submitting...'
          : status === 'success'
          ? 'Submitted ✓'
          : 'Submit RSVP'}
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
