import { Header } from "../../components/Header";
import { AboutSection } from "./AboutSection";
import { ComissionSection } from "./ComissionSection";
import { ScheduleSection } from "./ScheduleSection";
import { SpeakerSection } from "./SpeakerSection";

export const HomePage = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <SpeakerSection />
      <ScheduleSection />
      <ComissionSection />
    </>
  );
};
