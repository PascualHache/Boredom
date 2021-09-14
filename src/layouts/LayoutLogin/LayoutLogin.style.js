import styled from "styled-components";

export const BackgroundLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ img }) => img});
  background-color: rgba(255, 255, 255, 0.7);
  background-blend-mode: lighten;
`;
