import Hero from '@/components/home/Hero';
import BrandIntro from '@/components/home/BrandIntro';
import CottageExperience from '@/components/home/CottageExperience';
import CottagesPreview from '@/components/home/CottagesPreview';
import SlowEvenings from '@/components/home/SlowEvenings';
import WinterSection from '@/components/home/WinterSection';
import ExploreKalamSection from '@/components/home/ExploreKalamSection';
import QuietMomentsGallery from '@/components/home/QuietMomentsGallery';
import BookingCTA from '@/components/home/BookingCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <CottageExperience />
      <CottagesPreview />
      <SlowEvenings />
      <WinterSection />
      <ExploreKalamSection />
      <QuietMomentsGallery />
      <BookingCTA />
    </>
  );
}
