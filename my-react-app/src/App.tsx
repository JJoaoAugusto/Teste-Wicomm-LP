import { HomePage } from "./pages/HomePage";
import { GlobalStyle } from "./styles/globalStyle";
import { ResetStyle } from "./styles/resetStyle";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <HomePage />
    </>
  );
}

export default App;
