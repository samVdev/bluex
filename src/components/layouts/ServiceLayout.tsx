
import React from 'react';
import Navbar from '@/components/Navbar';
import MaintenanceSection from '@/components/MaintenanceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  service: string;
}

const ServiceLayout = ({ children, title, description, service }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <section className="pt-28 pb-16 bg-gradient-to-r from-bluex-dark via-bluex-primary to-bluex-light text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">{title}</h1>
              <p className="text-xl text-white/90">{description}</p>
            </div>
          </div>
        </section>
        
        {children}
        
        <MaintenanceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceLayout;
