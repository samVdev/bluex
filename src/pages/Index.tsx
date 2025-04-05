
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import MaintenanceSection from '@/components/MaintenanceSection';
import PortfolioSection from '@/components/PortfolioSection';
import ProcessSection from '@/components/ProcessSection';
import AboutUsSection from '@/components/AboutUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <MaintenanceSection />
        <PortfolioSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
