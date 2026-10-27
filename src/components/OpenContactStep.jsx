"use client";

export default function OpenContactStep() {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new Event("open-contact-form"));
      }}
      className="block text-left text-[13px] text-[#777777] hover:text-[#ff8500]"
    >
      Contact
    </button>
  );
}