
"use client";

import { useEffect, useState } from "react";


const workshopOptions = [
  { title: "Independent Workshop", description: "One workshop managing everyday repairs and services.", icon: "🚗" },
  { title: "Multi-Branch Workshop", description: "Multiple locations managed under system.", icon: "🏍️" },
  { title: "Service Centre / Garage", description: "Regular servicing, repairs, parts and customer management.", icon: "🛠️" },
  { title: "Crowing Workshop", description: "Expanding operations and looking for better control.", icon: "🏢" },
];

const peopleOptions = [
  { title: "1–5 People", description: "Small workshop", icon: "👤" },
  { title: "6–10 People", description: "Growing workshop", icon: "👥" },
  { title: "11–25 People", description: "Medium workshop", icon: "🧑‍🔧" },
  { title: "25+ People", description: "Large / High-Capacity workshop", icon: "🏭" },
];

const challengeOptions = [
  { title: "Managing Jobs", description: "Keep job details, labour and parts organised.", icon: "📋" },
  { title: "Managing Inventory", description: "Know what's available, low or out of stocks.", icon: "🔄" },
  { title: "Payments & Collections", description: "Track customer dues, payments and outstanding balances.", icon: "📦" },
  { title: "Customer Management", description: "Keep customer and vehicle information together.", icon: "🧾" },
  { title: "Follow-ups & Leads", description: "Manage enquiries, reminders and returning customers.", icon: "👨‍🔧" },
  { title: "Overall Workshop Management", description: "Bring everything into one connected system.", icon: "🏢" },
];

const managementOptions = [
  { id: "jobs-card", title: "Jobs Card" },
  { id: "inventory", title: "Inventory" },
  { id: "counter-sales", title: "Counter Sales" },
  { id: "customers-vehicles", title: "Customers & Vehicles" },
  { id: "crm-leads", title: "CRM Leads" },
  { id: "service-alerts", title: "Service Alerts" },
  {
    id: "complete-workshop-management",
    title: "Complete Workshop Management",
  },
];


const initialData = {
  workshopType: "",
  people: "",
  challenges: [],
  management: [],
  fullName: "",
  workshopName: "",
  mobile: "",
  email: "",
  city: "",
  message: "",
  notes: "",
};

export default function RequestDemoDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const open = () => {
      setStep(0);
      setData(initialData);
      setSubmitted(false);
      setIsOpen(true);
    };

    const close = () => setIsOpen(false);

    window.addEventListener("open-request-demo", open);
    window.addEventListener("close-request-demo", close);

    return () => {
      window.removeEventListener("open-request-demo", open);
      window.removeEventListener("close-request-demo", close);
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

  const toggleOption = (field, option) => {
    setData((old) => ({
      ...old,
      [field]: old[field].includes(option)
        ? old[field].filter((item) => item !== option)
        : [...old[field], option],
    }));
  };

  const next = () => {
    if (step === 0 && (!data.workshopType || !data.people)) {
      alert("Please select both options to continue.");
      return;
    }

    if (step === 1 && data.challenges.length === 0) {
      alert("Please select your biggest challenge.");
      return;
    }

    if (step === 2 && data.management.length === 0) {
      alert("Please select what you want to manage.");
      return;
    }

    setStep((old) => Math.min(old + 1, 3));
  };

  const back = () => setStep((old) => Math.max(old - 1, 0));

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  const inputClass =
    "mt-2 w-full rounded-lg border border-[#dedede] px-3 py-3 text-[13px] outline-none focus:border-[#ff8500]";

  const labelClass = "block text-[12px] font-semibold text-[#333]";

  
const optionButton = (option, selected, onClick) => (
  <button
    key={option.id ?? option.title}
    type="button"
    onClick={onClick}
    aria-pressed={selected}
    className={`flex w-full items-center gap-3 rounded-xl border border-zinc-600 p-3 text-left transition ${
      selected
        ? "border-[#ff8500] bg-[#fff7ee]"
        : "border-[#e7e7e7] bg-white hover:border-[#ffbd80]"
    }`}
  >
    {/* Left icon */}
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[20px]">
      {option.icon}
    </span>

    {/* Heading and description */}
    <span className="min-w-0 flex-1">
      <span className="block text-[12px] font-semibold leading-5 text-[#222]">
        {option.title}
      </span>
      <span className="mt-0.5 block text-[10px] leading-[1.5] text-[#777]">
        {option.description}
      </span>
    </span>

    {/* Right square checkbox */}
    <span
      aria-hidden="true"
      className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] border ${
        selected
          ? "border-[#ff8500] bg-[#ff8500] text-white"
          : "border-[#cfcfcf] bg-white"
      }`}
    >
      {selected && <span className="text-[12px] font-bold">✓</span>}
    </span>
  </button>
);


  const headings = [
    "Tell Us About Your Workshop",
    "Understand The Problem",
    "What Do You Need",
    "What Do You Need",
  ];

  return (
    <div className="fixed inset-0 z-[10000]">
      <button
        type="button"
        aria-label="Close Request a Demo"
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 h-full w-full bg-black/50"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-heading"
        className="absolute right-0 top-0 flex h-[100dvh] w-full max-w-[460px] flex-col bg-white shadow-2xl"
      >
        <header className="shrink-0 border-b border-[#eee] px-5 pb-5 pt-6 sm:px-7">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="absolute right-5 top-4 text-[28px] text-[#555]"
          >
            ×
          </button>

          <h2 className="font-bold text-[25px]">
            Request a demo 
          </h2>
          
          <h4
            id="demo-heading"
            className="mt-2 pr-7 text-[15px] font-bold leading-tight text-[#ff8500] flex flex-row gap-2"
            >
            {headings[step]}
            <p className=" text-[#777]">
               Step {step + 1} of 4
            </p>
          </h4>


          
<div className="mt-6 flex items-start">
  {[
    { icon: "🏢"},
    { icon: "🎯" },
    { icon: "⚙️" },
    { icon: "📝"},
  ].map((item, index) => (
    <div
      key={item.icon}
      className={`flex min-w-0 items-start ${
        index < 3 ? "flex-1" : "shrink-0"
      }`}
    >
      <div className="flex flex-col items-center">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full border text-[15px] ${
            index <= step
              ? "border-[#ff8500] bg-[#fff0df]"
              : "border-[#e4e4e4] bg-white grayscale"
          }`}
        >
          {item.icon}
        </span>

      </div>

      {index < 3 && (
        <div
          className={`mx-2 mt-[17px] h-[2px] flex-1 rounded-full ${
            index < step ? "bg-[#ff8500]" : "bg-[#e4e4e4]"
          }`}
        />
      )}
    </div>
  ))}
</div>

        </header>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="text-4xl text-[#ff8500]">✓</div>
              <h3 className="mt-4 text-xl font-bold">Thank you!</h3>
              <p className="mt-3 text-[13px] leading-6 text-[#777]">
                Frontend form complete. Backend integration is needed to send
                your demo request to Garage Plus.
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
            <>
              {step === 0 && (
                <div className="space-y-7">
                  <section>
                    <h3 className="mb-3 p-3 text-[15px] font-bold text-[#ff8500]  bg-[#fff0df] rounded-[7px]">
                      What best describes your workshop? Select all that apply.
                    </h3>
                     
<div className="grid grid-cols-1 gap-3">
  {workshopOptions.map((option) =>
    optionButton(
      option,
      data.workshopType === option.title,
      () =>
        setData((old) => ({
          ...old,
          workshopType: option.title,
        }))
    )
  )}
</div>

                  </section>

                  <section>
                    <h3 className="mb-3 p-3 text-[15px] font-bold text-[#ff8500]  bg-[#fff0df] rounded-[7px] ">
                      How many people work in your workshop?
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {peopleOptions.map((option) =>
                        optionButton(
                          option,
                          data.people === option.title,
                          () => setData((old) => ({ ...old, people: option.title }))
                        )
                      )}
                    </div>
                  </section>
                </div>
              )}

              {step === 1 && (
                <section>
                  <p className="mb-4 p-3 text-[15px] leading-5 text-[#ff8500]  bg-[#fff0df] rounded-[7px]">
                     Select your biggest challenge
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {challengeOptions.map((option) =>
                      optionButton(
                        option,
                        data.challenges.includes(option.title),
                        () => toggleOption("challenges", option.title)
                      )
                    )}
                  </div>
                </section>
              )}

              {step === 2 && (
                <section>
                  <p className="mb-4 p-3 text-[15px] leading-5 text-[#ff8500]  bg-[#fff0df] rounded-[7px]">
                     What would you like to manage with Garage Plus?
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {managementOptions.map((option) =>
                      optionButton(
                        option,
                        data.management.includes(option.title),
                        () => toggleOption("management", option.title)
                      )
                    )}
                  </div>
                </section>
              )}

              {step === 3 && (
                <form id="demo-contact-form" onSubmit={submit}>
                  
                  <label className={labelClass}>
                      Full Name *
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

                  <label className={`${labelClass} mt-4`}>
                    Workshop / Business Name *
                    <input
                      className={inputClass}
                      name="workshopName"
                      value={data.workshopName}
                      onChange={update}
                      placeholder="Enter workshop name"
                      required
                    />
                  </label>

                  <label className={`${labelClass} mt-4`}>
                    Mobile Number *
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

                  <label className={`${labelClass} mt-4`}>
                    Work Email *
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

                  <label className={`${labelClass} mt-4`}>
                    City / Location *
                    <input
                      className={inputClass}
                      name="city"
                      value={data.city}
                      onChange={update}
                      placeholder="Enter your city"
                      required
                    />
                  </label>

                  <label className={`${labelClass} mt-4`}>
                    Other Message
                    <textarea
                      className={inputClass}
                      name="message"
                      value={data.message}
                      onChange={update}
                      rows={3}
                      placeholder="Tell us more about your requirements"
                    />
                  </label>

                  <p className="text-[#ff8500]  bg-[#fff0df] mt-3 p-3 text-[13px] rounded-xl">
                    Note: We'll use your answers to make your Garage Plus walkthrough
                    more relevant to your workshop
                  </p>
                </form>
              )}
            </>
          )}
        </div>

        {!submitted && (
          <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-[#eee] bg-white px-5 py-4 sm:px-7">
            {step > 0 ? (
              <button
                type="button"
                onClick={back}
                className="rounded-full border border-[#ddd] px-5 py-3 text-[12px] font-semibold text-[#444] hover:bg-[#f7f7f7]"
              >
                ← Back
              </button>
            ) : (
              ""
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                className="rounded-full bg-[#ff8500] px-6 py-3 text-[12px] font-semibold text-white hover:bg-[#e96f00]"
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                form="demo-contact-form"
                className="rounded-full bg-[#ff8500] px-6 py-3 text-[12px] font-semibold text-white hover:bg-[#e96f00]"
              >
                Request Demo →
              </button>
            )}
          </footer>
        )}
      </aside>
    </div>
  );
}
