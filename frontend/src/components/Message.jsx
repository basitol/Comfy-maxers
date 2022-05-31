import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, Children }) => {
  return (
    <div>
      <Alert variant={variant}>{Children}</Alert>
    </div>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
