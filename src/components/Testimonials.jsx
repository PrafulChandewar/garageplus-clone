"use client";

import { useEffect, useState } from "react";

/* =========================================
   TESTIMONIAL DATA
========================================= */

const testimonials = [
  {
    quote: "Managing jobs has become much easier.",
    text: "Garage Plus has helped us keep our job cards, customer information, and workshop activities organized in one place.",
    name: "Marcus Chen",
    role: "",
    company: "Ravi's Auto Garage",
    industry: "Automotive Repair, 10-50 employees",
  },
  {
    quote: "I can finally see what's happening across my branches.",
    text: "Earlier, managing multiple locations was difficult. Now I can check branch activity and performance from one dashboard.",
    name: "Jordan M.",
    role: "Owner",
    company: "Custom Auto Restoration & Fabrication",
    industry: "3-8 employees",
  },
  {
    quote: "Our customer follow ups are much more organized.",
    text: "WhatsApp updates and service reminders have made it easier for our team to stay connected with customers.",
    name: "Sam T.",
    role: "Auto mechanic",
    company: "",
    industry: "Automotive Repair & Maintenance, 1-10 employees",
  },
  {
    quote: "Billing is much simpler now.",
    text: "Creating estimates and GST invoices is faster, and keeping track of pending payments is much easier.",
    name: "Alex Johnson",
    role: "Lead Technician",
    company: "",
    industry: "Automotive Repair & Detailing, 5-15 staff",
  },
  {
    quote: "We finally know where every job stands.",
    text: "Before Garage Plus, we had to ask around to find out what was pending. Now the team can see job status and customer information in one place.",
    name: "Rajesh K.",
    role: "Owner",
    company: "Shree Motors",
    industry: "Automotive Repair, 8-15 employees",
  },
  {
    quote: "Inventory is no longer a guessing game.",
    text: "We used to check shelves and messages before confirming parts. Now we can see what's available and what needs to be reordered.",
    name: "Amit P.",
    role: "Workshop Manager",
    company: "AutoCare Garage",
    industry: "Service & Repair, 10-20 employees",
  },
  {
    quote: "Following up with customers is much easier now.",
    text: "We don't have to depend on memory for service reminders anymore. Garage Plus helps us keep track of customers who are due to come back.",
    name: "Vikram S.",
    role: "Owner",
    company: "Prime Auto Works",
    industry: "Multi-brand Workshop, 6-12 employees",
  },
  {
    quote: "I have a clearer picture of the money.",
    text: "Earlier, partial payments and pending balances were difficult to track. Now I can see what has been paid and what is still outstanding.",
    name: "Neha R.",
    role: "Workshop Manager",
    company: "DrivePoint Motors",
    industry: "Automotive Service, 10-25 employees",
  },
];

/* =========================================
   TESTIMONIAL CARD
========================================= */

function TestimonialCard({ testimonial, active = false }) {
  return (
    <article
      className={`
        mt-[50px]
        flex
        h-full
        min-h-[230px]
        w-full
        flex-col
        rounded-[18px]
        border
        border-[#f0dfcc]
        bg-[#fff0df]
        p-[18px]
        transition-all
        duration-300

        sm:min-h-[255px]
        sm:p-[22px]

        lg:min-h-[285px]
        lg:p-[26px]

        ${
          active
            ? "shadow-[0_10px_30px_rgba(255,114,0,0.08)]"
            : ""
        }
      `}
    >
      {/* STARS */}

      <div
        className="
          text-[9px]
          tracking-[1px]
          text-[#ff7200]

          sm:text-[10px]

          lg:text-[15px]
        "
      >
        ★★★★★
      </div>

      {/* QUOTE */}

      <h3
        className="
          mt-[10px]
          text-[13px]
          font-semibold
          leading-[1.35]
          text-[#ff7200]

          sm:text-[15px]

          lg:text-[18px]
        "
      >
        “{testimonial.quote}”
      </h3>

      {/* TEXT */}

      <p
        className="
          mt-[10px]
          text-[9px]
          leading-[1.55]
          text-[#666666]

          sm:text-[10px]

          lg:text-[12px]
        "
      >
        {testimonial.text}
      </p>

      {/* USER */}

      <div className="mt-auto pt-[16px]">
        <p
          className="
            text-[9px]
            font-bold
            text-black

            sm:text-[10px]

            lg:text-[12px]
          "
        >
          {testimonial.name}
        </p>

        <p
          className="
            mt-[5px]
            text-[9px]
            leading-[1.45]
            text-zinc-800

            sm:text-[10px]

            lg:text-[12px]
          "
        >
          {testimonial.role && testimonial.role}
          {testimonial.role && testimonial.company && " | "}
          {testimonial.company && testimonial.company}
          {(testimonial.role || testimonial.company) && " | "}
          {testimonial.industry}
        </p>
      </div>
    </article>
  );
}

/* =========================================
   TESTIMONIALS
========================================= */

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* =======================================
     AUTO SLIDE
  ======================================= */

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1
          ? 0
          : current + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const previous = () => {
    setActiveIndex((current) =>
      current === 0
        ? testimonials.length - 1
        : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1
        ? 0
        : current + 1
    );
  };

  const getIndex = (offset) => {
    return (
      (activeIndex + offset + testimonials.length) %
      testimonials.length
    );
  };

  const leftCard = testimonials[getIndex(-1)];
  const centerCard = testimonials[getIndex(0)];
  const rightCard = testimonials[getIndex(1)];

  return (
    <section
      id="testimonials"
      className="
        mt-[50px]
        bg-[#fff0df]
        px-4
        py-[38px]

        sm:px-6
        sm:py-[55px]

        lg:py-[75px]
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1000px]
        "
      >
        {/* =================================
            HEADING
        ================================== */}

        <div className="text-center">
          <h2
            className="
              text-[24px]
              font-semibold
              leading-[1.15]
              text-[#ff7200]

              sm:text-[27px]

              lg:text-[34px]
            "
          >
            Trusted by Workshop Owners Across India
          </h2>

           {/* =================================
            ARROW BUTTON
        ================================== */}

        <div
          className="
            mt-[15px]
            flex
            justify-center
          "
        >
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="
              group
              flex
              items-center
              gap-[7px]
              rounded-[5px]
              border
              border-[#ff7200]
              bg-transparent
              px-[18px]
              py-[8px]
              text-[#ff7200]
              transition-all
              duration-300

              hover:bg-[#ff7200]
              hover:text-white
            "
          >
            <span
              className="
                text-[4px]
                font-semibold

                sm:text-[10px]

                lg:text-[12px]
              "
            >
              Real workshops. Real experiences.
            </span>

            {/* CIRCULAR ARROW */}

            <span
              className="
                flex
                h-[16px]
                w-[16px]
                items-center
                justify-center
                rounded-full
                border
                border-current
                text-[5px]
                transition-transform
                duration-300

                group-hover:translate-x-[3px]

                sm:h-[18px]
                sm:w-[18px]

                lg:h-[20px]
                lg:w-[20px]
                lg:text-[9px]
              "
            >
              →
            </span>
          </button>
        </div>
        </div>

        {/* =================================
            DESKTOP CARDS
        ================================== */}

        <div
          className="
            mt-[18px]
            hidden
            items-stretch
            gap-[15px]

            lg:flex
          "
        >
          {/* LEFT CARD */}

          <div
            key={`left-${leftCard.name}-${activeIndex}`}
            className="
              w-[30%]
              shadow-l
              shadow-blue-400
              shrink-0
              animate-testimonial-left
            "
          >
            <TestimonialCard testimonial={leftCard} />
          </div>

          {/* CENTER CARD */}

          <div
            key={`center-${centerCard.name}-${activeIndex}`}
            className="
              w-[30%]
              shadow-l
              shadow-blue-400
              shrink-0
              animate-testimonial-center
            "
          >
            <TestimonialCard
              testimonial={centerCard}
              active
            />
          </div>

          {/* RIGHT CARD */}

          <div
            key={`right-${rightCard.name}-${activeIndex}`}
            className="
              w-[30%]
              shadow-l
              shadow-blue-400
              shrink-0
              animate-testimonial-right
            "
          >
            <TestimonialCard testimonial={rightCard} />
          </div>
        </div>

        {/* =================================
            MOBILE CARD
        ================================== */}

        <div
          key={`mobile-${centerCard.name}-${activeIndex}`}
          className="
            mt-[18px]
            animate-testimonial-center

            lg:hidden
          "
        >
          <TestimonialCard
            testimonial={centerCard}
            active
          />
        </div>

      

        {/* =================================
            PAGINATION
        ================================== */}

        <div
          className="
            mt-[12px]
            flex
            justify-center
            gap-[3px]
          "
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={`${testimonial.name}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                h-[4px]
                rounded-full
                transition-all
                duration-300

                ${
                  activeIndex === index
                    ? "w-[14px] bg-[#ff7200]"
                    : "w-[4px] bg-[#d7bda5]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}