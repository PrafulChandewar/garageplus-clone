
import RequestDemoLink from "./RequestDemoLink";

export default function FinalCTA() {
  const benefits = [
    "Faster job turnaround",
    "Fewer billing errors",
    "Better customer follow ups",
  ];

  return (
    <section
      id="demo"
      className="bg-white px-4 py-8 sm:py-12 lg:py-[60px]"
    >
      <div
        className="
          mx-auto flex w-full max-w-[1000px] flex-col
          overflow-hidden rounded-2xl bg-[#fff0df]
          sm:rounded-[22px]
          lg:flex-row lg:items-center
        "
      >
        {/* LEFT — MASCOT IMAGE */}
        <div
          className="
            flex w-full items-end justify-center
            bg-[#fff0df] px-5 pt-7
            sm:px-8 sm:pt-9
            lg:w-[43%] lg:self-stretch lg:px-6 lg:pt-8
          "
        >
          <img
            src="/images/workshop-character.png"
            alt="Garage Plus mascot holding a tablet"
            className="
              block h-[700px]] w-[190px] max-w-full object-contain
              sm:w-[250px]
              lg:w-full lg:max-w-[560px]
            "
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div
          className="
            w-full px-5 pb-7 pt-5 text-center
            sm:px-8 sm:pb-9 sm:pt-6
            lg:w-[57%] lg:px-10 lg:py-10 lg:text-left
            xl:px-12
          "
        >
          <h2
            className="
              mx-auto max-w-[480px]
              text-[25px] font-bold leading-[1.12]
              tracking-[-0.8px] text-[#ff8500]
              sm:text-[32px] sm:leading-[1.15]
              lg:mx-0 lg:max-w-[500px]
              lg:text-[38px] xl:text-[42px]
            "
          >
            Take the guesswork out of running your workshop.
          </h2>

          {/* BENEFITS — TWO ON FIRST ROW, ONE BELOW */}
          <div
            className="
              mx-auto mt-5 grid max-w-[460px]
              grid-cols-2 gap-x-4 gap-y-3
              text-left
              lg:mx-0 lg:mt-6
            "
          >
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="
                  flex min-w-0 items-center gap-2
                  text-[11px] font-medium leading-[1.45]
                  text-[#444444]
                  sm:text-[13px] lg:text-[14px]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-[7px] w-[7px] shrink-0 rounded-full
                    bg-[#ff8500]
                  "
                />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <RequestDemoLink
            className="
              mt-6 inline-flex min-h-[42px]
              items-center justify-center rounded-[8px]
              bg-[#ff8500] px-7 py-3
              text-[13px] font-semibold leading-none !text-white
              transition-colors hover:bg-[#ed7600]
              sm:mt-7 sm:min-h-[46px] sm:px-8 sm:text-[14px]
              lg:mt-8
            "
          >
            Request a Demo
          </RequestDemoLink>
        </div>
      </div>
    </section>
  );
}
