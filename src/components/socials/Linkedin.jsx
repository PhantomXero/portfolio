import { Button, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import React from "react";

function Linkedin() {
  return (
    <Button
      href="https://www.linkedin.com/in/dalitso-banda-12b4a5182/"
      rel="noreferrer"
      color="primary"
    >
      <LinkedInIcon />
      Linkedin
    </Button>
  );
}

export default Linkedin;
