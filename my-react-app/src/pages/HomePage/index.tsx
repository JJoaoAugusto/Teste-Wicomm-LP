import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AboutSection } from "./AboutSection";
import { AddressSection } from "./AddressSection";
import { ComissionSection } from "./ComissionSection";
import { FaqSection } from "./FaqSection";
import { ScheduleSection } from "./ScheduleSection";
import { SpeakerSection } from "./SpeakerSection";
import { SponsorSection } from "./SponsorSection";

export const HomePage = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <SpeakerSection />
      <ScheduleSection />
      <ComissionSection />
      <FaqSection />
      <AddressSection />
      <SponsorSection />
      <Footer />
    </>
  );
};
