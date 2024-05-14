import { Box, Typography } from "@material-ui/core";
import NameRed from "../../../components/spans/red/nameRed/NameRed";
import { Code } from "@material-ui/icons";
import "./icon.css";

function Icon() {
  return (
    <Box className="icon" itemType="div">
      <Code color="secondary" />
      <Typography variant="h5"> Dalitso </Typography>
      <NameRed />
      <Code />
    </Box>
  );
}

export default Icon;
