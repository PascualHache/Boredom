import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 30px;
  background: url(${(props) => props.icon}) no-repeat;
`;
