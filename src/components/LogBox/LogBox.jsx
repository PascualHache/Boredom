import React from "react";
import LogForm from "../../containers/LogForm/LogForm";
import { LogContainer } from "./LogBox.style";

export default function LogBox() {
  return (
    <LogContainer>
      <h1>Hi bored person,</h1>
      <LogForm />
    </LogContainer>
  );
}
