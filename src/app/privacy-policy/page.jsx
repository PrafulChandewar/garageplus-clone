
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoDrawer from "@/components/RequestDemoDrawer";

const sections = [
  {
    id: "interpretation",
    title: "Interpretation and Definitions",
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
        <p>For the purposes of this Privacy Policy:</p>
        {[
          ["Account", "means a unique account created for You to access our Service or parts of our Service."],
          ["Affiliate", "means an entity that controls, is controlled by, or is under common control with a party."],
          ["Application", "means the Garage Plus cloud-based workshop management software, including web and mobile interfaces used to manage job cards, billing, inventory, staff, CRM, and multi-branch operations."],
          ["Company", "refers to Albos Technologies Pvt Ltd, the designer and developer of Garage Plus, located at Office No. 78, 5th Floor, Kunal Plaza, Near Chinchwad Railway Station, Old Mumbai Pune Highway, Chinchwad East, Pune-411019, Maharashtra."],
          ["Cookies", "are small files placed on Your computer, mobile device or other device by a website, containing details of Your browsing history."],
          ["Country", "refers to Maharashtra, India."],
          ["Device", "means any device that can access the Service such as a computer, cell phone or digital tablet."],
          ["Personal Data", "is any information that relates to an identified or identifiable individual."],
          ["Service", "refers to the Garage Plus website, web application, mobile application, and related workshop management services."],
          ["Service Provider", "means any person or company that processes data on behalf of the Company."],
          ["Usage Data", "refers to data collected automatically through use of the Service or its infrastructure."],
          ["Website", "refers to Garage Plus and its related application URLs."],
          ["You", "means the individual or legal entity accessing or using the Service."]
        ].map(([term, description]) => (
          <div key={term} className="rounded-md border border-[#f0e7dd] bg-[#fffaf5] px-3 py-2.5">
            <h4>{term}</h4>
            <p>{description}</p>
          </div>
        ))}
      </>
    ),
  },
  {
    id: "collecting-data",
    title: "Collecting and Using Your Personal Data",
    content: (
      <>
        <h3>Types of Data Collected</h3>
        <h3>Personal Data</h3>
        <p>
          While using Garage Plus, We may ask You to provide personally
          identifiable information that can be used to contact or identify You.
          This may include:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number and WhatsApp number</li>
          <li>Workshop or business name</li>
          <li>Business address and branch location details</li>
          <li>GSTIN or other tax registration details, where applicable</li>
          <li>Account login credentials</li>
          <li>Usage Data</li>
        </ul>
        <h3>Usage Data</h3>
        <p>
          Usage Data is collected automatically when using the Service. It may
          include Your device IP address, browser type and version, pages
          visited, time and date of Your visit, time spent on pages, unique
          device identifiers and diagnostic data. Mobile device and browser
          information may also be collected.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Tracking Technologies and Cookies",
    content: (
      <>
        <p>
          We use Cookies and similar tracking technologies to track activity
          on Our Service and store certain information. These technologies
          may include beacons, tags, scripts and browser cookies.
        </p>
        <p>
          You can instruct Your browser to refuse Cookies or indicate when a
          Cookie is being sent. However, some parts of the Service may not
          function if Cookies are refused.
        </p>
        <p>
          Persistent Cookies remain on Your device when You go offline, while
          Session Cookies are deleted when You close Your browser.
        </p>
      </>
    ),
  },
  {
    id: "workshop-data",
    title: "Workshop and Customer Data",
    content: (
      <>
        <p>
          When You use Garage Plus to run Your workshop, You may enter or
          upload information about customers, vehicles, staff, suppliers,
          job cards, invoices, inventory and payments. This may include:
        </p>
        <ul>
          <li>Customer names, phone numbers, email addresses and communication history</li>
          <li>Vehicle registration numbers, service history and job card details</li>
          <li>Staff names, roles, attendance and payroll-related information</li>
          <li>Billing, GST, estimate and payment records</li>
          <li>Inventory, supplier and order management data</li>
        </ul>
        <p>
          You are responsible for ensuring You have the lawful right to
          collect and process this information and that You comply with
          applicable privacy and data protection laws.
        </p>
      </>
    ),
  },
  {
    id: "use-data",
    title: "Use of Your Personal Data",
    content: (
      <>
        <p>The Company may use Personal Data for the following purposes:</p>
        <ul>
          <li>To provide and maintain the Service.</li>
          <li>To manage Your account, registration and user permissions.</li>
          <li>To deliver subscriptions, trials, onboarding and support.</li>
          <li>To contact You about account activity, service updates and security alerts.</li>
          <li>To send job status updates, estimates, invoices and appointment reminders when enabled.</li>
          <li>To provide product news and service information, unless You opt out.</li>
          <li>To manage demo requests, support tickets and data access or deletion requests.</li>
          <li>For business transfers, analytics, fraud prevention and platform security.</li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "Retention of Your Personal Data",
    content: (
      <p>
        The Company will retain Your Personal Data only for as long as is
        necessary for the purposes set out in this Privacy Policy, to comply
        with legal obligations, resolve disputes and enforce agreements.
        Usage Data is generally retained for a shorter period unless needed
        for security, service improvements or legal obligations.
      </p>
    ),
  },
  {
    id: "transfer",
    title: "Transfer of Your Personal Data",
    content: (
      <p>
        Your information may be processed at the Company's operating offices
        and other locations where processing parties are located. Your
        information may therefore be transferred to computers outside Your
        state, province or country. The Company will take reasonable steps
        to ensure that Your data is treated securely and in accordance with
        this Privacy Policy.
      </p>
    ),
  },
  {
    id: "delete-data",
    title: "Delete Your Personal Data",
    content: (
      <p>
        You may request access to, correction of or deletion of Personal Data
        that You have provided. If You have an account, You may be able to
        manage information through account settings. The Company may need to
        retain certain information where required by law or where another
        lawful basis applies.
      </p>
    ),
  },
  {
    id: "disclosure",
    title: "Disclosure of Your Personal Data",
    content: (
      <>
        <h3>Business Transactions</h3>
        <p>
          If the Company is involved in a merger, acquisition or asset sale,
          Your Personal Data may be transferred. Notice will be provided
          before the information becomes subject to a different Privacy Policy.
        </p>
        <h3>Law enforcement</h3>
        <p>
          The Company may disclose Personal Data where required by law or in
          response to valid requests by public authorities.
        </p>
        <h3>Other legal requirements</h3>
        <p>The Company may disclose information when necessary to:</p>
        <ul>
          <li>Comply with a legal obligation</li>
          <li>Protect and defend Company rights or property</li>
          <li>Prevent or investigate possible wrongdoing</li>
          <li>Protect the personal safety of users or the public</li>
          <li>Protect against legal liability</li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "Security of Your Personal Data",
    content: (
      <p>
        The security of Your Personal Data is important to Us. Garage Plus
        uses commercially reasonable technical and organizational safeguards,
        including encryption in transit, access controls and regular backups.
        However, no method of transmission over the Internet or electronic
        storage is 100% secure, and absolute security cannot be guaranteed.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: (
      <p>
        Garage Plus is a business software platform intended for workshop
        owners, managers and staff aged 18 and above. The Service does not
        knowingly collect personally identifiable information from anyone
        under 13. If You believe a child has provided Personal Data, please
        contact Us so appropriate steps can be taken.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Links to Other Websites",
    content: (
      <p>
        Our Service may contain links to websites not operated by Us. If You
        click a third-party link, You will be directed to that third party's
        site. We strongly advise You to review every site's Privacy Policy.
        We have no control over and assume no responsibility for third-party
        content, privacy policies or practices.
      </p>
    ),
  },
  {
    id: "policy-changes",
    title: "Changes to this Privacy Policy",
    content: (
      <p>
        We may update Our Privacy Policy from time to time by posting a new
        version on this page. We may notify You by email or a prominent notice
        before changes become effective and update the date at the top.
        You are advised to review this page periodically.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: (
      <div className="rounded-lg bg-[#fff5e9] p-4">
        <p>
          If you have any questions about this Privacy Policy or how Garage
          Plus handles Your data, You can contact us:
        </p>
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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-3 text-[11px] text-[#777]">
              Last updated: July 10, 2026
            </p>

            <p className="mt-4">
              This Privacy Policy describes how Garage Plus - our workshop
              management system, garage billing software, and vehicle service
              tracking platform - collects, uses, stores, and protects
              information when You visit our website or use our Service.
            </p>

            <p className="mt-3">
              Garage Plus is designed and developed by Albos Technologies
              Pvt Ltd. We use Your Personal Data to provide, operate, and
              improve the Service. By using Garage Plus, You agree to the
              collection and use of information in accordance with this
              Privacy Policy.
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
              <a
                href="/terms-and-conditions"
                className="text-[#ff8500] hover:underline"
              >
                Terms and Conditions
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
