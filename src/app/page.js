import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkshopHub from "@/components/WorkshopHub";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ManageAnywhere from "@/components/ManageAnywhere";
import HowItWorks from "@/components/HowItWorks";
import GrowingWorkshops from "@/components/GrowingWorkshops";
import CustomerSupport from "@/components/CustomerSupport";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Character from "@/components/Character";
import RequestDemoDrawer from "@/components/RequestDemoDrawer";
import FAQtop from "@/components/FAQtop";
import ContactDrawer from "@/components/ContactDrawer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Character/>
      <WorkshopHub />
      <Features />
      <Testimonials />
      <FAQtop/>
      <FAQ />
      <ManageAnywhere />
      <HowItWorks />
      <GrowingWorkshops />
      <CustomerSupport/>
      <FinalCTA />
      <Footer />

      <RequestDemoDrawer/>
      <ContactDrawer/>
      
    </main>
  );
}