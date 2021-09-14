import styled from "styled-components";

export const LogoBox = styled.div`
  --primary: #22d2a0;
  --secondary: #192824;
  --background: #192824;
  --green: #1fc11b;
  --yellow: #ffd913;
  --orange: #ff9c55;
  --red: #ff5555;
  color: var(--primary);
  background-color: var(--background);
  display: block;
  width: fit-content;
  min-width: 80px;
  min-height: 10px;
  max-height: 10px;
  cursor: pointer;
  padding: 15px;
  margin: 40px 0px 10px 40px;
  border: 3px solid var(--primary);
  box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--green),
    20px -20px 0 -3px var(--background), 20px -20px var(--yellow),
    30px -30px 0 -3px var(--background), 30px -30px var(--orange);
  &:hover {
    animation: shadow-wave 1s ease infinite;
  }

  & > p {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: auto;
    line-height: 0.7;
  }

  @keyframes shadow-wave {
    0% {
      border: 3px solid var(--primary);
      box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--green),
        20px -20px 0 -3px var(--background), 20px -20px var(--yellow),
        30px -30px 0 -3px var(--background), 30px -30px var(--orange);
    }
    20% {
      border: 3px solid var(--red);
      box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--primary),
        20px -20px 0 -3px var(--background), 20px -20px var(--green),
        30px -30px 0 -3px var(--background), 30px -30px var(--yellow);
    }
    40% {
      border: 3px solid var(--orange);
      box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--red),
        20px -20px 0 -3px var(--background), 20px -20px var(--primary),
        30px -30px 0 -3px var(--background), 30px -30px var(--green);
    }
    60% {
      border: 3px solid var(--yellow);
      box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--orange),
        20px -20px 0 -3px var(--background), 20px -20px var(--red),
        30px -30px 0 -3px var(--background), 30px -30px var(--primary);
    }
    80% {
      border: 3px solid var(--green);
      box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--yellow),
        20px -20px 0 -3px var(--background), 20px -20px var(--orange),
        30px -30px 0 -3px var(--background), 30px -30px var(--red);
    }
    100% {
      border: 3px solid var(--primary);
      box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--green),
        20px -20px 0 -3px var(--background), 20px -20px var(--yellow),
        30px -30px 0 -3px var(--background), 30px -30px var(--orange);
    }
  }
`;
