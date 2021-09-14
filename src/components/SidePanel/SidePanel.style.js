import styled from "styled-components";

export const SidePanelBox = styled.div`
  height: 100%;
  width: ${({ open }) => (open ? "100%" : "0%")};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: transparent;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;

export const SidePanelColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  width: 80%;
  background-color: pink;
  top: 0;
  right: 0;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  background-color: #ff9c55;
  & > div:nth-child(1) {
    text-align: right;
    margin: 10px 10px 0px 0px;
    cursor: pointer;
    font-size: 30px;
    font-weight: bold;
    &:hover {
      color: white;
    }
  }
  & > div:nth-child(2) {
    font-size: 28px;
    font-weight: bolder;
    text-align: left;
    padding-left: 50px;
  }
  & > div:nth-child(3) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 30px;
  }
`;
