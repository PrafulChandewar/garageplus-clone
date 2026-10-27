import { openRequestDemo } from "@/lib/openRequestDemo";

export default function JobManagement() {
  return (
    <section
      id="job-management"
      className="bg-[#fff0df] px-3 pb-10 sm:px-6 sm:pb-20 lg:px-10 lg:pb-28"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[8px] sm:rounded-[24px]">
          <img
            src="/images/job-management.webp"
            alt="Garage Plus Job Management"
            className="block h-auto w-full"
          />
        </div>

        {/* CONTENT */}
        <div className="mt-5 max-w-[700px] sm:mt-10">

          <h2 className="text-[14px] font-semibold leading-[1.1] tracking-[-0.3px] text-[#111111] sm:text-4xl lg:text-5xl">
            Job Management
          </h2>

          <p className="mt-3 text-[7px] leading-[1.55] text-[#555555] sm:mt-5 sm:text-base sm:leading-7">
            Create, assign, and track job cards from check-in to completion.
            Monitor technician workload and repair status in real time.
          </p>

          <div className="mt-4 sm:mt-7">
            <a
              onClick={openRequestDemo}
              className="
                inline-flex
                h-[22px]
                items-center
                justify-center
                rounded-[4px]
                bg-[#ff7a00]
                px-4
                text-[7px]
                font-semibold
                text-white
                transition
                hover:bg-[#ed7000]
                sm:h-[44px]
                sm:rounded-full
                sm:px-6
                sm:text-sm
              "
            >
              Book Your Demo
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}