"use client";

import { useEffect, useState } from "react";

const initialData = {
  fullName: "",
  workshopName: "",
  mobile: "",
  email: "",
  city: "",
  message: "",
};

export default function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const open = () => {
      setData(initialData);
      setSubmitted(false);
      setIsOpen(true);
    };

    const close = () => setIsOpen(false);

    window.addEventListener("open-contact-form", open);
    window.addEventListener("close-contact-form", close);

    return () => {
      window.removeEventListener("open-contact-form", open);
      window.removeEventListener("close-contact-form", close);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  const update = (event) => {
    const { name, value } = event.target;
    setData((old) => ({ ...old, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  const inputClass =
    "mt-2 w-full rounded-lg border border-[#dedede] px-3 py-3 text-[13px] outline-none focus:border-[#ff8500]";

  const labelClass = "block text-[12px] font-semibold text-[#333]";

  return (
    <div className="fixed inset-0 z-[9999]">
      <button
        type="button"
        aria-label="Close contact form"
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 h-full w-full bg-black/50"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-heading"
        className="absolute right-0 top-0 flex h-[100dvh] w-full max-w-[410px] flex-col overflow-y-auto bg-white shadow-2xl"
      >
        {/* HEADER */}
        <header className="relative shrink-0 border-b  border-[#eee] px-5 pb-5 pt-6 sm:px-7">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="absolute right-5 top-4 !text-[28px] font-semibold text-[#111] bg-zinc-300 rounded-full 
             text-center px-[13px] hover:bg-zinc-400"
          >
            ×
          </button>

          <div className="mb-4 flex justify-center pt-5">
            <img
              src="/images/mascot-thinking.webp"
              alt="GaragePlus"
              className="h-[90px] w-full rounded-lg object-contain"
            />
          </div>

          <h2
            id="contact-heading"
            className="text-[18px] font-bold text-[#111] uppercase border-none bg-[#fff0df] rounded-[25px] p-1.5 items-center text-center"
          >
            Contact <span className="text-[#ff8500]" >GaragePlus</span>
          </h2>

        </header>

        {/* FORM BODY */}
        <div className="flex-1  px-5 py-6 sm:px-7">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="text-4xl text-[#ff8500]">✓</div>

              <h3 className="mt-4 text-xl font-bold">
                Thank you!
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-[#777]">
                Your form has been completed. Backend integration is
                required to send your details to GaragePlus.
              </p>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-6 rounded-full bg-[#ff8500] px-7 py-3 text-sm font-semibold text-white"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              id="contact-form"
              onSubmit={submit}
              className="space-y-4"
            >
              <label className={labelClass}>
               👤 Full Name *
                <input
                  className={inputClass}
                  name="fullName"
                  value={data.fullName}
                  onChange={update}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </label>

              <label className={labelClass}>
               ⪢ Workshop / Business Name *
                <input
                  className={inputClass}
                  name="workshopName"
                  value={data.workshopName}
                  onChange={update}
                  placeholder="Enter workshop name"
                  required
                />
              </label>

              <label className={labelClass}>
                📞 Mobile Number *
                <input
                  className={inputClass}
                  name="mobile"
                  type="tel"
                  value={data.mobile}
                  onChange={update}
                  placeholder="+91 XXXXX XXXXX"
                  autoComplete="tel"
                  pattern="[+]?[0-9 ()-]{10,18}"
                  required
                />
              </label>

              <label className={labelClass}>
               💌 Work Email *
                <input
                  className={inputClass}
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={update}
                  placeholder="name@company.com"
                  autoComplete="email"
                  required
                />
              </label>

              <label className={labelClass}>
                🏙️ City / Location *
                <input
                  className={inputClass}
                  name="city"
                  value={data.city}
                  onChange={update}
                  placeholder="Enter your city"
                  required
                />
              </label>

              <label className={labelClass}>
              💬 Your Message
                <textarea
                  className={inputClass}
                  name="message"
                  value={data.message}
                  onChange={update}
                  rows={3}
                  placeholder="Tell us more about your requirements"
                />
              </label>
              <div className="border border-zinc-300"></div>

              <p className=" p-1 text-[13px] leading-5 text-zinc-500">
                  We'll get back to you shortly and help you find the right Garage Plus solution for your Workshop.
                   <span className="text-[#ff8500]" > We're Here to Help</span>
              </p>
            </form>
          )}
        </div>

        {/* FOOTER */}
        {!submitted && (
          <footer className="flex shrink-0 justify-end border-t border-[#eee] bg-white px-5 py-4 sm:px-7">
            <button
              type="submit"
              form="contact-form"
              className="rounded-[8px] w-full bg-[#ff8500] px-6 py-3 text-[12px] font-semibold text-white
               hover:bg-[#e96f00]"
            >
              Send Message →
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}