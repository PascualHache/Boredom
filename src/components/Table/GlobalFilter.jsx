import React from "react";
import { useAsyncDebounce } from "react-table";
import InputBox from "../InputBox/InputBox";
import { GlobalStyleRow } from "./GlobalFilter.style";
import img from "../../assets/search.svg";

export default function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <GlobalStyleRow>
      <InputBox
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={"Search by name"}
        icon={img}
      />
    </GlobalStyleRow>
  );
}
