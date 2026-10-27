import { openRequestDemo } from "@/lib/openRequestDemo";
import RequestDemoLink from "./RequestDemoLink";
import OpenContactStep from "./OpenContactStep";

const productLinks = [
  {
    label: "Overview",
    href: "#hero",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Roadmap",
    href: "#how-it-works",
  },
];

const moduleLinks = [
  "Job Management",
  "Real-Time Dashboard",
  "Billing & Counter Sales",
  "Multi-Branch System",
  "Inventory & CRM",
  "Staff & Payroll",
];

const companyLinks = [
  {
    label: "About us",
    href: "https://www.albostechnologies.com/about",
  },
  {
    label: "Careers",
    href: "https://www.albostechnologies.com/careers",
  },
  {
    label: "Brand",
    href: "https://www.albostechnologies.com/",
  },
];

function SocialIcon({ children, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow us on ${children}`}
      className="
        flex h-[30px] w-[30px]
        items-center justify-center
        rounded-[5px]
        bg-[#125ac2]
        text-[13px] font-bold !text-white
        transition-colors
        hover:bg-[#1877F2]
      "
    >
      {children}
    </a>
  );
}

export default function Footer() {

  return (
    <footer className="bg-white text-[#111111]">

      {/* =================================
          FIRST FOOTER ROW
      ================================= */}
      <div className="border-t border-[#e8e2da]">
        <div
          className="
            mx-auto
            w-[calc(100%-32px)]
            max-w-[900px]
            py-[28px]

            sm:py-[36px]

            lg:py-[45px]
          "
        >
          <div
            className="
              grid
              grid-cols-2
              gap-[24px]

              lg:grid-cols-[1.3fr_0.7fr_1.2fr_0.8fr]
              lg:gap-[45px]
            "
          >

           
{/* GARAGEPLUS */}
<div className="col-span-2 lg:col-span-1">
  <div className="flex items-center gap-[9px]">
    <img
      src="/images/garageplus-logo.webp"
      alt="Garage Plus logo"
      className="h-[34px] w-[34px] shrink-0 object-contain"
    />

    <div className="text-[18px] font-bold tracking-[-0.5px]">
      GARAGE<span className="text-[#ff8500]">PLUS</span>
    </div>
  </div>

  <p className="mt-[10px] max-w-[150px] text-[13px] leading-[1.6] text-[#777777]">
    Workshop management software for growing garages
  </p>

  {/* DEMO + LOGIN + SIGNUP */}
  <div className="mt-[16px] flex flex-col items-start">
    <RequestDemoLink
      className="
        inline-flex h-[38px] items-center justify-center
        rounded-[5px] bg-white px-[20px] border border-[#ff8500]
        text-[13px] !text-[#ff8500] hover:bg-[#ff8500] hover:!text-white
      "
    >
      Book a Demo
    </RequestDemoLink>

    <a
      href="https://app.garageplus.solutions"
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex h-[34px] items-center justify-center mt-4
        text-[12px] font-medium text-[#333333] hover:!text-[#ff8500]
      " 
    >
      Log In
    </a>

    <a
      href="https://app.garageplus.solutions"
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex h-[34px] items-center justify-center mt-0
        text-[12px] font-medium text-[#333333] hover:!text-[#ff8500]
      "
    >
    Sign Up
    </a>
  </div>
</div>


            {/* PRODUCT */}
            <div>
              <h3 className="text-[13px] font-semibold text-[#ff8500]">
                Product
              </h3>

              <div className="mt-[9px] space-y-[6px]">
                {productLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-[13px] !text-[#777777] hover:!text-[#ff8500]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* MODULES */}
            <div>
              <h3 className="text-[13px] font-semibold text-[#ff8500]">
                Modules
              </h3>

              <div className="mt-[9px] space-y-[6px]">
                {moduleLinks.map((item) => (
                  <a
                    key={item}
                    href="#features"
                    className="block text-[13px] !text-[#777777] hover:!text-[#ff8500]"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <a
                href="#features"
                className="mt-[8px] block text-[13px] !text-[#777777] hover:!text-[#ff8500]"
              >
                All features →
              </a>
            </div>

            {/* SUPPORT */}
            <div>
              <h3 className="text-[13px] font-semibold text-[#ff8500]">
                Support
              </h3>

              <div className="mt-[9px] space-y-[6px]">
                 <OpenContactStep/>

                <a
                  href="mailto:support@garageplus.solutions"
                  className="block break-all text-[13px] !text-[#777777] hover:!text-[#ff8500]"
                >
                  support@garageplus.solutions
                </a>

                <a
                  href="tel:+919307180782"
                  className="block text-[13px] !text-[#777777] hover:!text-[#ff8500]"
                >
                  +91-9307180782
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =================================
          SECOND FOOTER ROW
      ================================= */}
      <div className="border-t border-[#e8e2da] lg:mx-[180px]">
        <div
          className="
            mx-auto
            w-[calc(100%-32px)]
            max-w-[900px]
            py-[25px]

            sm:py-[32px]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-[24px]

              lg:grid-cols-[1.2fr_1.5fr_0.7fr_0.8fr]
              lg:gap-[45px]
            "
          >

            {/* ALBOS */}
            <div className="pt-0">
             <a
  href="https://albostechnologies.com/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit ALBOS Technologies website"
  className="mb-4 inline-flex items-start"
>
  <img
    src="/images/logo-with-text.webp"
    alt="ALBOS Technologies"
    className="block h-auto w-[140px] object-contain object-left-top sm:w-[160px]"
  />
</a>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-[13px] font-semibold text-blue-600">
                Contact
              </h3>

              <p className="mt-[8px] max-w-[170px] text-[13px] leading-[1.6] text-[#777777]">
                Office No. 78, 5th Floor, Kunal Plaza,<br/>
                Near Chinchwad Railway Station,<br/>
                Old Mumbai Pune Highway,
                Chinchwad East, Pune-411019,<br/>
                Maharashtra
              </p>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-[13px] font-semibold text-blue-600">
                Company
              </h3>

              <div className="mt-[13px] space-y-[6px]">
                {companyLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-[13px] !text-[#777777]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* FOLLOW US */}
            <div>
              <h3 className="text-[13px] font-semibold text-blue-600">
                Follow Us
              </h3>

              <div className="mt-[9px] flex gap-[6px]">
                 <SocialIcon href="https://www.facebook.com/albostechnologies/">f</SocialIcon>
                 <SocialIcon href="https://in.linkedin.com/company/albos-technologies-pvt-ltd">in</SocialIcon>
                 <SocialIcon href="https://www.youtube.com/@albostechnologies16">▶</SocialIcon>
                 <SocialIcon href="https://www.instagram.com/albostechnologies/">◎</SocialIcon>
              </div>

              
            </div>

          </div>
        </div>
      </div>

      {/* =================================
          THIRD / BOTTOM ROW
      ================================= */}
      <div className="border-t border-[#e8e2da] lg:mx-[180px]">
        <div
          className="
            mx-auto
            flex
            mt-2
            w-[calc(100%-32px)]
            max-w-[900px]
            flex-row
            gap-24
            py-[18px]

          "
        >
         <a
            href="https://albostechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit ALBOS Technologies website"
            className="inline-flex items-start"
         > 
            <p className="text-[15px] !text-[#777777] whitespace-nowrap">
            © 2026 <span className="text-[#ff8500]">GARAGEPLUS</span> by  
            <span className="text-blue-700 mx-[3px]">ALBOS TECHNOLOGIES</span> 
          </p>
         </a>
          

          <div className="flex flex-nowrap items-center gap-5 whitespace-nowrap ">
            <a href="/privacy-policy" className="text-[15px] !text-[#777777] hover:!text-[#ff8500]">
              Privacy Policy
            </a>

            <a href="/terms-and-conditions" className="text-[15px] !text-[#777777] hover:!text-[#ff8500]">
              Terms & Conditions
            </a>

            <a href="https://www.garageplus.solutions/sitemap.xml" className="text-[15px] !text-[#777777] hover:!text-[#ff8500]">
              Sitemap
            </a>

            <span className="text-[15px] !text-[#777777] hover:!text-[#ff8500]">
             🌎 English  
             <span className="relative -top-[5px] ml-1">
                ⌄
              </span>
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
}