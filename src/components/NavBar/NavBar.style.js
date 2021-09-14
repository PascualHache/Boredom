import styled from "styled-components";

export const NavBarBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #192824;
  & > div {
    position: relative;
    display: inline-block;
    & > button {
      background-color: transparent;
      color: white;
      padding: 10px;
      margin-right: 10px;
      font-size: 16px;
      border: none;
      cursor: pointer;
      & > svg {
        width: 30px;
        height: 30px;
      }
    }
    & > div {
      display: "block";
      position: absolute;
      right: 0px;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      & > a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }

      & > a:hover {
        background-color: #ddd;
      }
    }
  }
`;

export const NavBarSpacer = styled.div`
  color: #22d2a0;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 0.5px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px 40px;
  text-shadow: 1px 0 0 #000000, -1px 0 0 #000000, 0 1px 0 #000000,
    0 -1px 0 #000000, 1px 1px #000000, -1px -1px 0 #000000, 1px -1px 0 #000000,
    -1px 1px 0 #000000;
`;
