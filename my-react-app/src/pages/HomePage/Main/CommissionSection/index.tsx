import { StyledSection } from "./style";
import { CommissionOrganizingArticle } from "./OrganizingCommissionArticle";
import { ScientificCommissionArticle } from "./ScientificCommissionArticle";

export const CommissionSection = () => {
  return (
    <StyledSection>
      <CommissionOrganizingArticle />
      <ScientificCommissionArticle />
    </StyledSection>
  );
};
