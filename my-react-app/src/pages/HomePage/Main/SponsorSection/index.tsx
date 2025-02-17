import { StyledSection } from "./style";
import { SponsorRealizationArticle } from "./SponsorRealizationArticle";
import { SponsorGoldArticle } from "./SponsorsGoldArticle";
import { SponsorSilverArticle } from "./SponsorSilverArticle";
import { SponsorBronzeArticle } from "./SponsorBronzeArticle";
import { SponsorInstitutionalArticle } from "./SponsorInstitutionalArticle";
import { SponsorMidiaArticle } from "./SponsorMidiaArticle";

export const SponsorsSection = () => {
  return (
    <StyledSection>
      <SponsorRealizationArticle />

      <div className="sponsors__container">
        <SponsorGoldArticle />
        <SponsorSilverArticle />
      </div>

      <SponsorBronzeArticle />

      <div className="sponsors__container">
        <SponsorInstitutionalArticle />
        <SponsorMidiaArticle />
      </div>
    </StyledSection>
  );
};
