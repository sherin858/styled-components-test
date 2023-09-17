import logo from "./logo.svg";
import "./App.css";
import StyledButton, {
  DarkButton,
  FancyButton,
  SubmitButton,
} from "./components/Button/button.styles";
import { ThemeProvider, createGlobalStyle } from "styled-components";
function App() {
  const theme = {
    dark: {
      primary: "#000",
      text: "#FFF",
    },
    light: {
      primary: "#FFF",
      text: "#000",
    },
  };
  const GlobalStyle = createGlobalStyle`
    button{
      border-radius:0.5rem
    }
  `;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <StyledButton type="submit">StyledButton</StyledButton>
        <div></div>
        <br />
        <StyledButton variant="outline">StyledButton</StyledButton>
        <div></div>
        <br />
        <FancyButton>FancyButton</FancyButton>
        <div></div>
        <br />
        <SubmitButton>SubmitButton</SubmitButton>
        <div></div>
        <br />
        <DarkButton>DarkButton</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
