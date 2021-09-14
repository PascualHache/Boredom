import styled from "styled-components";

export const TableTasks = styled.table`
  width: 100%;

  & > thead {
    & > tr {
      height: 50px;
      background: #fff;
      border-bottom: 4px solid #ff9c55;
    }
  }

  & > tbody {
    & > tr {
      height: 50px;
      margin-bottom: 10px;
      border-bottom: 4px solid #ff9c55;
      & > td:nth-child(2) {
        text-align: left;
      }
    }
  }
`;

export const TablePagination = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  & > button {
    margin-right: 5px;
  }
`;

export const GlobalFilterBox = styled.div`
  width: 40%;
  display: flex;
  padding-right: 100px;
  margin-left: 700px;
  flex-direction: row;
  justify-content: flex-end;
`;
