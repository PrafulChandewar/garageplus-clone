const featureGroups = [
  {
    title: "Seamless job management",
    features: [
      {
        title: "Job Cards",
        text: "Create and assign job cards instantly.",
        icon: "job",
      },
      {
        title: "Live Status",
        text: "Track every vehicle from check in to delivery.",
        icon: "status",
      },
      {
        title: "Technician Assignment",
        text: "Assign the right technician to every job.",
        icon: "technician",
      },
      {
        title: "Turnaround Tracking",
        text: "Monitor repair time and spot delays early.",
        icon: "clock",
      },
    ],
    image: "/images/job-management.webp",
    imageAlt: "Seamless job management",
  },

  {
    title: "Smart operations",
    features: [
      {
        title: "Job Scheduling",
        text: "Plan and assign jobs across the week.",
        icon: "calendar",
      },
      {
        title: "WhatsApp Updates",
        text: "Send instant updates to customers.",
        icon: "message",
      },
      {
        title: "Estimate Links",
        text: "Create a link and send it to any customer.",
        icon: "link",
      },
      {
        title: "Live Dashboard",
        text: "Present daily performance at a glance.",
        icon: "dashboard",
      },
    ],
    image: "/images/smart-operations.webp",
    imageAlt: "Smart operations",
  },

  {
    title: "Team-wide visibility",
    features: [
      {
        title: "Instant Search",
        text: "Locate any job card, in seconds.",
        icon: "search",
      },
      {
        title: "External Access",
        text: "Grant limited entry to outside mechanics or vendors.",
        icon: "users",
      },
      {
        title: "Smart Alerts",
        text: "Get notified, silence when you need to focus.",
        icon: "bell",
      },
      {
        title: "Tags & Mentions",
        text: "Pull attention into important updates.",
        icon: "tag",
      },
    ],
    image: "/images/team-visibility.webp",
    imageAlt: "Team-wide visibility",
  },
];


/* =================================
   ACTUAL LINE STYLE ICONS
================================= */

function FeatureIcon({ type }) {
  const common =
    "h-[12px] w-[12px] stroke-[#ff7200] sm:h-[14px] sm:w-[14px] lg:h-[15px] lg:w-[15px]";

  if (type === "job") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
      >
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V2h6v2" />
        <path d="M9 9h6" />
        <path d="M9 13h6" />
        <path d="M9 17h3" />
      </svg>
    );
  }

  if (type === "status") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </svg>
    );
  }

  if (type === "technician") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
      >
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21c.7-4 2.6-6 6-6s5.3 2 6 6" />
        <path d="m18 4 2 2" />
        <path d="m20 4-2 2" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
      >
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
        <path d="M8 14h2M12 14h2M16 14h0M8 17h2" />
      </svg>
    );
  }

  if (type === "message") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
      >
        <path d="M20 11.5a7.5 7.5 0 0 1-10.8 6.7L5 20l1.5-4.2A7.5 7.5 0 1 1 20 11.5Z" />
        <path d="M9 11.5h.01M12 11.5h.01M15 11.5h.01" />
      </svg>
    );
  }

  if (type === "link") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
      >
        <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.2 1.2" />
        <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2a5 5 0 0 0 7.1 7.1l1.2-1.2" />
      </svg>
    );
  }

  if (type === "dashboard") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 15v2M12 11v6M16 8v9" />
      </svg>
    );
  }

  if (type === "search") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
      >
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="m15 15 5 5" />
      </svg>
    );
  }

  if (type === "users") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20c.5-3.5 2.3-5 5.5-5s5 1.5 5.5 5" />
        <path d="M16 5.5a3 3 0 0 1 0 5.8" />
        <path d="M17 15c2.2.4 3.5 2 4 5" />
      </svg>
    );
  }

  if (type === "bell") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={common}
      >
        <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={common}
    >
      <path d="M20 13.5 13.5 20 4 10.5V4h6.5L20 13.5Z" />
      <circle cx="8" cy="8" r="1" />
    </svg>
  );
}


/* =================================
   FEATURE LIST
================================= */

function FeatureList({ features }) {
  return (
    <div className="flex flex-col gap-[5px] sm:gap-[7px] lg:gap-[8px]">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="
            rounded-[8px]
            bg-white
            px-[9px]
            py-[7px]

            sm:rounded-[10px]
            sm:px-[11px]
            sm:py-[9px]

            lg:rounded-[11px]
            lg:px-[12px]
            lg:py-[10px]
          "
        >
          {/* TITLE + ICON */}
          <h4
            className="
              flex
              items-center
              gap-[5p6

              text-[15px]
              font-semibold
              leading-[1.2]
              text-[#ff7200]

              sm:gap-[8px]
              sm:text-[15px]

              lg:gap-[10px]
              lg:text-[18px]
            "
          >
            {/* ICON */}
            <span
              className="
                flex
                h-[14px]
                w-[14px]
                shrink-0
                items-center
                justify-center

                sm:h-[17px]
                sm:w-[17px]

                lg:h-[20px]
                lg:w-[20px]
              "
            >
              <FeatureIcon type={feature.icon} />
            </span>

            {feature.title}
          </h4>

          {/* DESCRIPTION */}
          <p
            className="
              mt-[2px]
              pl-[19px]

              text-[8px]
              leading-[1.35]
              text-[#666666]

              sm:mt-[3px]
              sm:pl-[23px]
              sm:text-[10px]

              lg:mt-[3px]
              lg:pl-[27px]
              lg:text-[10px]
            "
          >
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  );
}


/* =================================
   WORKSHOP HUB
================================= */

export default function WorkshopHub() {
  return (
    <section
      id="solutions"
      className="
        bg-white
        px-0
        pb-[22px]

        sm:pb-[30px]

        lg:pb-[45px]
      "
    >
      {/* =================================
          MAIN WORKSHOP HUB BOX
      ================================== */}

      <div
        className="
          mx-auto
          max-w-[760px]

          overflow-hidden
          rounded-[15px]
          bg-[#fff0df]

          px-[12px]
          pt-[17px]
          pb-[17px]

          sm:w-[calc(100%-70px)]
          sm:rounded-[22px]
          sm:px-[20px]
          sm:pt-[23px]
          sm:pb-[23px]

          lg:w-[calc(100%-100px)]
          lg:max-w-[760px]
          lg:rounded-[28px]
          lg:px-[30px]
          lg:pt-[30px]
          lg:pb-[30px]
        "
      >

        {/* =================================
            MAIN HEADING
        ================================== */}

        <div className="mx-auto w-full text-center">

          <h2
            className="
              text-[22px]
              font-extrabold
              leading-[1.25]
              tracking-[-0.2px]
              text-[#ff7200]

              sm:text-[22px]

              lg:text-[36px]
            "
          >
            Your workshop management hub
          </h2>

          <p
            className="
              mx-auto
              mt-[12px]
              w-full

              text-[4px]
              leading-[1.2]
              text-[#555555]

              sm:mt-[12px]
              sm:text-[7px]

              lg:mt-[12px]
              lg:text-[15px]
            "
          >
            Create job cards, track billing, manage inventory, and connect every branch to run your workshop smoothly.
          </p>

        </div>


        {/* =================================
            FEATURE GROUPS
        ================================== */}

        <div
          className="
            mt-[30px]
            flex
            flex-col
            gap-[18px]

            sm:mt-[30px]
            sm:gap-[25px]

            lg:mt-[30px]
            lg:gap-[35px]
          "
        >

          {featureGroups.map((group, index) => {

            const imageLeft = index === 1;

            return (
              <div
                key={group.title}
                className={`
                  grid
                  grid-cols-1
                  gap-[15px]

                  sm:gap-[12px]

                  lg:grid-cols-[40%_56%]
                  lg:items-center
                  lg:gap-[18px]

                  ${
                    imageLeft
                      ? "lg:grid-cols-[56%_40%]"
                      : ""
                  }
                `}
              >

                {/* =================================
                    TEXT / FEATURE LIST
                ================================== */}

                <div
                  className={`
                    w-full

                    ${
                      imageLeft
                        ? "lg:order-2"
                        : "lg:order-1"
                    }
                  `}
                >

                  {/* GROUP TITLE */}

                  <h3
                    className="
                      mb-[15px]

                      text-left
                      text-[24px]
                      font-semibold
                      leading-[1.2]
                      tracking-[-0.1px]
                      text-[#ff7200]

                      sm:mb-[15px]
                      sm:text-[21px]

                      lg:mb-[15px]
                      lg:text-[34px]
                    "
                  >
                    {group.title}
                  </h3>

                  {/* FEATURE LIST */}

                  <FeatureList features={group.features} />

                </div>


                {/* =================================
                    GROUP IMAGE
                ================================== */}

                <div
                  className={`
                    flex
                    w-full
                    justify-center

                    ${
                      imageLeft
                        ? "lg:order-1"
                        : "lg:order-2"
                    }
                  `}
                >

                  <div
                    className="
                      w-full
                      max-w-[390px]
                      overflow-hidden
                      rounded-[7px]

                      sm:max-w-[290px]
                      sm:rounded-[8px]

                      lg:max-w-[290px]
                      lg:rounded-[11px]
                    "
                  >
                    <img
                      src={group.image}
                      alt={group.imageAlt}
                      className="
                        block
                        h-auto
                        w-full
                        object-contain
                      "
                    />
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