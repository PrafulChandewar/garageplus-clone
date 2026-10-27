"use client";

import { useState } from "react";

function Icon({ type, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "support") {
    return (
      <svg {...common}>
        <path d="M4 14a8 8 0 0 1 16 0" />
        <path d="M4 14v3a2 2 0 0 0 2 2h1v-5H4Z" />
        <path d="M20 14v3a2 2 0 0 1-2 2h-1v-5h3Z" />
        <path d="M12 21h2" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    );
  }

  if (type === "users") {
    return (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (type === "database") {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7" />
      </svg>
    );
  }

  if (type === "arrow") {
    return (
      <svg {...common}>
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    );
  }

  if (type === "close") {
    return (
      <svg {...common}>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </svg>
    );
  }

  return null;
}

const stats = [
  {
    value: "24/7",
    label: "support anytime, anywhere",
    icon: "clock",
  },
  {
    value: "<1h",
    label: "average email response time",
    icon: "mail",
  },
  {
    value: "2 Days",
    label: "typical onboarding time",
    icon: "calendar",
  },
  {
    value: "100%",
    label: "human-based support",
    icon: "users",
  },
  {
    value: "Free",
    label: "Onboarding & data migration",
    icon: "database",
  },
];

export default function CustomerSupport() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* =====================================================
          CUSTOMER SUPPORT SECTION
      ===================================================== */}

      <section
        className="
          bg-[#fff0df]
          mt-[50px]
          px-0
          py-[24px]

          sm:py-[38px]

          lg:py-[58px]
        "
      >
        <div
          className="
            mx-auto
            w-[calc(100%-28px)]
            max-w-[900px]

            sm:w-[calc(100%-50px)]

            lg:w-[calc(100%-80px)]
          "
        >
          {/* CENTER CONTENT */}

          <div className="mx-auto max-w-[760px] text-center">

            <h2
              className="
                mt-[9px]
                text-[34px]
                font-bold
                leading-[1.1]
                tracking-[-0.8px]
                text-[#ff8500]

                sm:text-[34px]

                lg:text-[48px]
                lg:tracking-[-1.4px]
              "
            >
              World class customer support
            </h2>

            <p
              className="
                mx-auto
                mt-[7px]
                max-w-[420px]
                text-[8px]
                leading-[1.45]
                text-[#555555]

                sm:mt-[10px]
                sm:text-[9px]

                lg:mt-[13px]
                lg:max-w-[520px]
                lg:text-[21px]
              "
            >
              We're here to help your workshop run smoothly, every day.
            </p>

            {/* CONTACT SUPPORT */}

            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="
                mt-[14px]
                inline-flex
                items-center
                justify-center
                gap-[5px]
                rounded-[9px]
                border
                border-[#ff8500]
                bg-transparent
                px-[18px]
                py-[7px]
                text-[9px]
                font-semibold
                text-[#ff8500]
                bg-white
                transition-all
                duration-200
                hover:bg-[#ff8500]
                hover:text-white

                sm:mt-[18px]
                sm:px-[22px]
                sm:py-[9px]
                sm:text-[11px]

                lg:mt-[22px]
                lg:px-[27px]
                lg:py-[11px]
                lg:text-[13px]
              "
            >
              Contact support
              <span className="border-1  px-[3px] rounded-full text-[11px] ">
                <strong>→</strong>
              </span>
            </button>

            {/* EMAIL / PHONE / CHAT */}

            <div
              className="
                mt-[9px]
                flex
                items-center
                justify-center
                gap-[6px]
                text-[4px]
                text-[#555555]

                sm:mt-[11px]
                sm:gap-[11px]
                sm:text-[8px]

                lg:mt-[13px]
                lg:gap-[11px]
                lg:text-[14px]
              "
            >
              <span>Email</span>

              <span className="h-[4px] w-[4px] rounded-full bg-[#555555]" />

              <span>Phone</span>

              <span className="h-[4px] w-[4px] rounded-full bg-[#555555]" />

              <span>Chat</span>
            </div>
          </div>

          {/* =====================================================
              STATS
          ===================================================== */}

          <div
            className="
              mx-auto
              mt-[22px]
              grid
              max-w-[760px]
              grid-cols-2
              gap-[9px]

              sm:mt-[28px]
              sm:grid-cols-3
              sm:gap-[11px]

              lg:mt-[38px]
              lg:grid-cols-5
              lg:gap-[13px]
            "
          >
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="
                  group
                  min-h-[160px]
                  rounded-[10px]
                  bg-white
                  m-2
                  px-[25px]
                  py-[35px]
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-[6px]
                  hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)]

                  sm:min-h-[140px]

                  lg:px-[15px]
                  lg:py-[11px]
                  lg:min-h-[140px]
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-[21px]
                    w-[21px]
                    items-center
                    justify-center
                    rounded-full
                    text-[#ff7200]
                    scale-180
                    transition-transform
                    duration-300
                    group-hover:scale-110

                    sm:h-[25px]
                    sm:w-[25px]

                    lg:h-[30px]
                    lg:w-[30px]
                    lg:scale-160
                  "
                >
                  <Icon
                    type={stat.icon}
                    className="
                      h-[10px]
                      w-[10px]

                      sm:h-[12px]
                      sm:w-[12px]

                      lg:h-[14px]
                      lg:w-[14px]
                    "
                  />
                </div>

                <div
                  className="
                    mt-[8px]
                    text-[15px]
                    font-bold
                    leading-none
                    text-zinc-900

                    sm:text-[16px]

                    lg:text-[18px]
                  "
                >
                  {stat.value}
                </div>

                <p
                  className="
                    mx-auto
                    mt-[7px]
                    max-w-[125px]
                    text-[4px]
                    leading-[1.3]
                    text-zinc-500

                    sm:text-[7px]

                    lg:mt-[7px]
                    lg:text-[12px]
                    lg:max-w-[85px]
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      {showForm && (
        <button
          type="button"
          aria-label="Close contact form"
          onClick={() => setShowForm(false)}
          className="
            fixed
            inset-0
            z-[9998]
            cursor-default
            bg-black/40
            backdrop-blur-[1px]
          "
        />
      )}

      {/* =====================================================
          RIGHT SIDE CONTACT DRAWER
      ===================================================== */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[9999]
          h-screen
          w-[min(390px,92vw)]
          overflow-y-auto
          bg-white
          shadow-[-15px_0_45px_rgba(0,0,0,0.12)]
          transition-transform
          duration-400
          ease-out

          ${
            showForm
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div
          className="
            relative
            min-h-full
            px-[16px]
            pb-[25px]
            pt-[12px]

            sm:px-[22px]
            sm:pt-[15px]
          "
        >
          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={() => setShowForm(false)}
            aria-label="Close"
            className="
              absolute
              right-[10px]
              top-[10px]
              z-10
              flex
              h-[25px]
              w-[25px]
              items-center
              justify-center
              rounded-full
              bg-[#f3f5f7]
              text-[#555555]
              transition
              hover:bg-[#ff8500]
              hover:text-white

              sm:right-[14px]
              sm:top-[14px]
            "
          >
            <Icon
              type="close"
              className="h-[12px] w-[12px]"
            />
          </button>

          {/* =================================================
              TOP CHARACTER IMAGE
          ================================================= */}

          <div
            className="
              flex
              justify-center
              pt-[2px]
            "
          >
            <img
              src="/images/garage-plus-character.webp"
              alt="Garage Plus"
              className="
                block
                h-auto
                w-[82px]
                object-contain

                sm:w-[105px]
              "
            />
          </div>

          {/* =================================================
              GET IN TOUCH PILL
          ================================================= */}

          <div
            className="
              mx-auto
              mt-[2px]
              flex
              min-h-[28px]
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#ffe1bd]
              px-[10px]

              sm:min-h-[34px]
            "
          >
            <span
              className="
                text-[13px]
                font-extrabold
                tracking-[-0.4px]
                text-[#ff7200]

                sm:text-[16px]
              "
            >
              GET IN TOUCH
            </span>
          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <form
            onSubmit={(event) => event.preventDefault()}
            className="
              mt-[18px]
              flex
              flex-col
              gap-[13px]

              sm:mt-[22px]
              sm:gap-[15px]
            "
          >
            {/* NAME */}

            <div>
              <label
                className="
                  block
                  text-[9px]
                  font-bold
                  text-[#111111]

                  sm:text-[10px]
                "
              >
                Hi, I'm <span className="text-[#ff7200]">*</span>
              </label>

              <input
                type="text"
                required
                placeholder="Type in your name"
                className="
                  mt-[5px]
                  h-[31px]
                  w-full
                  border-b
                  border-[#e5e5e5]
                  bg-transparent
                  px-[3px]
                  text-[9px]
                  text-[#111111]
                  outline-none
                  placeholder:text-[#b5b5b5]
                  focus:border-[#ff8500]

                  sm:h-[35px]
                  sm:text-[10px]
                "
              />
            </div>

            {/* PHONE */}

            <div>
              <label
                className="
                  block
                  text-[9px]
                  font-bold
                  text-[#111111]

                  sm:text-[10px]
                "
              >
                My WhatsApp / Phone Number{" "}
                <span className="text-[#ff7200]">*</span>
              </label>

              <input
                type="tel"
                required
                placeholder="+91 XXXXX XXXXX"
                className="
                  mt-[5px]
                  h-[31px]
                  w-full
                  border-b
                  border-[#e5e5e5]
                  bg-transparent
                  px-[3px]
                  text-[9px]
                  text-[#111111]
                  outline-none
                  placeholder:text-[#b5b5b5]
                  focus:border-[#ff8500]

                  sm:h-[35px]
                  sm:text-[10px]
                "
              />
            </div>

            {/* EMAIL */}

            <div>
              <label
                className="
                  block
                  text-[9px]
                  font-bold
                  text-[#111111]

                  sm:text-[10px]
                "
              >
                My Email <span className="text-[#ff7200]">*</span>
              </label>

              <input
                type="email"
                required
                placeholder="your@email.com"
                className="
                  mt-[5px]
                  h-[31px]
                  w-full
                  border-b
                  border-[#e5e5e5]
                  bg-transparent
                  px-[3px]
                  text-[9px]
                  text-[#111111]
                  outline-none
                  placeholder:text-[#b5b5b5]
                  focus:border-[#ff8500]

                  sm:h-[35px]
                  sm:text-[10px]
                "
              />
            </div>

            {/* CITY */}

            <div>
              <label
                className="
                  block
                  text-[9px]
                  font-bold
                  text-[#111111]

                  sm:text-[10px]
                "
              >
                City & location{" "}
                <span className="text-[#ff7200]">*</span>
              </label>

              <input
                type="text"
                required
                placeholder="City, State"
                className="
                  mt-[5px]
                  h-[31px]
                  w-full
                  border-b
                  border-[#e5e5e5]
                  bg-transparent
                  px-[3px]
                  text-[9px]
                  text-[#111111]
                  outline-none
                  placeholder:text-[#b5b5b5]
                  focus:border-[#ff8500]

                  sm:h-[35px]
                  sm:text-[10px]
                "
              />
            </div>

            {/* HOW CAN WE HELP */}

            <div>
              <label
                className="
                  block
                  text-[9px]
                  font-bold
                  text-[#111111]

                  sm:text-[10px]
                "
              >
                How can we help?{" "}
                <span className="text-[#ff7200]">*</span>
              </label>

              <textarea
                required
                rows="3"
                placeholder="Tell us about your workshop..."
                className="
                  mt-[5px]
                  min-h-[65px]
                  w-full
                  resize-none
                  border-b
                  border-[#e5e5e5]
                  bg-transparent
                  px-[3px]
                  py-[7px]
                  text-[9px]
                  text-[#111111]
                  outline-none
                  placeholder:text-[#b5b5b5]
                  focus:border-[#ff8500]

                  sm:min-h-[75px]
                  sm:text-[10px]
                "
              />
            </div>

            {/* CONSENT */}

            <label
              className="
                flex
                items-start
                gap-[7px]
                text-[6px]
                leading-[1.4]
                text-[#777777]

                sm:text-[7px]
              "
            >
              <input
                type="checkbox"
                className="
                  mt-[1px]
                  h-[10px]
                  w-[10px]
                  shrink-0
                  accent-[#ff8500]
                "
              />

              <span>
                By submitting this form, you agree to be contacted by
                Garage Plus regarding your enquiry and workshop
                management requirements.
              </span>
            </label>

            {/* SUBMIT */}

            <button
              type="submit"
              className="
                mt-[2px]
                flex
                h-[34px]
                w-full
                items-center
                justify-center
                gap-[6px]
                rounded-full
                bg-[#ff8500]
                text-[9px]
                font-bold
                text-white
                shadow-[0_7px_18px_rgba(255,133,0,0.2)]
                transition-all
                duration-200
                hover:-translate-y-[2px]
                hover:bg-[#ed7600]

                sm:h-[40px]
                sm:text-[10px]
              "
            >
              Send Message

              <Icon
                type="arrow"
                className="h-[12px] w-[12px]"
              />
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}