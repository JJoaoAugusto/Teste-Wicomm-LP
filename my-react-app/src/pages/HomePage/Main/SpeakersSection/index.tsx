import { SpeakerApresentationArticle } from "./SpeakerApresentationArticle";
import { SpeakersContentArticle } from "./SpeakersContentArticle";
import { SpeakersEventArticle } from "./SpeakersEventArticle";
import { StyledSection } from "./style";

export const SpeakersSection = () => {
  return (
    <StyledSection id="speakers">
      <SpeakerApresentationArticle />
      <SpeakersContentArticle />
      <SpeakersEventArticle />
    </StyledSection>
  );
};
