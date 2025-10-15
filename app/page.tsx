import HeroSection from '@/components/home/HeroSection';
import ServicesHero from '@/components/home/ServicesHero';
import ProjectsHero from '@/components/home/ProjectsHero';
import ProjectGallery from '@/components/home/ProjectGallery';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesHero />
      <ProjectsHero />
      <ProjectGallery />
      <ContactSection />
      <Footer />
    </main>
  );
}
