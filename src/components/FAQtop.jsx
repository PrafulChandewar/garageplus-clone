
export default function FAQtop() {
  return (
    <section
      className=" mt-[50px] px-8
        relative isolate overflow-hidden bg-white
        h-0 lg:h-[328px]
      "
    >
      {/* SOLID BOXES — FIRST 3 ROWS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-0 top-0 z-0
          hidden h-[246px] w-full overflow-hidden lg:block
        "
      >
        {/* ROW 1 */}
        <span className="absolute right-[82px] top-0 h-[82px] w-[82px] bg-[#ff8500]/15" />

        {/* ROW 2 */}
        <span className="absolute left-[82px] top-[82px] h-[82px] w-[82px] bg-[#ff8500]/10" />
        <span className="absolute right-[328px] top-[82px] h-[82px] w-[82px] bg-[#ff8500]/15" />

        {/* ROW 3 */}
        <span className="absolute left-[164px] top-[164px] h-[82px] w-[82px] bg-[#ff8500]/15" />
       
      </div>

      
{/* GRID — ROW 4 (SAME AS YOUR CODE) */}
<div
  aria-hidden="true"
  className="
    pointer-events-none absolute top-[246px] z-0 bottom-0 left-[82px]
    hidden h-[82px] w-[164px] lg:block bg-[#fff0df]
    [background-image:linear-gradient(to_right,rgba(255,133,0,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,133,0,0.25)_1px,transparent_1px)]
    [background-size:82px_82px]
  "
/>

<div
  aria-hidden="true"
  className="
    pointer-events-none absolute top-[246px] z-0 bottom-0 left-[492px]
    hidden h-[82px] w-[738px] lg:block bg-[#fff0df]
    [background-image:linear-gradient(to_right,rgba(255,133,0,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,133,0,0.25)_1px,transparent_1px)]
    [background-size:82px_82px]
  "
/>

    </section>
  );
}
