import { Button, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";

import React from "react";

// TODO:Change link to IG
function Instagram() {
  return (
    <Button
      href="https://www.linkedin.com/in/dalitso-banda-12b4a5182/"
      rel="noreferrer"
      color="primary"
    >
      <InstagramIcon />
      Instagram
    </Button>
  );
}

export default Instagram;
