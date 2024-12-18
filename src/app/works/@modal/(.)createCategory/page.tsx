import Form from "@/app/works/problems/components/Form";
import React from "react";
import Modal from "@/components/Modal";
import Mask_Transparent from "../components/Mask_Transparent";
const ModalCreate = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const id = (await searchParams).id;
  if (!id) return <p>データを取得できませんでした</p>;
  return (
    <>
      <Modal>
        <Form id={id} />
      </Modal>
      <Mask_Transparent />
    </>
  );
};

export default ModalCreate;
