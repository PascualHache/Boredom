import React from "react";
import LogBox from "../../components/LogBox/LogBox";
import img from "../../assets/skulls.svg";
import { BackgroundLogin } from "./LayoutLogin.style";

export default function LayoutLogin() {
  return (
    <BackgroundLogin img={img}>
      <LogBox />
    </BackgroundLogin>
  );
}
