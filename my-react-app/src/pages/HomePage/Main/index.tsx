import { AboutSection } from "./AboutSection";
import { AddressSection } from "./AddressSection";
import { CommissionSection } from "./CommissionSection";
import { NewsletterSection } from "./NewsletterSection";
import { FaqSection } from "./FaqSection";
import { CalendarSection } from "./CalendarSection";
import { SpeakersSection } from "./SpeakersSection";
import { SponsorsSection } from "./SponsorSection";
import { StyledMain } from "./style";

export const Main = () => {
  return (
    <StyledMain>
      <AboutSection />
      <SpeakersSection />
      <CalendarSection />
      <CommissionSection />
      <FaqSection />
      <NewsletterSection />
      <AddressSection />
      <SponsorsSection />
    </StyledMain>
  );
};
