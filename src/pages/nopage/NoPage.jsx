import { Paper, Typography, makeStyles } from "@material-ui/core";
import { Error } from "@material-ui/icons";
import React from "react";

const useStayles = makeStyles({
  paper: {
    padding: 35,
    backgroundColor: "black",
    color: "white",
    width: "50%",
    margin: "auto",
    marginTop: "100",
  },
  title: {
    padding: 10,
  },
  icon: {
    paddingTop: 20,
  },
});

function NoPage() {
  const classes = useStayles();

  return (
    <Paper className={classes.paper} elevation={12}>
      <Error fontSize="large" className={classes.icon} />
      <Typography variant="h1" className={classes.title}>
        404
      </Typography>
      <Typography variant="h2" className={classes.title}>
        No Page Found
      </Typography>
    </Paper>
  );
}

export default NoPage;
