import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateSettingForm from "../features/setting/UpdateSettingForm";

const Setting = () => {
  return (
    <Row>
      <Heading as="h1">update setting hotel</Heading>
      <UpdateSettingForm />
    </Row>
  );
};

export default Setting;
