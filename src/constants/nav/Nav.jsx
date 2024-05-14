import { Button, ButtonGroup } from "@material-ui/core";
import {
  Build,
  Home,
  Person,
  QuestionAnswer,
  Star,
  Work,
} from "@material-ui/icons";
import React from "react";

let bk = "secondary";

function Nav() {
  return (
    <ButtonGroup variant="outlined" className="links" color={bk}>
      <Button href="/" startIcon={<Home color={bk} />}>
        Home
      </Button>
      <Button href="/portfolio" startIcon={<Work color={bk} />}>
        Portfolio
      </Button>
      <Button href="/services" startIcon={<Build color={bk} />}>
        Services
      </Button>
      <Button href="/about" startIcon={<Person color={bk} />}>
        About
      </Button>
      <Button href="/contact" startIcon={<QuestionAnswer color={bk} />}>
        Contact
      </Button>
      <Button href="/reviews" startIcon={<Star color={bk} />}>
        Reviews
      </Button>
    </ButtonGroup>
  );
}

export default Nav;
