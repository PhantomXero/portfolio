import React from "react";
import "./admin.css";
import { Button, ButtonGroup } from "@material-ui/core";

function Admin() {
  return (
    <ButtonGroup variant="outlined" color="secondary">
      <Button type="button" id="login" className="left">
        Log in
      </Button>
      <Button type="button" id="signup" className="right">
        Sign up
      </Button>
    </ButtonGroup>
  );
}

export default Admin;
