import React from "react";
import CardTask from "../CardTask/CardTask";
import { Modal } from "./ModalBox.style";

export default function ModalBox({ data, setOpenRandom, openRandom }) {
  const handleModal = () => {
    setOpenRandom(!openRandom);
  };
  return (
    openRandom && (
      <Modal onClick={handleModal}>
        <CardTask data={data} />
      </Modal>
    )
  );
}
