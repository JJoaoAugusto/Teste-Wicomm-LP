import { AboutSection } from "./AboutSection";
import { AddressSection } from "./AddressSection";
import { ComissionSection } from "./ComissionSection";
import { FaqSection } from "./FaqSection";
import { ScheduleSection } from "./ScheduleSection";
import { SpeakerSection } from "./SpeakerSection";
import { SponsorSection } from "./SponsorSection";
import { StyledMain } from "./style";

export const Main = () => {
  return (
    <StyledMain>
      <AboutSection />
      <SpeakerSection />
      <ScheduleSection />
      <ComissionSection />
      <FaqSection />
      <AddressSection />
      <SponsorSection />
    </StyledMain>
  );
};
