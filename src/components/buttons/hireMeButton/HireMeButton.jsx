import React from "react";
import "./hireMeButton.css";
import { Button } from "@material-ui/core";

function HireMeButton() {
  return (
    <Button type="submit" variant="outlined" className="job_offer">
      Hire Request
    </Button>
  );
}

export default HireMeButton;
