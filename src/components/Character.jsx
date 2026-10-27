export default function Character() {
  return (
    <section
      className="
        relative
        z-20
        w-[570px]
        mt-[155px]
        px-[40px]
        flex
        h-[155px]
        items-end
        justify-center
        bg-white

        sm:mt-24
        sm:w-[440px]
        sm:h-[330px]
        
        lg:w-[1260px]
        lg:h-[445px]
      "
    >
      <img
        src="/images/abovewscharacter.webp"
        alt=""
        className="
          relative
          z-30
          block
          items-center
          justify-center
          h-[280px]
          w-[175px]
          max-w-[155px]

          sm:w-[190px]
          sm:max-w-[190px]
          
          lg:h-[420px]
          lg:w-[385px]
          lg:max-w-[385px]
        "
      />
    </section>
  );
}