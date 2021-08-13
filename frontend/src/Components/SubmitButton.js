import React from "react";
import { Button } from "react-bootstrap";

const SubmitButton = ({ classname, name }) => {
  return (
    <>
      <Button className={classname} type="submit">
        {name}
      </Button>
    </>
  );
};

export default SubmitButton;
