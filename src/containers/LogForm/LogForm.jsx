import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/ButtonRounded";
import InputBox from "../../components/InputBox/InputBox";
import { ErrorMsg, Form } from "./LogForm.style";

export default function LogForm(props) {
  const [state, setState] = useState({ value: "" });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.value !== "" && !error) {
      localStorage.setItem("userName", state.value);
      history.push("/dashboard");
    } else {
      setMessage(
        state.value !== ""
          ? "Introduce alphabetic values"
          : "This field couldn't be empty"
      );
      setError(true);
    }
  };

  const handleChange = (e) => {
    setState({ value: e.target.value });
    var letters = /^[A-Za-z]+$/;
    setMessage("");
    if (e.target.value.match(letters)) {
      setError(false);
    } else {
      setError(true);
      setMessage("Introduce alphabetic values");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox
        type="text"
        placeholder="What's your name?"
        value={state.value}
        onChange={handleChange}
      />
      <div>
        <Button type="submit" value="LET'S GO" />
      </div>
      {error && <ErrorMsg>{message}</ErrorMsg>}
    </Form>
  );
}
