import { Button, Icon, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import React from "react";

function Github() {
  return (
    <Button
      aria-label="Github"
      href="https://github.com/PhantomXero"
      rel="noreferrer"
      color="primary"
    >
      <GitHubIcon />
      Github
    </Button>
  );
}

export default Github;
