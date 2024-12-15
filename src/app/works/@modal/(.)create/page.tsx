import Form from "@/app/works/home/components/Form";
import React from "react";
import Modal from "@/components/Modal";
import Mask_Transparent from "../components/Mask_Transparent";
const ModalCreate = () => {
  return (
    <>
      <Modal>
        <Form />
      </Modal>
      <Mask_Transparent />
    </>
  );
};

export default ModalCreate;
