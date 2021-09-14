import styled from "styled-components";

export const LayoutDasboardView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  /*background-color: black; */
  & > Table {
    & > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
`;

export const TopTableMenu = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0px 0px 0px;
  margin-bottom: -30px;
  font-size: 20px;
  font-weight: bold;
  & > span:nth-child(1) {
    margin-right: 40px;
    &:hover {
      color: ${(props) => (props.disabled ? "#22d2a0" : "inherit")};
      cursor: ${(props) => (props.disabled ? "pointer" : "default")};
    }
    & > svg {
      width: 25px;
      height: 25px;
    }
  }
  & > span:nth-child(2) {
    margin-right: 40px;
    &:hover {
      color: #22d2a0;
      cursor: pointer;
    }
    & > svg {
      width: 25px;
      height: 25px;
    }
  }
  & > span:nth-child(3) {
    margin-right: 40px;
    &:hover {
      color: #22d2a0;
      cursor: pointer;
    }
    & > svg {
      width: 25px;
      height: 25px;
    }
  }
`;
