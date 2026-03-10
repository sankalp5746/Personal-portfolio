"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="section mt-8">
      <h2 className="section-title">Message Module</h2>
      {status === "success" ? (
        <div className="text-glow text-green-400">
          <p>[SYSTEM] Message transmitted successfully.</p>
          <p>[SYSTEM] Awaiting response from host...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Add Web3Forms Access Key */}
          <input type="hidden" name="access_key" value="4fd2c554-cbfd-4d2a-a382-47b52cd72dd3" />
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm opacity-70">FIRST_NAME_VAR</label>
              <input type="text" name="name" required placeholder="Enter first name..." />
            </div>
            <div>
              <label className="block mb-2 text-sm opacity-70">LAST_NAME_VAR</label>
              <input type="text" name="lastname" required placeholder="Enter last name..." />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm opacity-70">EMAIL_ADDRESS_VAR</label>
            <input type="email" name="email" required placeholder="Enter comms link (email)..." />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm opacity-70">SUBJECT_VAR</label>
            <input type="text" name="subject" required placeholder="Enter message subject..." />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm opacity-70">PAYLOAD_VAR</label>
            <textarea name="message" required rows={5} placeholder="Enter message payload..."></textarea>
          </div>

          <button type="submit" className="btn w-full" disabled={status === "submitting"}>
            {status === "submitting" ? "TRANSMITTING..." : "EXECUTE_SEND"}
          </button>
          
          {status === "error" && (
            <p className="mt-4 text-[var(--error-color)] text-glow">[ERROR] Transmission failed. Retrying...</p>
          )}
        </form>
      )}
    </div>
  );
}
