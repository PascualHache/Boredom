import styled from "styled-components";

export const CardTaskBox = styled.div`
  border: 3px solid #ffd913;
  max-width: 300px;
  position: relative;
  margin: 20px;

  & > img {
    width: 100%;
    filter: brightness(50%);
  }
  & > span {
    position: absolute;
    color: white;
    top: 10px;
    left: 12px;
    z-index: 2;
    font-size: 22px;
  }
  & > svg:nth-child(3) {
    position: absolute;
    cursor: pointer;
    color: rosybrown;
    top: 5px;
    right: 5px;
    z-index: 2;
    width: 30px;
    height: 30px;
    &:hover {
      color: lavender;
    }
  }
  & > svg:nth-child(2) {
    position: absolute;
    color: white;
    top: 5px;
    left: 25px;
    z-index: 2;
    width: 30px;
    height: 30px;
  }
`;

export const CardTaskTitle = styled.div`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 22px;
  max-width: 300px;
  position: absolute;
  top: 50px;
`;

export const CardFooter = styled.div`
  background-color: #22d2a0;
  margin-top: -4px;
  height: 50px;
  & > span {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
  }
`;
