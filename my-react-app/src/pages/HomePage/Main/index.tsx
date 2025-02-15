import { AboutSection } from "./AboutSection";
import { AddressSection } from "./AddressSection";
import { ComissionSection } from "./ComissionSection";
import { FaqSection } from "./FaqSection";
import { ScheduleSection } from "./ScheduleSection";
import { SpeakersSection } from "./SpeakersSection";
import { SponsorsSection } from "./SponsorSection";
import { StyledMain } from "./style";

export const Main = () => {
  return (
    <StyledMain>
      <AboutSection />
      <SpeakersSection />
      <ScheduleSection />
      <ComissionSection />
      <FaqSection />
      <AddressSection />
      <SponsorsSection />
    </StyledMain>
  );
};
