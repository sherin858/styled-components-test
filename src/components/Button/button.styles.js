import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant == "outline" ? "#F00" : "#FFF"};
  color: #0f0;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: yellow;
  }
`;

export default StyledButton;
export const FancyButton = styled(StyledButton)`
  background-color: pink;
`;

export const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: "submit",
}))``;

export const DarkButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;
