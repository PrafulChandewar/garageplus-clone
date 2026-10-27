const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up in minutes; no hardware or installation needed. Start your journey to digital workshop management instantly.",
  },
  {
    number: "02",
    title: "Configure Your Workshop",
    description:
      "Add branches, staff, customers, vehicles, and service catalog. Our onboarding makes it effortless to map your business.",
  },
  {
    number: "03",
    title: "Run Your Operations",
    description:
      "Manage job cards, billing, inventory, and staff - all from one dashboard. Experience the power of a connected workshop.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        bg-[#fff0df]
        w-[1260px]
        px-0
        mt-[50px]
        py-[22px]

        sm:mt-[45px]
        sm:py-[35px]

        lg:mt-[52px]
        lg:py-[52px]
      "
    >
      <div
        className="
          mx-auto
          w-[158px]

          sm:w-[285px]

          lg:w-[1200px]
        "
      >

        {/* =========================
            HEADING
        ========================== */}

        <div className="text-left">

          <p
            className="
              text-[8px]
              font-semibold
              mt-2
              uppercase
              tracking-[0.12em]
              text-[#794317f1]

              sm:text-[8px]

              lg:text-[12px]
            "
          >
             − How It Works
          </p>

          <h2
            className="
              mt-[13px]
              max-w-[450px]
              text-[38px]
              font-bold
              leading-[1.08]
              tracking-[-0.3px]
              text-[#111111]

              sm:mt-[13px]
              sm:max-w-[450px]
              sm:text-[32px]

              lg:mt-[13px]
              lg:max-w-[500px]
              lg:text-[42px]
            "
          >
            Get Started in Three Simple Steps.
          </h2>

          <p
            className="
              mt-[15px]
              max-w-[280px]
              text-[18px]
              leading-[1.45]
              text-[#555555]

              sm:mt-[15px]
              sm:max-w-[460px]
              sm:text-[18px]

              lg:mt-[15px]
              lg:max-w-[570px]
              lg:text-[18px]
              lg:leading-[1.5]
            "
          >
            No hardware needed. No complex installations. Just pure
            cloud-based efficiency for your garage.
          </p>

        </div>


        {/* =========================
            THREE STEP CARDS
        ========================== */}

        <div
          className="
            mt-[20px]
            grid
            grid-cols-1
            gap-[11px]

            sm:mt-[20px]
            sm:grid-cols-1
            sm:gap-[12px]

            lg:mt-[25px]
            lg:grid-cols-3
            lg:gap-[14px]
          "
        >
          {steps.map((step) => (
            <article
              key={step.number}
              className="
                flex
                min-h-[185px]
                flex-col
                rounded-[11px]
                bg-white
                px-[15px]
                py-[15px]

                sm:min-h-[185px]
                sm:rounded-[9px]
                sm:px-[20px]
                sm:py-[20px]

                lg:min-h-[185px]
                lg:rounded-[12px]
                lg:px-[25px]
                lg:py-[22px]
              "
            >

              {/* NUMBER */}

              <div
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-[34px]
                  font-bold
                  text-[#ff7200]

                "
              >
                {step.number}
              </div>


              {/* TITLE */}

              <h3
                className="
                  mt-[6px]
                  text-[15px]
                  font-bold
                  leading-[1.15]

                  sm:mt-[12px]
                  sm:text-[12px]

                  lg:mt-[12px]
                  lg:text-[18px]
                "
              >
                {step.title}
              </h3>


              {/* DESCRIPTION */}

              <p
                className="
                  mt-[8px]
                  text-[8px]
                  leading-[1.45]
                  text-[#555555]

                  sm:mt-[12px]
                  sm:text-[6px]

                  lg:mt-[8px]
                  lg:text-[15px]
                  lg:leading-[1.55]
                  lg:max-w-[300px]
                "
              >
                {step.description}
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}