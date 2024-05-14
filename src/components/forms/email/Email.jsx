import {
  Avatar,
  Box,
  Button,
  FormGroup,
  Input,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

function Email() {
  return (
    <Paper>
      <Box>
        <Avatar />
        <Typography variant="h5">Email</Typography>
      </Box>
      <FormGroup>
        <Input value={"First Name"}></Input>
        <Input value={"Last Name"}></Input>
        <Input value={"Email"}></Input>
        <Input value={"Message"}></Input>
        <Button typeof="submit" variant="contained">
          Send Email
        </Button>
      </FormGroup>
    </Paper>
  );
}

export default Email;
