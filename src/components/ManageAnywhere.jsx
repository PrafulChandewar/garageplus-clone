"use client";

import Link from "next/link";
import RequestDemoLink from "./RequestDemoLink";

export default function ManageAnywhere() {
  return (
    <section
      className="
        bg-[#fff0df]
        px-0
        py-[18px]
        sm:py-[30px]
        lg:py-[45px]
      "
    >
      <div
        className="
          mx-auto
          w-[410px]
          sm:w-[455px]
          lg:w-[660px]
        "
      >

        {/* =========================
            IMAGE FIRST
        ========================= */}

        <div
          className="
            flex
            justify-center
            overflow-hidden
            rounded-[6px]
            sm:rounded-[9px]
            lg:rounded-[12px]
          "
        >
          <img
            src="/images/manage-anywhere.webp"
            alt="Garage Plus running on a laptop and mobile phones"
            className="
              block
              h-auto
              w-full
              object-contain
            "
          />
        </div>


        {/* =========================
            MANAGE FROM ANYWHERE
        ========================= */}

        <div
          className="
            mt-[22px]
            text-center
            sm:mt-[28px]
            lg:mt-[36px]
          "
        >
          <h2
            className="
              text-[24px]
              font-bold
              leading-[1.05]
              tracking-[-0.2px]
              text-[#ff7200]

              sm:text-[28px]

              lg:text-[36px]
            "
          >
            Manage from anywhere
          </h2>

          <p
            className="
              mx-auto
              mt-[4px]
              max-w-[135px]
              text-[12px]
              leading-[1.4]
              text-[#555555]

              sm:mt-[6px]
              sm:max-w-[240px]
              sm:text-[12px]

              lg:mt-[8px]
              lg:max-w-[430px]
              lg:text-[15px]
              lg:leading-[1.5]
            "
          >
            Access your workshop no matter what device you use.
          </p>


          {/* =========================
              BUTTONS
          ========================= */}

          <div
            className="
              mt-[12px]
              flex
              flex-row
              flex-nowrap
              items-center
              justify-center
              gap-[6px]
              whitespace-nowrap

              sm:mt-[15px]
              sm:flex-row
              sm:gap-[8px]

              lg:mt-[18px]
              lg:gap-[10px]
            "
          >
            <RequestDemoLink
              className="
                inline-flex
                h-[36px]
                min-w-[70px]
                items-center
                justify-center
                rounded-[5px]
                bg-[#ff8500]
                px-[15px]
                text-[10px]
                leading-none
                !text-white
                transition
                hover:bg-[#ed7600]

                sm:h-[36px]
                sm:min-w-[105px]
                sm:px-[18px]
                sm:text-[12px]

                lg:h-[44px]
                lg:min-w-[175px]
                lg:rounded-[5px]
                lg:px-[21px]
                lg:text-[15px]
              "
            >
              Book Your Demo
              
<span
  className="
    mx-[5px]
    inline-flex
    h-[15px]
    w-[15px]
    items-center
    justify-center
    rounded-full
    border
    border-current
    text-[6px]
    leading-none
    lg:h-[17px]
    lg:w-[18px]
    lg:text-[12px]
  "
>
  <strong className="block font-normal leading-none scale-60 lg:scale-70">↓</strong>
</span>


            </RequestDemoLink>

              
<Link
  href="/login"
  className="
    inline-flex
    h-[36px]
    min-w-[70px]
    items-center
    justify-center
    rounded-[5px]
    border
    border-[#ff8500]
    bg-transparent
    px-[15px]
    text-[12px]
    leading-none
    !text-[#ff7200]
    transition
    hover:bg-[#ff8500]
    hover:!text-white

    sm:h-[36px]
    sm:min-w-[105px]
    sm:px-[18px]
    sm:text-[15px]

    lg:h-[44px]
    lg:min-w-[175px]
    lg:rounded-[5px]
    lg:px-[21px]
    lg:text-[18px]
  "
>
  Create a New Account
</Link>

          </div>
        </div>

      </div>
    </section>
  );
}