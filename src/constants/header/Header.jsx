import React from "react";
import "./Header.css";
import Icon from "../logo/icon/Icon";
import Nav from "../nav/Nav";
import { makeStyles } from "@material-ui/core";

const useStayles = makeStyles({
  header: {
    padding: 10,
    marginBottom: 15,
    height: 50,
  },
});

function Header() {
  const classes = useStayles();

  return (
    <header className={classes.header}>
      <Icon />
      <Nav />
    </header>
  );
}

export default Header;
