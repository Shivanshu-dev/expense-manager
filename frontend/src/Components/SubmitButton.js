import React from "react";
import { Button } from "react-bootstrap";

const SubmitButton = ({ classname, name, disable }) => {
  return (
    <>
      <Button disabled={disable} className={classname} type="submit">
        {name}
      </Button>
    </>
  );
};

export default SubmitButton;
