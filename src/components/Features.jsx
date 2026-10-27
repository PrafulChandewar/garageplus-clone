"use client";

import { openRequestDemo } from "@/lib/openRequestDemo";
import { useState } from "react";

/* =========================================
   FEATURE DATA
========================================= */

const topFeatures = [
  {
    number: "01",
    title: "Job Management",
    icon: "▣",
    image: "/images/job-management.webp",
    description:
      "Create, assign, and track job cards from check-in to completion. Monitor technician workload and repair status in real time.",
  },
  {
    number: "02",
    title: "Real-Time Dashboard",
    icon: "◴",
    image: "/images/job-management.webp",
    description:
      "Get a clear real-time view of your workshop operations, job progress, performance, and daily activity from one dashboard.",
  },
  {
    number: "03",
    title: "Billing & Counter Sales",
    icon: "▤",
    image: "/images/job-management.webp",
    description:
      "Manage billing and counter sales smoothly while keeping invoices, payments, and customer transactions organized.",
  },
  {
    number: "04",
    title: "Multi-Branch System",
    icon: "⌘",
    image: "/images/job-management.webp",
    description:
      "Manage multiple workshop branches from one place and keep track of branch activity and performance.",
  },
  {
    number: "05",
    title: "Inventory & CRM",
    icon: "◇",
    image: "/images/job-management.webp",
    description:
      "Keep customer information and workshop inventory connected so your team can quickly find what they need.",
  },
  {
    number: "06",
    title: "Staff & Payroll",
    icon: "♙",
    image: "/images/job-management.webp",
    description:
      "Manage staff, roles, attendance, performance, and payroll information from one connected system.",
  },
];

const bottomFeatures = [
  {
    number: "07",
    title: "WhatsApp",
    icon: "◉",
    image: "/images/job-management.webp",
    description:
      "Send useful updates and important workshop information to customers through WhatsApp.",
  },
  {
    number: "08",
    title: "Reminders",
    icon: "♧",
    image: "/images/job-management.webp",
    description:
      "Keep track of customer follow-ups and service reminders so important jobs never get forgotten.",
  },
  {
    number: "09",
    title: "Estimates",
    icon: "▤",
    image: "/images/job-management.webp",
    description:
      "Create estimates quickly and share them with customers for faster approval and smoother service.",
  },
  {
    number: "10",
    title: "Appointment Booking",
    icon: "▦",
    image: "/images/job-management.webp",
    description:
      "Organize customer appointments and plan workshop jobs before vehicles arrive.",
  },
  {
    number: "11",
    title: "Order Management",
    icon: "⌑",
    image: "/images/job-management.webp",
    description:
      "Keep workshop orders organized and make it easier for your team to manage ongoing requirements.",
  },
  {
    number: "12",
    title: "Inventory Management",
    icon: "◎",
    image: "/images/job-management.webp",
    description:
      "Track workshop inventory and keep visibility over available parts and stock requirements.",
  },
  {
    number: "13",
    title: "GST Billing",
    icon: "▧",
    image: "/images/job-management.webp",
    description:
      "Create and manage GST billing as part of your workshop's everyday billing workflow.",
  },
];

/* =========================================
   FEATURE ITEM
========================================= */

function FeatureItem({ feature, active, onClick, position }) {
  const isFirst = position === "first";
  const isLast = position === "last";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`
        relative
        flex
        min-w-0
        flex-1
        flex-col
        items-center
        justify-center

        border-r
        border-[#f0dfcc]

        bg-white

        px-[3px]
        py-[7px]

        outline-none
        transition-all
        duration-200

        sm:px-[5px]
        sm:py-[9px]

        lg:px-[6px]
        lg:py-[11px]

        ${
          isFirst
            ? "rounded-l-full"
            : ""
        }

        ${
          isLast
            ? "border-r-0 rounded-r-full"
            : ""
        }
      `}
    >
      {/* ICON */}
      <div
        className={`
          flex
          h-[15px]
          w-[15px]
          items-center
          justify-center
          rounded-full

          text-[7px]
          font-bold

          sm:h-[21px]
          sm:w-[21px]
          sm:text-[9px]

          lg:h-[30px]
          lg:w-[35px]
          lg:text-[28px]

          ${
            active
              ? "text-[#ff7200]"
              : "text-[#444444]"
          }
        `}
      >
        {feature.icon}
      </div>

      {/* TITLE */}
      <span
        className={`
          my-[3px]
          max-w-[50px]

          text-center
          text-[4px]
          font-medium
          leading-[1.15]

          sm:mt-[4px]
          sm:max-w-[70px]
          sm:text-[5.5px]

          lg:mt-[7px]
          lg:max-w-[110px]
          lg:text-[13px]

          ${
            active
              ? "text-[#ff7200]"
              : "text-[#444444]"
          }
        `}
      >
        {feature.title}
      </span>
    </button>
  );
}

/* =========================================
   FEATURES
========================================= */

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(topFeatures[0]);

  return (
    <section
      id="features"
      className="
       mt-[50px]
        bg-white
        px-0
        pb-[18px]

        sm:pb-[30px]

        lg:pb-[40px]
      "
    >
      <div
        className="
          mx-auto
          max-w-[760px]
          flex
          rounded-[15px]
          flex-col
          bg-[#fff0df]

          px-[7px]
          py-[8px]

          sm:w-[760px]
          sm:rounded-[9px]
          sm:px-[13px]
          sm:py-[14px]

          lg:w-[760px]
          lg:rounded-[14px]
          lg:px-[50px]
          lg:py-[25px]
        "
      >
        {/* =================================
            TITLE
        ================================== */}

        <div className="text-center">
          <h2
            className="
              text-[28px]
              font-bold
              leading-[1.25]
              text-[#ff7200]

              sm:text-[30px]

              lg:text-[36px]
            "
          >
            Packed with Useful Features
          </h2>

          <p
            className="
              mx-auto
              my-[18px]
              max-w-[405px]
              text-[13px]
              leading-[1.35]
              text-[#555555]

              sm:mt-[5px]
              sm:max-w-[450px]
              sm:text-[12px]

              lg:max-w-[730px]
              lg:text-[15px]
            "
          >
            From billing to inventory, Garage Plus has everything a modern
            workshop needs.
          </p>
        </div>

        {/* =================================
            TOP 6 FEATURES
        ================================== */}

        <div
          className="
            mb-[5px]
            mt-[7px]
            flex
            overflow-hidden
            bg-white
            rounded-full
            order-1

            sm:mt-[11px]

            lg:mt-[16px]
          "
        >
          {topFeatures.map((feature, index) => (
            <FeatureItem
              key={feature.number}
              feature={feature}
              active={activeFeature.number === feature.number}
              onClick={() => setActiveFeature(feature)}
              position={
                index === 0
                  ? "first"
                  : index === topFeatures.length - 1
                  ? "last"
                  : "middle"
              }
            />
          ))}
        </div>

        {/* =================================
            SELECTED FEATURE
        ================================== */}

        <div
          className="
            mt-[12px]
            grid
            grid-cols-2
            items-center
            gap-[6px]
            order-3

            sm:mt-[10px]
            sm:gap-[10px]

            lg:my-[28px]
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-[18px]
            lg:order-2
          "
        >
          {/* IMAGE */}

          <div
            className="
              overflow-hidden
              rounded-br-2xl
              rounded-tl-2xl
              border-[15px]
              border-amber-500
              bg-[#ff8500]

              "
          >
            <img
              src={activeFeature.image}
              alt={`Garage Plus ${activeFeature.title}`}
              className="
                block
                h-auto
                w-full
                object-cover
              "
            />
          </div>

          {/* INFORMATION */}

          <div>
            <h3
              className="
                my-[18px]
                text-[21px]
                font-semibold
                leading-[1.1]
                text-[#ff7200]

                sm:text-[21px]

                lg:text-[32px]
              "
            >
              {activeFeature.title}
            </h3>

            <p
              className="
                mt-[5px]
                text-[8px]
                leading-[1.4]
                text-[#555555]

                sm:mt-[8px]
                sm:text-[6px]

                lg:mt-[15px]
                lg:text-[15px]
                lg:leading-[1.5]
              "
            >
              {activeFeature.description}
            </p>

            <a
              onClick={openRequestDemo}
              className="
                mt-[5px]
                inline-flex
                h-[38px]
                items-center
                justify-center
                rounded-[3px]
                bg-[#ff8500]
                px-[8px]
                text-[4px]
                font-semibold
                !text-white
                transition
                hover:bg-[#ed7600]

                sm:mt-[8px]
                sm:h-[28px]
                sm:px-[12px]
                sm:text-[6px]

                lg:mt-[10px]
                lg:h-[44px]
                lg:rounded-[5px]
                lg:px-[30px]
                lg:text-[15px]
              "
            >
              Book Your Demo
               <span
              className="
                flex
                m-3
                p-[5px]
                h-[20px]
                w-[20px]
                items-center
                justify-center
                rounded-full
                border-1
                border-white
                border-current
                text-[12px]
                text-white
                transition-transform
                duration-300

                group-hover:translate-x-[3px]

                sm:h-[28px]
                sm:w-[28px]

                lg:h-[20px]
                lg:w-[20px]
                lg:text-[12px]
                lg:text-white
              "
            >
              ↓
            </span>
            </a>
          </div>
        </div>

        {/* =================================
            BOTTOM 7 FEATURES
        ================================== */}

        <div
          className="
            mb-[12px]
            mt-[6px]
            flex
            overflow-hidden
            bg-white
            rounded-full
            order-2

            sm:mt-[10px]

            lg:mt-[16px]
            lg:order-3
          "
        >
          {bottomFeatures.map((feature, index) => (
            <FeatureItem
              key={feature.number}
              feature={feature}
              active={activeFeature.number === feature.number}
              onClick={() => setActiveFeature(feature)}
              position={
                index === 0
                  ? "first"
                  : index === bottomFeatures.length - 1
                  ? "last"
                  : "middle"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}