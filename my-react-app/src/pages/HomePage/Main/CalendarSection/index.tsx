import { StyledSection } from "./style";
import { CalendarArticle } from "./CalendarArticle";
import { TimerArticle } from "./TimerArticle";
import { PlanningArticle } from "./PlanningArticle";

export const CalendarSection = () => {
  return (
    <StyledSection>
      <CalendarArticle />
      <TimerArticle />
      <PlanningArticle />
    </StyledSection>
  );
};
