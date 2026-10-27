
import RequestDemoLink from "./RequestDemoLink";

export default function Hero() {
  return (
    <section id="hero" className="relative h-[700px] overflow-hidden bg-white lg:bg-gradient-to-b from-[#fff0df] from-10% to-white to-30% sm:h-[820px] lg:h-[950px]">
      {/* =========================
          LEFT ORANGE SHAPE
          ONLY TOP-RIGHT CORNER CURVED
      ========================== */}
      <div
        className="
    pointer-events-none
    absolute
    left-[-250px]
    top-[58px]
    z-0
    hidden
    lg:block
    lg:h-[730px]
    lg:w-[620px]
    lg:rounded-tr-[300px]
    lg:rounded-br-[0px]
    lg:bg-gradient-to-b
    lg:from-[#ff9418]
    lg:from-50%
    lg:to-white
  "
      />

      {/* =========================
          RIGHT ORANGE SHAPE
          ONLY TOP-LEFT CORNER CURVED
      ========================== */}
      <div
        className="
    pointer-events-none
    absolute
    right-[-250px]
    top-[58px]
    z-0
    hidden
    lg:block
    lg:h-[730px]
    lg:w-[620px]
    lg:rounded-tl-[300px]
    lg:rounded-bl-[0px]
    lg:bg-gradient-to-b
    lg:from-[#ff9418]
    lg:from-50%
    lg:to-white
  "
      />

      {/* =========================
          CENTER SOFT CREAM AREA
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[65px]
          z-0
          h-[220px]
          w-[380px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(255,231,203,0.72)_0%,rgba(255,247,237,0.35)_48%,rgba(255,255,255,0)_78%)]

          sm:top-[85px]
          sm:h-[300px]
          sm:w-[620px]

          lg:top-[105px]
          lg:h-[380px]
          lg:w-[850px]
        "
      />

      {/* =========================
          HERO TEXT
      ========================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1000px]
          px-5
          pt-[18px]
          text-center

          sm:px-8
          sm:pt-[25px]

          lg:px-10
          lg:pt-[30px]
        "
      >
        <h1
          className="
            mx-auto
            mt-[20px]
            mb-[20px]
            max-w-[390px]
            text-[40px]
            font-bold
            leading-[1.1]
            tracking-[-1px]
            text-[#ff7200]

            sm:mt-[40px]
            sm:mb-[23px]
            sm:max-w-[620px]
            sm:text-[45px]

            lg:mt-[46px]
            lg:mb-[26px]
            lg:max-w-[720px]
            lg:text-[55px]
          "
        >
          The All-in-One Workshop
          <br />
          Management System
        </h1>

        <p
          className="
            mx-auto
            mt-[10px]
            max-w-[470px]
            text-[8px]
            leading-[1.35]
            text-[#555555]

            sm:max-w-[560px]
            sm:text-[10px]

            lg:max-w-[700px]
            lg:text-[15px]
          "
        >
          Manage job cards, GST billing, inventory, customers, staff, payments,
          and multiple branches all from one easy-to-use platform built for
          modern Indian garages
        </p>

        <div className="mt-[11px] flex justify-center">
          <RequestDemoLink 
            className="
              inline-flex
              mt-[10px]
              h-[45px]
              items-center
              justify-center
              rounded-[10px]
              bg-[#ff8500]
              px-[30px]
              text-[18px]
              font-semibold
              !text-white

              sm:h-[45px]
              sm:px-[30px]
              sm:text-[18px]

              lg:h-[45px]
              lg:px-[30px]
              lg:text-[18px]
            "
          >
            Request a Demo
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
                transition-transform
                duration-300

                group-hover:translate-x-[3px]

                sm:h-[28px]
                sm:w-[28px]

                lg:h-[20px]
                lg:w-[20px]
                lg:text-[12px]

              "
            >
              →
            </span>
          </RequestDemoLink>
        </div>
      </div>

      {/* =========================
          HERO ARTWORK
      ========================== */}
      <div
        className="
    relative
    z-10
    m-3
    mx-auto
    mt-[40px]
    h-[260px]
    w-full
    max-w-[1050px]

    sm:mt-[28px]
    sm:h-[330px]

    lg:mt-[35px]
    lg:h-[500px]
  "
      >
        {/* CHARACTER / CHAT IMAGE */}
        <img
          src="/images/garage-plus-character.webp"
          alt="Garge Plus Character"
          className="
  absolute
  left-[-10px]
  top-[90px]
  z-10
  w-[155px]

  sm:left-[45px]
  sm:top-[160px]
  sm:w-[145px]

  lg:left-[40px]
  lg:top-[195px]
  lg:w-[300px]
"
        />

        {/* HERO DASHBOARD */}
        <img
          src="/images/home-cover.webp"
          alt="Garage Plus Workshop Management"
          className="
  absolute
  shadow-zinc-400
  right-[18px]
  top-[65px]
  z-10
  w-[287px]

  sm:right-[15px]
  sm:top-[10px]
  sm:w-[430px]

  lg:right-[25px]
  lg:top-[15px]
  lg:w-[700px]
  rounded-2xl
  shadow-2xl
"
        />
      </div>
    </section>
  );
}
