
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Garage Plus?",
    answer:
      "Garage Plus is a workshop management system that combines vehicle service management software, garage billing software, inventory, staff management, and CRM into one platform for automobile workshops.",
  },
  {
    question: "Does Garage Plus support multiple branches?",
    answer:
      "Yes. Garage Plus includes a Multi-Branch System, allowing you to manage and compare performance across multiple garage locations from a single account.",
  },
  {
    question: "Can I send automatic reminders to customers?",
    answer:
      "Yes. Garage Plus includes built-in WhatsApp Notifications and SMS text alerts for service reminders, estimates, and invoices.",
  },
  {
    question: "Is Garage Plus a good vehicle service tracking software?",
    answer:
      "Yes. Job Management and Real-Time Dashboard features let you track every vehicle's service status from check-in to completion.",
  },
  {
    question: "Does Garage Plus handle staff and payroll?",
    answer:
      "Yes. The Staff & Payroll module manages attendance, roles, performance, and payroll calculations within the same system.",
  },
  {
    question: "Do I need any hardware to use Garage Plus?",
    answer:
      "No. Garage Plus is a cloud-based platform accessible from any device with an internet connection.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="
        relative isolate mt-0 overflow-hidden
        bg-[#fff0df] px-4 py-[45px]
        sm:px-6 sm:py-[55px]
        lg:px-8 lg:pb-[70px] lg:pt-0
      "
    >
        

{/* GRID — DESKTOP ONLY */}
<div
  aria-hidden="true"
  className="
    pointer-events-none absolute left-0 top-0 z-0
    hidden h-[20%] w-full
    lg:block
    [background-image:linear-gradient(to_right,rgba(255,133,0,0.24)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,133,0,0.24)_1px,transparent_1px)]
    [background-size:82px_82px]
  "
/>



      {/* FAQ CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[650px]">

        {/* HEADING */}
        <div className="text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#a56e41] sm:text-[10px] lg:text-[12px]">
            − FAQ
          </p>

          <h2 className="mx-auto mt-2 max-w-full text-[23px] font-bold leading-[1.1] tracking-[-0.5px] text-[#111111] sm:text-[28px] lg:text-[40px] lg:tracking-[-1px]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="mt-[24px] overflow-hidden rounded-[5px] sm:mt-[33px] sm:rounded-[8px] lg:mt-[40px] lg:rounded-[10px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#e8cdb1]/70 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-3 px-2 py-3 text-left transition-colors hover:text-[#ff7200] sm:px-3 sm:py-[13px] lg:px-[17px] lg:py-[17px]"
                >
                  <span className="text-[12px] font-medium leading-[1.4] text-[#222222] sm:text-[14px] lg:text-[18px]">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center text-[16px] font-normal text-[#555555] transition-transform duration-300 sm:text-[18px] lg:text-[22px] ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-2 pb-3 pr-8 text-[11px] leading-[1.55] text-[#666666] sm:px-3 sm:pb-3 sm:pr-10 sm:text-[12px] lg:px-[17px] lg:pb-[15px] lg:pr-[45px] lg:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
