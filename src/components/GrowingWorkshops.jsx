
"use client";

export default function GrowingWorkshops() {
  const features = [
    "Free personalized walkthrough",
    "Quick onboarding",
    "Built for growing workshops",
  ];

  const openDemoForm = () => {
    window.dispatchEvent(new Event("open-request-demo"));
  };

  return (
    <section id="growingworkshops" className="mt-[50px] bg-white px-4 py-[18px] sm:px-6 sm:py-[30px] lg:py-[55px]">
      <div className="relative mx-auto w-full max-w-[760px] overflow-hidden rounded-[12px] bg-[#fff0df] px-[12px] py-[22px] sm:px-[28px] sm:py-[30px] lg:px-[38px] lg:py-[40px]">

        <div className="flex flex-col gap-[50px] sm:gap-[28px] lg:flex-row lg:items-center lg:gap-[42px]">

          {/* CONTENT: MOBILE PAR PEHLE, DESKTOP PAR RIGHT */}
          <div className="order-1 w-full text-center text-left lg:order-2 lg:w-[52%] lg:text-left">

            <h2 className="mt-[5px] text-[25px] font-bold text-left leading-[1.05] tracking-[-0.8px] text-[#ff8500] sm:mt-[7px] sm:text-[32px] sm:tracking-[-1px] lg:mt-[8px] lg:text-[40px] lg:tracking-[-1.4px]">
              Built for Growing Workshops
            </h2>

            <ul className=" mt-[14px] flex max-w-[300px] flex-col gap-[8px] text-left sm:mt-[18px] sm:gap-[10px] lg:mx-0 lg:mt-[22px] lg:gap-[11px]">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-[10px] text-[10px] leading-[1.5] text-[#555555] sm:text-[12px] lg:text-[15px]"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[12px] font-bold leading-none text-[#ff8500]"
                  >
                    √
                  </span>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={openDemoForm}
              className="mt-[16px] inline-flex cursor-pointer items-center gap-[5px] border-0 bg-transparent p-0 text-[11px] font-semibold text-[#ff8500] transition-colors duration-200 hover:text-[#d95f00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff8500] sm:mt-[20px] sm:text-[12px] lg:mt-[23px] lg:text-[13px]"
            >
              Request a Demo
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* IMAGE: MOBILE PAR NICHE, DESKTOP PAR LEFT */}
          <div className="order-2 w-[80%] shrink-0 lg:order-1 lg:w-[48%]">
            <div className="relative mx-auto w-full max-w-[420px]">

              
{/* NUMBER 3 WATERMARK — IMAGE KE PICHE */}
<span
  aria-hidden="true"
  className="
    pointer-events-none absolute left-1/2 top-1/2 z-0
    -translate-x-1/2 -translate-y-1/2
    select-none whitespace-nowrap
    text-[460px] font-bold leading-none
    text-[#ffb45c]/50
    sm:text-[460px] lg:text-[460px]
  "
>
  <span className="relative inline-flex items-center">
    <span className="relative z-10 rotate-[-18deg] font-bold">3</span>

    <span
      className="
        absolute left-[-28px] top-[32%]
        text-[200px] leading-none font-bold
        text-[#ffb45c]/50 rotate-[-12deg]
        lg:left-[-38px] lg:top-[42%]
      "
    >
      ›
    </span>
  </span>
</span>


              <img
                src="/images/workshop-team.webp"
                alt="Workshop team"
                className="relative z-10 mx-auto block h-auto w-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
