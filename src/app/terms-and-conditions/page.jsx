
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoDrawer from "@/components/RequestDemoDrawer";

const sections = [
  {
    id: "interpretation",
    title: "Interpretation & Definitions",
    content: (
      <>
        <h3>Interpretation</h3>
        <p>
          The words whose initial letters are capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
        <h3>Definitions</h3>
        <p>For the purposes of these Terms and Conditions:</p>
        {[
          ["Affiliate", 'means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.'],
          ["Country", "refers to: Maharashtra, India."],
          ["Application", "means the Garage Plus cloud-based workshop management software used for job cards, garage billing, inventory, staff management, CRM, WhatsApp notifications, and multi-branch operations."],
          ["Company", 'refers to Albos Technologies Pvt Ltd, the designer and developer of Garage Plus, located at Office No. 78, 5th Floor, Kunal Plaza, Near Chinchwad Railway Station, Old Mumbai Pune Highway, Chinchwad East, Pune-411019, Maharashtra.'],
          ["Device", "means any device that can access the Service such as a computer, a cell phone or a digital tablet."],
          ["Service", "refers to the Garage Plus website, web application, mobile application, onboarding, support, and all related workshop management services offered by the Company."],
          ["Terms and Conditions", "also referred to as Terms, mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service."],
          ["Third-party Social Media Service", "means any services or content provided by a third party that may be displayed, included or made available by the Service."],
          ["Website", "refers to Garage Plus, accessible at https://www.albosgarage.com and related application URLs."],
          ["You", "means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."]
        ].map(([term, description]) => (
          <div
            key={term}
            className="rounded-md border border-[#f0e7dd] bg-[#fffaf5] px-3 py-2.5"
          >
            <h4>{term}</h4>
            <p>{description}</p>
          </div>
        ))}
      </>
    ),
  },
  {
    id: "about",
    title: "About Garage Plus",
    content: (
      <>
        <p>
          Garage Plus is an all-in-one workshop management system designed
          for automobile workshops, car service centers, bike repair shops,
          and multi-branch garage businesses.
        </p>
        <p>
          The Service includes job management, garage billing software,
          vehicle service tracking, inventory management, staff and payroll
          tools, CRM, estimates, appointment booking, WhatsApp and SMS
          notifications, and multi-branch reporting.
        </p>
        <p>
          Garage Plus is designed and developed by{" "}
          <a href="https://albostechnologies.com/" target="_blank" rel="noreferrer">
            Albos Technologies Pvt Ltd
          </a>.
        </p>
        <p>
          Garage Plus is provided on a software-as-a-service (SaaS) basis.
          Certain features may require a paid subscription after any free
          trial period. Pricing, plan limits, and feature availability may
          change from time to time as described on the Website or in Your
          account agreement.
        </p>
      </>
    ),
  },
  {
    id: "acknowledgment",
    title: "Acknowledgment",
    content: (
      <>
        <p>
          These are the Terms and Conditions governing the use of this
          Service and the agreement that operates between You and the Company.
          These Terms and Conditions set out the rights and obligations of
          all users regarding the use of the Service.
        </p>
        <p>
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms and Conditions.
          These Terms apply to all visitors, users and others who access or
          use the Service.
        </p>
        <p>
          By accessing or using the Service You agree to be bound by these
          Terms and Conditions. If You disagree with any part of these Terms
          and Conditions then You may not access the Service.
        </p>
        <p>
          You represent that You are at least 18 years of age and authorized
          to register and use Garage Plus on behalf of Yourself or the
          workshop or business You represent. The Company does not permit
          those under 18 to use the Service.
        </p>
        <p>
          Your access to and use of the Service is also conditioned on Your
          acceptance of the Company's{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: (
      <>
        <p>When using Garage Plus, You agree that You will:</p>
        <ul>
          <li>Provide accurate account, workshop, and billing information.</li>
          <li>Maintain the confidentiality of Your login credentials and restrict access to authorized staff only.</li>
          <li>Use the Service only for lawful workshop and business operations.</li>
          <li>Ensure You have the legal right to collect, store, and process customer, vehicle, and staff data entered into the platform.</li>
          <li>Obtain necessary customer consent before sending WhatsApp, SMS, or promotional communications through the Service.</li>
          <li>Comply with applicable tax, GST, invoicing, and record-keeping laws in Your jurisdiction.</li>
        </ul>
        <p>
          You agree not to misuse Garage Plus, including by attempting
          unauthorized access, interfering with platform security, uploading
          malicious code, reselling the Service without permission, or using
          the Service for fraudulent or unlawful activity.
        </p>
        <p>
          Garage Plus provides tools to help generate invoices, estimates,
          and reports, but You remain solely responsible for the accuracy of
          Your business records, tax calculations, and compliance obligations.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: (
      <>
        <p>
          Our Service may contain links to third-party websites or services
          that are not owned or controlled by the Company.
        </p>
        <p>
          The Company has no control over, and assumes no responsibility for,
          the content, privacy policies, or practices of any third-party
          websites or services. You further acknowledge and agree that the
          Company shall not be responsible or liable, directly or indirectly,
          for any damage or loss caused or alleged to be caused by or in
          connection with the use of or reliance on any such content, goods
          or services available on or through any such websites or services.
        </p>
        <p>
          We strongly advise You to read the terms and conditions and privacy
          policies of any third-party websites or services that You visit.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <>
        <p>
          We may terminate or suspend Your access immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if You breach these Terms and Conditions.
        </p>
        <p>Upon termination, Your right to use the Service will cease immediately.</p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          Notwithstanding any damages that You might incur, the entire
          liability of the Company and any of its suppliers under any
          provision of these Terms and Your exclusive remedy shall be limited
          to the amount actually paid by You through the Service in the
          twelve (12) months preceding the claim, or INR 8,500, whichever is
          greater, if You have not purchased anything through the Service.
        </p>
        <p>
          To the maximum extent permitted by applicable law, in no event
          shall the Company or its suppliers be liable for special,
          incidental, indirect, or consequential damages, including loss of
          profits, loss of data, business interruption, personal injury or
          loss of privacy arising from the use of or inability to use the
          Service.
        </p>
        <p>
          Some jurisdictions do not allow certain warranty exclusions or
          liability limitations. In those jurisdictions, the limitations
          apply only to the extent permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    content: (
      <>
        <h3>"AS IS" and "AS AVAILABLE"</h3>
        <p>
          The Service is provided to You "AS IS" and "AS AVAILABLE" and with
          all faults and defects without warranty of any kind.
        </p>
        <p>
          To the maximum extent permitted under applicable law, the Company
          expressly disclaims all warranties, whether express, implied,
          statutory or otherwise, with respect to the Service, including
          implied warranties of merchantability, fitness for a particular
          purpose, title and non-infringement.
        </p>
        <p>
          The Company does not warrant that the Service will meet Your
          requirements, achieve intended results, work with other systems,
          operate without interruption, meet performance standards or be
          error free, or that errors will be corrected.
        </p>
        <p>
          The Company does not warrant the accuracy, reliability or currency
          of information provided through the Service, or that its servers
          and communications are free from harmful components.
        </p>
        <p>
          Some jurisdictions do not allow certain warranty exclusions or
          limitations on statutory rights. In such cases, the exclusions
          and limitations apply to the greatest extent permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <>
        <p>
          These Terms shall be governed by and construed in accordance with
          the laws of India, without regard to conflict of law principles.
          Your use of Garage Plus may also be subject to other local, state,
          national, or international laws applicable to You or Your workshop
          operations.
        </p>
        <p>
          Any disputes arising out of or relating to these Terms or the
          Service shall be subject to the exclusive jurisdiction of the
          courts located in Pune, Maharashtra, India, unless otherwise
          required by applicable consumer protection law.
        </p>
      </>
    ),
  },
  {
    id: "disputes",
    title: "Disputes",
    content: (
      <p>
        If You have any concern or dispute about the Service, You agree to
        first try to resolve the dispute informally by contacting the Company.
      </p>
    ),
  },
  {
    id: "eu-users",
    title: "EU Users",
    content: (
      <p>
        If You are a European Union consumer, you will benefit from any
        mandatory provisions of the law of the country in which You are
        resident.
      </p>
    ),
  },
  {
    id: "us-compliance",
    title: "US Compliance",
    content: (
      <p>
        You represent and warrant that (i) You are not located in a country
        that is subject to the United States government embargo, or that has
        been designated by the United States government as a "terrorist
        supporting" country, and (ii) You are not listed on any United States
        government list of prohibited or restricted parties.
      </p>
    ),
  },
  {
    id: "severability",
    title: "Severability",
    content: (
      <>
        <h3>Severability</h3>
        <p>
          If any provision of these Terms is held to be unenforceable or
          invalid, such provision will be changed and interpreted to
          accomplish the objectives of that provision to the greatest extent
          possible under applicable law, and the remaining provisions will
          continue in full force and effect.
        </p>
        <h3>Waiver</h3>
        <p>
          Except as provided herein, the failure to exercise a right or to
          require performance of an obligation shall not affect the ability
          to exercise that right or require performance at any time
          thereafter. A waiver of a breach does not constitute a waiver of
          any subsequent breach.
        </p>
      </>
    ),
  },
  {
    id: "translation",
    title: "Translation",
    content: (
      <p>
        These Terms and Conditions may have been translated if We have made
        them available to You on our Service. You agree that the original
        English text shall prevail in the case of a dispute.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    content: (
      <p>
        We reserve the right, at Our sole discretion, to modify or replace
        these Terms at any time. If a revision is material, We will make
        reasonable efforts to provide at least 30 days' notice prior to any
        new terms taking effect. What constitutes a material change will be
        determined at Our sole discretion.
        By continuing to access or use Our Service after those revisions
        become effective, You agree to be bound by the revised terms. If You
        do not agree to the new terms, in whole or in part, please stop using
        the website and the Service.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <div className="rounded-lg bg-[#fff5e9] p-4">
        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
        <p>Garage Plus (designed &amp; developed by Albos Technologies Pvt Ltd)</p>
        <p>
          Office No. 78, 5th Floor, Kunal Plaza, Near Chinchwad Railway
          Station, Old Mumbai Pune Highway, Chinchwad East, Pune-411019,
          Maharashtra.
        </p>
        <p>
          Developer:{" "}
          <a href="https://albostechnologies.com/" target="_blank" rel="noreferrer">
            https://albostechnologies.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a href="https://www.albosgarage.com" target="_blank" rel="noreferrer">
            https://www.albosgarage.com
          </a>
        </p>
        <p>Email: contact@albosgarage.com</p>
      </div>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
          <aside className="h-fit rounded-lg border border-[#eee3d8] bg-[#fffaf5] p-4 lg:sticky lg:top-5">
            <p className="mb-3 text-[12px] font-semibold text-[#777]">
              On this page
            </p>

            <nav className="flex flex-col gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-[11px] leading-5 text-[#555] transition hover:text-[#ff8500]"
                >
                  {section.title}
                </a>
              ))}
            </nav>

            <p className="mt-4 border-t border-[#eee3d8] pt-3 text-[11px] text-[#999]">
              Legal
            </p>
          </aside>

          <article className="min-w-0 text-[12px] leading-[1.75] text-[#444]">
            <h1 className="border-b border-[#eee] pb-3 text-[28px] font-bold leading-tight text-[#111]">
              Terms and Conditions
            </h1>

            <p className="mt-3 text-[11px] text-[#777]">
              Last updated: July 10, 2026
            </p>

            <p className="mt-4">
              Please read these Terms and Conditions carefully before using
              Garage Plus, our workshop management system and garage billing
              software. These Terms govern Your access to and use of the
              Garage Plus website, application, and related services designed
              and developed by Albos Technologies Pvt Ltd.
            </p>

            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-6 border-b border-[#eee] py-5 last:border-b-0"
              >
                <h2 className="mb-3 text-[16px] font-bold leading-snug text-[#111]">
                  {section.title}
                </h2>

                <div className="legal-content space-y-3">
                  {section.content}
                </div>
              </section>
            ))}

            <p className="mt-5">
              Related:{" "}
              <a href="/privacy-policy" className="text-[#ff8500] hover:underline">
                Privacy Policy
              </a>
            </p>
          </article>
        </div>
      </main>

      <Footer />
      <RequestDemoDrawer />

    
    </>
  );
}
